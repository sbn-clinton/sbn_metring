import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0b304d",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#5c99c5",
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
          DEFAULT: "#1d5b8a",
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
        // METRING enhanced brand colors
        "metring-dark": "#0b304d",
        "metring-blue": "#5c99c5",
        "metring-medium": "#1d5b8a",
        "metring-light": "#afcbe3",
        // Additional AI/Tech themed colors
        "cyber-blue": "#00d4ff",
        "neon-green": "#39ff14",
        "electric-purple": "#8a2be2",
        "robot-silver": "#c0c0c0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-x": {
          "0%, 100%": {
            "transform": "translateX(0%)",
          },
          "50%": {
            "transform": "translateX(-100%)",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "transform": "translateY(0%)",
          },
          "50%": {
            "transform": "translateY(-100%)",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "transform": "translate(0%, 0%)",
          },
          "25%": {
            "transform": "translate(-100%, 0%)",
          },
          "50%": {
            "transform": "translate(-100%, -100%)",
          },
          "75%": {
            "transform": "translate(0%, -100%)",
          },
        },
        "float": {
          "0%, 100%": {
            "transform": "translateY(0px)",
          },
          "50%": {
            "transform": "translateY(-20px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            "box-shadow": "0 0 20px rgba(92, 153, 197, 0.3)",
          },
          "50%": {
            "box-shadow": "0 0 40px rgba(92, 153, 197, 0.6)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "20px 20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
