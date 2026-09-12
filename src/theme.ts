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
  fontFamily: "'Prompt', sans-serif",
  headings: {
    fontFamily: "'Prompt', sans-serif",
    fontWeight: '700',
  },
  colors: {
    emerald,
  },
  primaryColor: 'emerald',
  primaryShade: 6,
  defaultRadius: 'md',
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
  },
});
