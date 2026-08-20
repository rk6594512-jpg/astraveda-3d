import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // AstraVeda 3D Cosmic Palette
        cosmic: {
          black: "#06070C",
          navy: "#0D1024",
          indigo: "#17183B",
          violet: "#38245E",
        },
        gold: {
          antique: "#C89B3C",
          bright: "#F1CE73",
          dim: "#8B6914",
        },
        moon: {
          white: "#F6F0E2",
          cream: "#EDE6D6",
        },
        lavender: {
          DEFAULT: "#AAA6BE",
          muted: "#7A7790",
        },
        status: {
          success: "#86C99A",
          warning: "#E4A94B",
          error: "#D66A6A",
        },
        // shadcn/ui semantic tokens mapped to cosmic theme
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Cambria", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        hindi: ["Noto Sans Devanagari", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "cosmic-gradient": "linear-gradient(180deg, #06070C 0%, #0D1024 40%, #17183B 100%)",
        "aurora-gradient": "linear-gradient(135deg, #38245E 0%, #17183B 50%, #0D1024 100%)",
        "gold-gradient": "linear-gradient(135deg, #C89B3C 0%, #F1CE73 50%, #C89B3C 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(23,24,59,0.6) 0%, rgba(13,16,36,0.8) 100%)",
      },
      boxShadow: {
        "glow-gold": "0 0 20px rgba(200,155,60,0.15), 0 0 40px rgba(200,155,60,0.08)",
        "glow-violet": "0 0 20px rgba(56,36,94,0.3), 0 0 40px rgba(56,36,94,0.15)",
        "glow-soft": "0 0 30px rgba(200,155,60,0.1)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.4), 0 0 1px rgba(200,155,60,0.2)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", boxShadow: "0 0 20px rgba(200,155,60,0.1)" },
          "50%": { opacity: "1", boxShadow: "0 0 30px rgba(200,155,60,0.25)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        glass: "16px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
