'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { FONTS } from '@/app/theme/base/typography';
import { lightColors } from '@/app/theme';

export default function DiscoverSection() {
  return (
    <Box
      sx={{
        position:        'relative',
        overflow:        'hidden',
        minHeight:       { xs: 'auto', md: '580px' },
        display:         'flex',
        alignItems:      'center',
        backgroundColor: lightColors.background,
      }}
    >
      <Box
        component="img"
        src="/image/CoffeeLeft.png"
        alt=""
        sx={{
          position:      'absolute',
          left:         { xs: -60,sm: -100, md: -90 }, 
          bottom: {xs: -20,sm: -35, md: -30},
          width:         { xs: '250px',sm:'400px', md: '450px' },
          zIndex:        3,
          pointerEvents: 'none',
          transform: 'scaleY(-1)'
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid
          container
          spacing={4}
          sx={{ alignItems: 'center', justifyContent: 'space-around' }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              sx={{
                fontFamily: FONTS.playfair,
                fontWeight: 700,
                fontSize:   { xs: '2rem', md: '3rem' },
                color:      lightColors.primary.main,
                lineHeight: 1.2,
                mb:         3,
              }}
            >
              Discover the best coffee
            </Typography>
            <Typography
              sx={{
                fontFamily: FONTS.playfair,
                fontSize:   { xs: '0.95rem', md: '1.05rem' },
                color:     lightColors.text.secondary,
                lineHeight: 1.9,
                mb:         4,
                maxWidth:   520,
                mx: {sx:'auto',sm:'auto', md:'0'},
              }}
            >
              Bean Scene is a coffee shop that provides you with quality coffee
              that helps boost your productivity and helps build your mood.
              Having a cup of coffee is good, but having a cup of real coffee is
              greater. There is no doubt that you will enjoy this coffee more
              than others you have ever tasted.
            </Typography>
            <Button
              variant="contained"
              sx={{ px: 4, py: 1.4 }}
            >
              Learn More
            </Button>
          </Grid>

          {/* Imagen */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="/image/TeaCoffee.jpg"
              alt="Discover the best coffee"
              sx={{
                width:        '110%',
                maxWidth:     500,
                height:       { xs: 280, md: 380 },
                objectFit:    'cover',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}