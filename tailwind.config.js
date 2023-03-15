module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      'md': '853px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: "transparent",
      neutral: {
        DEFAULT: "rgba(var(--color-neutral), <alpha-value>)",
        50: "rgba(var(--color-neutral-50), <alpha-value>)",
        100: "rgba(var(--color-neutral-100), <alpha-value>)",
        200: "rgba(var(--color-neutral-200), <alpha-value>)",
        300: "rgba(var(--color-neutral-300), <alpha-value>)",
        400: "rgba(var(--color-neutral-400), <alpha-value>)",
        500: "rgba(var(--color-neutral-500), <alpha-value>)",
        600: "rgba(var(--color-neutral-600), <alpha-value>)",
        700: "rgba(var(--color-neutral-700), <alpha-value>)",
        800: "rgba(var(--color-neutral-800), <alpha-value>)",
        900: "rgba(var(--color-neutral-900), <alpha-value>)",
      },
      primary: {
        50: "rgba(var(--color-primary-50), <alpha-value>)",
        100: "rgba(var(--color-primary-100), <alpha-value>)",
        200: "rgba(var(--color-primary-200), <alpha-value>)",
        300: "rgba(var(--color-primary-300), <alpha-value>)",
        400: "rgba(var(--color-primary-400), <alpha-value>)",
        500: "rgba(var(--color-primary-500), <alpha-value>)",
        600: "rgba(var(--color-primary-600), <alpha-value>)",
        700: "rgba(var(--color-primary-700), <alpha-value>)",
        800: "rgba(var(--color-primary-800), <alpha-value>)",
        900: "rgba(var(--color-primary-900), <alpha-value>)",
      },
      secondary: {
        50: "rgba(var(--color-secondary-50), <alpha-value>)",
        100: "rgba(var(--color-secondary-100), <alpha-value>)",
        200: "rgba(var(--color-secondary-200), <alpha-value>)",
        300: "rgba(var(--color-secondary-300), <alpha-value>)",
        400: "rgba(var(--color-secondary-400), <alpha-value>)",
        500: "rgba(var(--color-secondary-500), <alpha-value>)",
        600: "rgba(var(--color-secondary-600), <alpha-value>)",
        700: "rgba(var(--color-secondary-700), <alpha-value>)",
        800: "rgba(var(--color-secondary-800), <alpha-value>)",
        900: "rgba(var(--color-secondary-900), <alpha-value>)",
      },
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.neutral.700 / 1"),
            "--tw-prose-headings": theme("colors.neutral.800 / 1"),
            "--tw-prose-lead": theme("colors.neutral.500 / 1"),
            "--tw-prose-links": theme("colors.primary.700 / 1"),
            "--tw-prose-bold": theme("colors.neutral.900 / 1"),
            "--tw-prose-counters": theme("colors.neutral.800 / 1"),
            "--tw-prose-bullets": theme("colors.neutral.500 / 1"),
            "--tw-prose-hr": theme("colors.neutral.200 / 1"),
            "--tw-prose-quotes": theme("colors.neutral.700 / 1"),
            "--tw-prose-quote-borders": theme("colors.primary.200 / 1"),
            "--tw-prose-captions": theme("colors.neutral.500 / 1"),
            "--tw-prose-code": theme("colors.secondary.700 / 1"),
            "--tw-prose-pre-code": theme("colors.neutral.700 / 1"),
            "--tw-prose-pre-bg": theme("colors.neutral.50 / 1"),
            "--tw-prose-th-borders": theme("colors.neutral.500 / 1"),
            "--tw-prose-td-borders": theme("colors.neutral.300 / 1"),
            "--tw-prose-invert-body": theme("colors.neutral.300 / 1"),
            "--tw-prose-invert-headings": theme("colors.neutral.50 / 1"),
            "--tw-prose-invert-lead": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-links": theme("colors.primary.400 / 1"),
            "--tw-prose-invert-bold": theme("colors.neutral.DEFAULT / 1"),
            "--tw-prose-invert-counters": theme("colors.neutral.400 / 1"),
            "--tw-prose-invert-bullets": theme("colors.neutral.600 / 1"),
            "--tw-prose-invert-hr": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-quotes": theme("colors.neutral.200 / 1"),
            "--tw-prose-invert-quote-borders": theme("colors.primary.900 / 1"),
            "--tw-prose-invert-captions": theme("colors.neutral.400 / 1"),
            "--tw-prose-invert-code": theme("colors.secondary.400 / 1"),
            "--tw-prose-invert-pre-code": theme("colors.neutral.200 / 1"),
            "--tw-prose-invert-pre-bg": theme("colors.neutral.700 / 1"),
            "--tw-prose-invert-th-borders": theme("colors.neutral.500 / 1"),
            "--tw-prose-invert-td-borders": theme("colors.neutral.700 / 1"),
            a: {
              textDecoration: "none",
              textDecorationColor: theme("colors.primary.300 / 1"),
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.neutral.DEFAULT / 1"),
                textDecoration: "none",
                backgroundColor: theme("colors.primary.600 / 1"),
                borderRadius: "0.09rem",
              },
            },
            "a code": {
              color: "var(--tw-prose-code)",
            },
            kbd: {
              backgroundColor: theme("colors.neutral.200 / 1"),
              padding: "0.1rem 0.4rem",
              borderRadius: "0.25rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            },
            mark: {
              color: theme("colors.neutral.800 / 1"),
              backgroundColor: theme("colors.primary.600 / 1"),
              padding: "0.1rem 0.2rem",
              borderRadius: "0.25rem",
            },
            code:{
              backgroundColor: theme("colors.neutral.50 / 1"),
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "0.25rem",
            },
            'code::before': {
              display: 'none'
            },
            'code::after': {
              display: 'none'
            },
            'p::before': {
              display: 'none'
            },
            'p::after': {
              display: 'none'
            },
            'a.active': {
              "text-decoration-color": theme("colors.primary.600 / 1"),
            },
            'p.active': {
              "text-decoration-color": theme("colors.primary.600 / 1"),
            }
          },
        },
        invert: {
          css: {
            a: {
              textDecorationColor: theme("colors.neutral.600 / 1"),
            },
            kbd: {
              color: theme("colors.neutral.200 / 1"),
              backgroundColor: theme("colors.neutral.700 / 1"),
            },
            mark: {
              backgroundColor: theme("colors.primary.400 / 1"),
            },
            code:{
              backgroundColor: theme("colors.neutral.700 / 1"),
            },
            'a.active': {
              "text-decoration-color": theme("colors.primary.400 / 1")
            },
            'p.active': {
              "text-decoration-color": theme("colors.primary.400 / 1")
            }
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
  ],
};
