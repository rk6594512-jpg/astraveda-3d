/**
 * AstraVeda 3D — Core Type Definitions
 * Master Reference: Planetary positions, charts, agents, and UI types
 */

// ───────────────────────────────────────────────
// Planetary & Chart Types
// ───────────────────────────────────────────────

export type PlanetName = 
  | "Sun" | "Moon" | "Mars" | "Mercury" | "Jupiter" 
  | "Venus" | "Saturn" | "Rahu" | "Ketu";

export type ZodiacSign = 
  | "Aries" | "Taurus" | "Gemini" | "Cancer" 
  | "Leo" | "Virgo" | "Libra" | "Scorpio" 
  | "Sagittarius" | "Capricorn" | "Aquarius" | "Pisces";

export type Nakshatra = 
  | "Ashwini" | "Bharani" | "Krittika" | "Rohini" | "Mrigashira"
  | "Ardra" | "Punarvasu" | "Pushya" | "Ashlesha" | "Magha"
  | "Purva Phalguni" | "Uttara Phalguni" | "Hasta" | "Chitra"
  | "Swati" | "Vishakha" | "Anuradha" | "Jyeshtha" | "Mula"
  | "Purva Ashadha" | "Uttara Ashadha" | "Shravana" | "Dhanishta"
  | "Shatabhisha" | "Purva Bhadrapada" | "Uttara Bhadrapada" | "Revati";

export interface PlanetPosition {
  name: PlanetName;
  sign: ZodiacSign;
  degree: number;
  house: number;
  retrograde: boolean;
  nakshatra: Nakshatra;
  pada: 1 | 2 | 3 | 4;
}

export interface House {
  number: number;
  sign: ZodiacSign;
  planets: PlanetName[];
  lord: PlanetName;
}

export interface DashaPeriod {
  planet: PlanetName;
  startDate: string; // ISO date
  endDate: string;
  durationYears: number;
}

export interface BirthChart {
  id: string;
  userId: string;
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  latitude: number;
  longitude: number;
  timezone: string;
  ascendant: ZodiacSign;
  moonSign: ZodiacSign;
  nakshatra: Nakshatra;
  pada: 1 | 2 | 3 | 4;
  planets: PlanetPosition[];
  houses: House[];
  dasha: {
    mahadasha: DashaPeriod;
    antardasha: DashaPeriod;
    pratyantardasha: DashaPeriod;
  };
  yogas: Yoga[];
  doshas: Dosha[];
  createdAt: string;
}

export interface Yoga {
  name: string;
  description: string;
  planetsInvolved: PlanetName[];
  housesInvolved: number[];
  strength: "Strong" | "Moderate" | "Weak";
}

export interface Dosha {
  name: string;
  type: "Mangal" | "Kaal Sarp" | "Pitru" | "Nadi" | "Bhakoot" | "Gana" | "Other";
  severity: "High" | "Moderate" | "Low" | "None";
  description: string;
  remedies: string[];
}

export interface Transit {
  planet: PlanetName;
  currentSign: ZodiacSign;
  degree: number;
  retrograde: boolean;
  aspectOnHouses: number[];
  interpretation: string;
}

// ───────────────────────────────────────────────
// Chart Division Types
// ───────────────────────────────────────────────

export type ChartType = "D1" | "D9" | "D10";

export interface DivisionalChart {
  type: ChartType;
  name: string;
  description: string;
  ascendant: ZodiacSign;
  planets: PlanetPosition[];
  houses: House[];
}

// ───────────────────────────────────────────────
// Palm Scan Types
// ───────────────────────────────────────────────

export type HandType = "left" | "right";

export type PalmLine = 
  | "life" | "head" | "heart" | "fate" | "sun" | "marriage" | "health";

export interface PalmLineReading {
  line: PalmLine;
  visible: boolean;
  quality: "strong" | "moderate" | "weak" | "broken" | "absent";
  interpretation: string;
}

