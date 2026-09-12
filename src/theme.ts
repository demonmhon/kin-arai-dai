import { createTheme, MantineColorsTuple } from '@mantine/core';

// Custom teal/emerald palette for medical health vibe
const emerald: MantineColorsTuple = [
  '#ecfdf5',
  '#d1fae5',
  '#a7f3d0',
  '#6ee7b7',
  '#34d399',
  '#10b981',
  '#059669',
  '#047857',
  '#065f46',
  '#064e3b',
];

export const theme = createTheme({
  fontFamily: "'Noto Sans Thai', 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily: "'Noto Sans Thai', 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: '700',
  },
  fontSizes: {
    xs: '0.8125rem', // ~13px (from 12px) - improves Thai character loop & mark legibility
    sm: '0.9375rem', // ~15px (from 14px)
    md: '1.0625rem', // ~17px (from 16px)
    lg: '1.1875rem', // ~19px (from 18px)
    xl: '1.375rem',  // ~22px (from 20px)
  },
  colors: {
    emerald,
  },
  primaryColor: 'emerald',
  primaryShade: 6,
  defaultRadius: 'md',
  radius: {
    xs: '4px',
    sm: '8px',
    md: '10px',
    lg: '16px',
    xl: '20px',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
      },
    },
    Paper: {
      defaultProps: {
        radius: 'lg',
      },
    },
  },
});
