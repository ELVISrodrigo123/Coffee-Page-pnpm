import { createTheme, Theme } from '@mui/material/styles';
import { lightColors } from './base/lightColors';
import { createTypography } from './base/typography';
import { createComponents } from './components';
import { THEME_CONSTANTS } from './base/constants';
import { CustomColors } from './types';

// ─── createAppTheme ───────────────────────────────────────────────────────────
// Genera el tema MUI completo a partir de la paleta activa.
// Por ahora sólo tenemos "light"; cuando quieras dark, pasá darkColors.
// ─────────────────────────────────────────────────────────────────────────────

export const createAppTheme = (colors: CustomColors = lightColors): Theme =>
  createTheme({
    // ── Spacing ───────────────────────────────────────────────────────────────
    spacing: THEME_CONSTANTS.SPACING,

    // ── Breakpoints ───────────────────────────────────────────────────────────
    breakpoints: {
      values: THEME_CONSTANTS.BREAKPOINTS,
    },

    // ── Paleta ────────────────────────────────────────────────────────────────
    palette: {
      mode: 'light',
      background: {
        default: colors.background,
        paper:   colors.paper,
      },
      primary: {
        main:         colors.primary.main,
        light:        colors.primary.light,
        dark:         colors.primary.dark,
        contrastText: colors.primary.contrastText,
      },
      secondary: {
        main:         colors.secondary.main,
        light:        colors.secondary.light,
        dark:         colors.secondary.dark,
        contrastText: colors.secondary.contrastText,
      },
      error: {
        main:  colors.error.main,
        light: colors.error.light,
        dark:  colors.error.dark,
      },
      warning: {
        main:  colors.warning.main,
        light: colors.warning.light,
        dark:  colors.warning.dark,
      },
      success: {
        main:  colors.success.main,
        light: colors.success.light,
        dark:  colors.success.dark,
      },
      info: {
        main:  colors.info.main,
        light: colors.info.light,
        dark:  colors.info.dark,
      },
      text: {
        primary:   colors.text.primary,
        secondary: colors.text.secondary,
        disabled:  colors.text.disabled,
      },
      divider: colors.divider,
    },

    // ── Tipografía ────────────────────────────────────────────────────────────
    typography: createTypography(colors),

    // ── Shape ─────────────────────────────────────────────────────────────────
    shape: {
      borderRadius: 8,
    },

    // ── Transitions ───────────────────────────────────────────────────────────
    transitions: {
      duration: {
        shortest:       150,
        shorter:        200,
        short:          250,
        standard:       300,
        complex:        375,
        enteringScreen: 225,
        leavingScreen:  195,
      },
    },

    // ── Z-Index ───────────────────────────────────────────────────────────────
    zIndex: {
      appBar:  THEME_CONSTANTS.Z_INDEX.APP_BAR,
      drawer:  THEME_CONSTANTS.Z_INDEX.DRAWER,
      modal:   THEME_CONSTANTS.Z_INDEX.MODAL,
      snackbar: THEME_CONSTANTS.Z_INDEX.SNACKBAR,
      tooltip: THEME_CONSTANTS.Z_INDEX.TOOLTIP,
    },

    // ── Componentes ───────────────────────────────────────────────────────────
    components: createComponents(colors),
  });

// Tema por defecto exportado listo para usar
export const theme = createAppTheme(lightColors);

// Re-exports útiles
export { lightColors } from './base/lightColors';
export { THEME_CONSTANTS } from './base/constants';
export type { CustomColors, ThemeColors, ThemeMode } from './types';
