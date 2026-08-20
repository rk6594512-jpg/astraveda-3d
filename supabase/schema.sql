-- AstraVeda 3D Database Schema
-- Run this in Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  language TEXT DEFAULT 'en' CHECK (language IN ('en', 'hi')),
  goal TEXT CHECK (goal IN ('career', 'marriage', 'education', 'money', 'spirituality', 'general')),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Birth profiles
CREATE TABLE IF NOT EXISTS public.birth_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  birth_date DATE NOT NULL,
  birth_time TIME NOT NULL,
  birth_place TEXT NOT NULL,
  latitude DECIMAL(10, 6),
  longitude DECIMAL(10, 6),
  timezone TEXT DEFAULT 'Asia/Kolkata',
  consent_given BOOLEAN DEFAULT FALSE,
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chart calculations
CREATE TABLE IF NOT EXISTS public.chart_calculations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES public.birth_profiles(id) ON DELETE CASCADE,
  chart_type TEXT NOT NULL CHECK (chart_type IN ('D1', 'D9', 'D10')),
  ascendant TEXT,
  moon_sign TEXT,
  nakshatra TEXT,
  pada INTEGER CHECK (pada BETWEEN 1 AND 4),
  planets JSONB DEFAULT '[]',
  houses JSONB DEFAULT '[]',
  dasha JSONB DEFAULT '{}',
  yogas JSONB DEFAULT '[]',
  doshas JSONB DEFAULT '[]',
  transits JSONB DEFAULT '[]',
  calculated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Palm scans
CREATE TABLE IF NOT EXISTS public.palm_scans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  hand_type TEXT CHECK (hand_type IN ('left', 'right')),
  image_url TEXT,
  palm_shape TEXT,
  lines JSONB DEFAULT '[]',
  mounts JSONB DEFAULT '{}',
  finger_proportions TEXT,
  overall_interpretation TEXT,
  disclaimer_shown BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chat sessions
CREATE TABLE IF NOT EXISTS public.chat_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT DEFAULT 'New Chat',
  language TEXT DEFAULT 'en',
  chart_context_id UUID,
  palm_context_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chat messages
CREATE TABLE IF NOT EXISTS public.chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.chat_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  agent_used TEXT,
  chart_context BOOLEAN DEFAULT FALSE,
  palm_context BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Saved reports
CREATE TABLE IF NOT EXISTS public.saved_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT CHECK (type IN ('kundli', 'palm', 'chat', 'combined')),
  content TEXT,
  chart_id UUID,
  palm_scan_id UUID,
  chat_session_id UUID,
  pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  plan TEXT NOT NULL CHECK (plan IN ('free', 'premium', 'pro')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  started_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  payment_id TEXT
);

-- Appointments
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  astrologer_name TEXT,
  scheduled_at TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER DEFAULT 30,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User preferences
CREATE TABLE IF NOT EXISTS public.user_preferences (
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE PRIMARY KEY,
  theme TEXT DEFAULT 'dark' CHECK (theme IN ('dark', 'light', 'system')),
  notifications_enabled BOOLEAN DEFAULT TRUE,
  reduced_motion BOOLEAN DEFAULT FALSE,
  font_size TEXT DEFAULT 'medium' CHECK (font_size IN ('small', 'medium', 'large')),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security Policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.birth_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chart_calculations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.palm_scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;

-- Users can only read/update their own data
CREATE POLICY "Users can read own data" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own data" ON public.users FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can read own profiles" ON public.birth_profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profiles" ON public.birth_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own profiles" ON public.birth_profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own profiles" ON public.birth_profiles FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can read own chats" ON public.chat_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own chats" ON public.chat_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own messages" ON public.chat_messages FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.chat_sessions WHERE id = chat_messages.session_id AND user_id = auth.uid())
);

CREATE POLICY "Users can read own reports" ON public.saved_reports FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own reports" ON public.saved_reports FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Functions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, name, email)
  VALUES (new.id, new.raw_user_meta_data->>'name', new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
