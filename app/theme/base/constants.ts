// ─── THEME_CONSTANTS ─────────────────────────────────────────────────────────
// Constantes globales del sistema de diseño.
// ─────────────────────────────────────────────────────────────────────────────

export const THEME_CONSTANTS = {
  STORAGE_KEY: 'themeMode',
  DEFAULT_THEME: 'light' as const,
  SPACING: 8,

  // ── Breakpoints (px) ────────────────────────────────────────────────────────
  BREAKPOINTS: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1840,
  },

  // ── Sidebar ─────────────────────────────────────────────────────────────────
  SIDEBAR: {
    WIDTH: {
      EXPANDED: '245px',
      COLLAPSED: '80px',
      MOBILE: '250px',
    },
    HEIGHT: {
      HEADER: '70px',
      FOOTER: '60px',
    },
    SPACING: {
      ITEM: '4px',
      SECTION: '12px',
    },
    TRANSITION: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // ── Border radius ────────────────────────────────────────────────────────────
  BORDER_RADIUS: {
    SM: '6px',
    DEFAULT: '8px',
    LG: '12px',
    XL: '16px',
  },

  // ── Transitions ─────────────────────────────────────────────────────────────
  TRANSITIONS: {
    SHORT: '150ms',
    STANDARD: '300ms',
    LONG: '500ms',
    EASE: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // ── Z-Index ─────────────────────────────────────────────────────────────────
  Z_INDEX: {
    APP_BAR: 1100,
    DRAWER: 1200,
    MODAL: 1300,
    SNACKBAR: 1400,
    TOOLTIP: 1500,
  },
} as const;

export type ThemeConstants = typeof THEME_CONSTANTS;