export interface PalmScanResult {
  id: string;
  userId: string;
  handType: HandType;
  palmShape: string;
  lines: PalmLineReading[];
  mounts: Record<string, "prominent" | "moderate" | "flat">;
  fingerProportions: string;
  overallInterpretation: string;
  disclaimer: string;
  createdAt: string;
}

export interface ImageQualityReport {
  brightness: number;      // 0-100
  blur: number;            // 0-100 (lower is sharper)
  framing: number;         // 0-100
  handDetected: boolean;
  overall: "excellent" | "good" | "fair" | "poor";
  feedback: string[];
}

// ───────────────────────────────────────────────
// AI Chat Types
// ───────────────────────────────────────────────

export type Language = "en" | "hi";

export type MessageRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  chartContext?: boolean;
  palmContext?: boolean;
  agentUsed?: AgentName;
}

export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  messages: ChatMessage[];
  language: Language;
  createdAt: string;
  updatedAt: string;
}

// ───────────────────────────────────────────────
// Multi-Agent Types
// ───────────────────────────────────────────────

export type AgentName = 
  | "orchestrator"
  | "kundli"
  | "dasha"
  | "transit"
  | "palm"
  | "matchmaking"
  | "panchang"
  | "muhurat"
  | "report"
  | "safety";

export interface AgentStatus {
  agent: AgentName;
  status: "idle" | "thinking" | "processing" | "complete" | "error";
  message?: string;
}

export interface ToolCall {
  tool: string;
  params: Record<string, unknown>;
  result?: unknown;
}

// ───────────────────────────────────────────────
// User & Profile Types
// ───────────────────────────────────────────────

export type UserGoal = "career" | "marriage" | "education" | "money" | "spirituality" | "general";

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  language: Language;
  goal: UserGoal;
  birthProfileId?: string;
  createdAt: string;
}

export interface BirthProfile {
  id: string;
  userId: string;
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  latitude: number;
  longitude: number;
  timezone: string;
  consentGiven: boolean;
  createdAt: string;
}

// ───────────────────────────────────────────────
// Report Types
// ───────────────────────────────────────────────

export interface SavedReport {
  id: string;
  userId: string;
  title: string;
  type: "kundli" | "palm" | "chat" | "combined";
  content: string;
  chartId?: string;
  palmScanId?: string;
  chatSessionId?: string;
  createdAt: string;
}

// ───────────────────────────────────────────────
// Panchang & Muhurat Types
// ───────────────────────────────────────────────

export interface PanchangData {
  date: string;
  tithi: string;
  nakshatra: Nakshatra;
  yoga: string;
  karana: string;
  sunrise: string;
  sunset: string;
  rahuKaal: { start: string; end: string };
  abhijitMuhurat: { start: string; end: string };
  amritKaal: { start: string; end: string };
}

export interface MuhuratResult {
  date: string;
  purpose: string;
  rating: "excellent" | "good" | "moderate" | "avoid";
  reason: string;
  startTime: string;
  endTime: string;
}

// ───────────────────────────────────────────────
// Matchmaking Types
// ───────────────────────────────────────────────

export interface MatchScore {
  category: string;
  score: number; // 0-8 for ashtakoot
  maxScore: number;
  description: string;
}

export interface KundliMatch {
  id: string;
  chart1Id: string;
  chart2Id: string;
  totalScore: number;
  maxScore: number;
  compatibility: "Excellent" | "Good" | "Moderate" | "Challenging";
  details: MatchScore[];
  doshaAnalysis: Dosha[];
  recommendation: string;
  createdAt: string;
}

// ───────────────────────────────────────────────
// UI Types
// ───────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  titleHi?: string;
  description: string;
  descriptionHi?: string;
  cta: string;
  ctaHi?: string;
  href: string;
  gradient?: string;
}

export interface CosmicStatusCard {
  label: string;
  value: string;
  sublabel?: string;
  icon?: React.ReactNode;
}
