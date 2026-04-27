'use client';

import { useState, useEffect } from 'react';
import {
  AppBar, Box, Button, Drawer, IconButton,
  List, ListItem, ListItemText, Toolbar, Typography,
  useMediaQuery, useTheme,
} from '@mui/material';
import MenuIcon  from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FONTS } from '@/app/theme/base/typography';
import { lightColors } from '@/app/theme';

const NAV_LINKS = ['Home', 'Menu', 'About Us', 'Contact Us'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [mounted, setMounted]       = useState(false);

  const theme    = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'transparent', zIndex: 1200 }}>
        <Toolbar sx={{ px: { xs: 2, sm: 6, md: 12 }, py: 2, justifyContent: 'space-between' }}>
          <Typography
            sx={{ fontFamily: FONTS.clicker, color: '#ffffff', fontSize: '2.5rem', fontWeight: 100 }}
          >
            Bean Scene
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor:    scrolled ? lightColors.background : 'transparent',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          zIndex:     1200,
        }}
      >
        <Toolbar
          sx={{
            px:             { xs: 2, sm: 6, md: 12 },
            py:             2,
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Typography
            sx={{
              fontFamily: FONTS.clicker,
              color:      scrolled ? lightColors.primary.main : '#ffffff',
              fontSize:   '2.5rem',
              fontWeight: 100,
              cursor:     'pointer',
              transition: 'color 0.3s ease',
            }}
          >
            Bean Scene
          </Typography>

          {/* Links desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <Typography
                key={link}
                sx={{
                  py:         1,
                  px:         2,
                  fontFamily: FONTS.playfair,
                  fontSize:   '.9rem',
                  color:      scrolled ? lightColors.primary.dark : '#ffffff',
                  cursor:     'pointer',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    background:   lightColors.primary.light + '22',
                    borderRadius: 10,
                  },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          {/* Auth desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Button
              variant="text"
              sx={{
                fontFamily: FONTS.playfair,
                px:         3,
                color:      scrolled ? lightColors.primary.dark : '#ffffff',
                transition: 'color 0.3s ease',
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: FONTS.playfair,
                px:         3,
              }}
            >
              Sign Up
            </Button>
          </Box>

          {/* Hamburger mobile */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              display:    { xs: 'flex', md: 'none' },
              color:      scrolled ? lightColors.primary.main : '#ffffff',
              transition: 'color 0.3s ease',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        disableScrollLock={true}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width:           260,
              backgroundColor: lightColors.primary.dark,
              px:              2,
              pt:              2,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: lightColors.primary.contrastText }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography
          sx={{
            fontFamily: FONTS.clicker,
            fontSize:   '1.8rem',
            color:      lightColors.primary.contrastText,
            mb:         3,
            pl:         1,
          }}
        >
          Bean Scene
        </Typography>

        <List disablePadding>
          {NAV_LINKS.map((link) => (
            <ListItem
              key={link}
              onClick={() => setMobileOpen(false)}
              sx={{
                cursor:       'pointer',
                borderRadius: '8px',
                mb:           0.5,
                '&:hover':    { backgroundColor: lightColors.primary.light },
              }}
            >
              <ListItemText
                primary={link}
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: FONTS.playfair,
                      fontSize:   '1rem',
                      color:      lightColors.primary.contrastText,
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2, px: 1 }}>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              fontFamily:   FONTS.playfair,
              color:        lightColors.primary.contrastText,
              borderColor:  lightColors.primary.contrastText,
              borderRadius: 20,
            }}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              fontFamily:      FONTS.playfair,
              fontWeight:      700,
              backgroundColor: lightColors.primary.main,
              color:           lightColors.primary.contrastText,
              borderRadius:    20,
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Drawer>
    </>
  );
}