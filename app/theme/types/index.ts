// ─── Palette base ────────────────────────────────────────────────────────────
export interface ColorShade {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

// ─── ThemeColors: the 5 raw color tokens ─────────────────────────────────────
export interface ThemeColors {
  /** Fondo general de la app */
  background: string;
  /** Color primario de marca (botón bg, links, etc.) */
  primary: string;
  /** Color terciario — h3, etiquetas especiales */
  tertiary: string;
  /** Texto principal (h1 blanco en light, etc.) */
  textPrimary: string;
  /** Texto secundario — body1 */
  textSecondary: string;
  buttonPrimary: string;
}

// ─── CustomColors: paleta expandida que consume MUI ──────────────────────────
export interface CustomColors {
  background: string;
  paper: string;

  primary: ColorShade;
  secondary: ColorShade;
  tertiary: ColorShade;
  buttonPrimary: ColorShade,
  error: ColorShade;
  warning: ColorShade;
  success: ColorShade;
  info: ColorShade;

  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    button: string;
  };

  divider: string;
}

export type ThemeMode = 'light' | 'dark';
