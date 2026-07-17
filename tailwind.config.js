const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        'border-subtle': 'hsl(var(--border-subtle))',
        'border-strong': 'hsl(var(--border-strong))',
        'border-brand': 'hsl(var(--border-brand))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        strong: 'hsl(var(--strong))',
        'muted-text': 'hsl(var(--muted-text))',
        subtle: 'hsl(var(--subtle))',
        link: 'hsl(var(--link))',
        'surface-sunken': 'hsl(var(--surface-sunken))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          hover: 'hsl(var(--brand-hover))',
          press: 'hsl(var(--brand-press))',
          subtle: 'hsl(var(--brand-subtle))',
        },
        'on-brand': 'hsl(var(--on-brand))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          subtle: 'hsl(var(--accent-subtle))',
          hover: 'hsl(var(--accent-hover))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        status: {
          'ontime-fg': 'hsl(var(--status-ontime-fg))',
          'ontime-bg': 'hsl(var(--status-ontime-bg))',
          'delay-fg': 'hsl(var(--status-delay-fg))',
          'delay-bg': 'hsl(var(--status-delay-bg))',
          'cancel-fg': 'hsl(var(--status-cancel-fg))',
          'cancel-bg': 'hsl(var(--status-cancel-bg))',
          'info-fg': 'hsl(var(--status-info-fg))',
          'info-bg': 'hsl(var(--status-info-bg))',
        },
      },
      fontFamily: {
        sans: ['Figtree_400Regular'],
        'sans-medium': ['Figtree_500Medium'],
        'sans-semibold': ['Figtree_600SemiBold'],
        'sans-bold': ['Figtree_700Bold'],
        serif: ['Lora_600SemiBold'],
        'serif-bold': ['Lora_700Bold'],
        mono: ['DMMono_400Regular'],
        'mono-medium': ['DMMono_500Medium'],
      },
      borderRadius: {
        xs: '6px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '28px',
        '3xl': '36px',
        pill: '999px',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      boxShadow: {
        card: '0px 2px 8px rgba(56, 50, 43, 0.10)',
        'card-hover': '0px 6px 16px rgba(56, 50, 43, 0.12)',
        cta: '0px 8px 22px rgba(237, 84, 24, 0.28)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.34, 1.3, 0.64, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
