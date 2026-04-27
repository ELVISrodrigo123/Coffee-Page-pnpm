import { TypographyVariantsOptions } from '@mui/material/styles';
import { CustomColors } from '../types';

export const FONTS = {
  playfair: '"Playfair Display", Georgia, serif',
  clicker:  '"Clicker Script", cursive',
} as const;

export const createTypography = (colors: CustomColors): TypographyVariantsOptions => ({
  fontFamily: FONTS.playfair,

  h1: {
    fontWeight:    800,
    fontSize:      29,
    lineHeight:    2.2,
    letterSpacing: '-0.5px',
  },
  h2: {
    fontWeight:    700,
    fontSize:      23,
    lineHeight:    2.1,
    letterSpacing: '-0.3px',
  },
  h3: {
    fontWeight:    600,
    fontSize:      40,
    lineHeight:    2,
    letterSpacing: '-0.2px',
  },
  h4: {
    fontWeight: 500,
    fontSize:   14,
    lineHeight: 1.8,
  },
  h5: {
    fontWeight: 500,
    fontSize:   12,
    lineHeight: 1.6,
  },
  h6: {
    fontWeight: 400,
    fontSize:   10,
    lineHeight: 1.4,
  },
  subtitle1: {
    fontWeight: 400,
    fontSize:   15,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontWeight: 300,
    fontSize:   13,
    lineHeight: 1.5,
  },
  body1: {
    fontWeight: 400,
    fontSize:   19,
    lineHeight: 1.5,
  },
  body2: {
    fontWeight: 400,
    fontSize:   19,
    lineHeight: 1.5,
  },
  button: {
    fontWeight:    600,
    fontSize:      16,
    textTransform: 'none' as const,
  },
  caption: {
    fontWeight:    500,
    fontSize:      13,
    letterSpacing: '0px',
  },
  overline: {
    fontWeight:    600,
    fontSize:      12,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
  },
});