import { Components, Theme } from '@mui/material/styles';
import { CustomColors } from '../types';
import { THEME_CONSTANTS } from '../base/constants';

export const createComponents = (colors: CustomColors): Components<Theme> => ({

  // ── CssBaseline ─────────────────────────────────────────────────────────────
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
      },
      body: {
        overflowX:       'hidden',
        backgroundColor: colors.background,
      },
      '@keyframes pulse': {
        '0%':   { transform: 'scale(.75)' },
        '20%':  { transform: 'scale(1.1)' },
        '40%':  { transform: 'scale(.75)' },
        '60%':  { transform: 'scale(1.05)' },
        '80%':  { transform: 'scale(.75)' },
        '100%': { transform: 'scale(.75)' },
      },
      '@keyframes float': {
        '0%':   { transform: 'translate(0%, 0%)' },
        '100%': { transform: 'translate(3%, 3%)' },
      },
    },
  },

  // ── Button ──────────────────────────────────────────────────────────────────
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius:  THEME_CONSTANTS.BORDER_RADIUS.DEFAULT,
        textTransform: 'none',
        fontWeight:    600,
        fontSize:      '.9rem',
        transition:    `all ${THEME_CONSTANTS.TRANSITIONS.STANDARD} ${THEME_CONSTANTS.TRANSITIONS.EASE}`,
      },
      contained: {
        backgroundColor: colors.buttonPrimary.main,
        color:           colors.buttonPrimary.dark,
        borderRadius: 25,
        '&:hover': {
          backgroundColor: colors.buttonPrimary.contrastText,
          color: colors.primary.main,
        },
      },
      outlined: {
        borderColor: colors.primary.main,
        color:       colors.primary.main,
        '&:hover': {
          backgroundColor: `${colors.primary.main}12`,
          borderColor:     colors.primary.dark,
        },
      },
      text: {
        color: colors.text.primary,
        fontSize:      '.9rem',
        '&:hover': {
          backgroundColor: colors.buttonPrimary.main,
          color:           colors.buttonPrimary.dark,
          borderRadius: 25,
        },
      },
    },
  },

  // ── TextField ───────────────────────────────────────────────────────────────
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius:    THEME_CONSTANTS.BORDER_RADIUS.DEFAULT,
          backgroundColor: colors.paper,
          '& fieldset': {
            borderColor: 'rgba(0,0,0,0.23)',
            borderWidth: '1px',
          },
          '&:hover fieldset': {
            borderColor: colors.primary.light,
          },
          '&.Mui-focused fieldset': {
            borderColor: colors.primary.main,
            borderWidth: '2px',
          },
        },
        '& .MuiInputLabel-root': {
          '&.Mui-focused': { color: colors.primary.main },
          '&.Mui-error':   { color: colors.error.main },
        },
        '& .MuiInputBase-input': {
          fontSize: '0.82rem',
        },
      },
    },
  },

  // ── Card ────────────────────────────────────────────────────────────────────
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius:  THEME_CONSTANTS.BORDER_RADIUS.LG,
        backgroundColor: colors.paper,
        transition:    `box-shadow ${THEME_CONSTANTS.TRANSITIONS.STANDARD}, transform ${THEME_CONSTANTS.TRANSITIONS.STANDARD}`,
        '&:hover': {
          transform:  'translateY(-2px)',
          boxShadow:  '0 8px 24px rgba(0,0,0,0.12)',
        },
      },
    },
  },

  // ── Paper ───────────────────────────────────────────────────────────────────
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor:  colors.paper,
        backgroundImage:  'none',
      },
      elevation1: {
        boxShadow:    '0 2px 12px rgba(0,0,0,0.08)',
        borderRadius: THEME_CONSTANTS.BORDER_RADIUS.LG,
        border:       `1px solid ${colors.divider}`,
      },
    },
  },

  // ── Chip ────────────────────────────────────────────────────────────────────
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: THEME_CONSTANTS.BORDER_RADIUS.SM,
        fontWeight:   600,
        fontSize:     '0.75rem',
      },
      colorPrimary: {
        backgroundColor: `${colors.primary.main}18`,
        color:           colors.primary.main,
        border:          `1px solid ${colors.primary.main}30`,
      },
    },
  },

  // ── Alert ───────────────────────────────────────────────────────────────────
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: THEME_CONSTANTS.BORDER_RADIUS.LG,
        fontWeight:   500,
      },
    },
  },

  // ── Tab ─────────────────────────────────────────────────────────────────────
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight:    600,
        fontSize:      '0.875rem',
      },
    },
  },

  // ── Divider ─────────────────────────────────────────────────────────────────
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: colors.divider,
      },
    },
  },

  // ── Link ────────────────────────────────────────────────────────────────────
  MuiLink: {
    styleOverrides: {
      root: {
        color:          colors.primary.main,
        textDecoration: 'none',
        '&:hover': {
          color:          colors.primary.dark,
          textDecoration: 'underline',
        },
      },
    },
  },

  // ── Tooltip ─────────────────────────────────────────────────────────────────
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: THEME_CONSTANTS.BORDER_RADIUS.SM,
        fontSize:     '0.75rem',
        fontWeight:   500,
      },
    },
  },
});
