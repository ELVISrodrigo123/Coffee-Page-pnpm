import { CustomColors, ThemeColors } from '../types';

// ─── Raw tokens (5 colores base) ─────────────────────────────────────────────
// Acá definís tus valores; el resto del sistema los usa automáticamente.

export const lightThemeColors: ThemeColors = {
  background:    '#FFFEFC',   // fondo general
  primary:       '#603809',   // color de marca (botón bg)
  tertiary:      '#F9C06A6B',   // h3, etiquetas especiales
  textPrimary:   '#ffffff',   // h1
  textSecondary: '#707070',   // body1
  buttonPrimary: '#F9C06A',
};

// ─── Paleta expandida para MUI ───────────────────────────────────────────────
export const lightColors: CustomColors = {
  // Fondos
  background: lightThemeColors.background,
  paper:      'rgba(255,255,255,0.95)',

  // Primario
  primary: {
    main:         lightThemeColors.primary,
    light:        '#8a5a2e',
    dark:         '#3d2205',
    contrastText: '#ffffff',
  },

  // Secundario
  secondary: {
    main:         'rgba(101, 56, 0, 0.75)',
    light:        '#F9C06A6B',
    dark:         '#FFEED8',
    contrastText: '#FFF9F1',
  },

  // Terciario (h3, chips, etiquetas)
  tertiary: {
    main:         lightThemeColors.tertiary,
    light:        '#603709bd',
    dark:         '#3d2205',
    contrastText: 'rgba(255,255,255,0.1)',
  },

  buttonPrimary: {
    main:         '#F9C06A',
    light:        '#FFEED8',
    dark:         '#1E1E1E',
    contrastText: '#FFF9F1',
  },

  // Semánticos
  error: {
    main:         '#d32f2f',
    light:        '#ef5350',
    dark:         '#c62828',
    contrastText: '#ffffff',
  },
  warning: {
    main:         '#ed6c02',
    light:        '#ff9800',
    dark:         '#e65100',
    contrastText: '#ffffff',
  },
  success: {
    main:         '#2e7d32',
    light:        '#4caf50',
    dark:         '#1b5e20',
    contrastText: '#ffffff',
  },
  info: {
    main:         '#0288d1',
    light:        '#03a9f4',
    dark:         '#01579b',
    contrastText: '#ffffff',
  },

  // Texto
  text: {
    primary:   lightThemeColors.textPrimary,   // h1 → blanco
    secondary: lightThemeColors.textSecondary, // body1 → #707070
    tertiary:  lightThemeColors.tertiary,      // h3 → #603809
    disabled:  '#BDBDBD',
    button:    lightThemeColors.primary,       // color letra botón
  },

  divider: 'rgba(0,0,0,0.12)',
};
