"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";
import FeatureCard from "../ui/FeatureCard";

const FEATURES = [
  {
    icon: "/image/ServicesCoffee1.png",
    title: "Supreme Beans",
    description: "Beans that provides great taste",
  },
  {
    icon: "/image/ServicesCoffee2.png",
    title: "High Quality",
    description: "We provide the highest quality",
  },
  {
    icon: "/image/ServicesCoffee3.png",
    title: "Extraordinary",
    description: "Coffee like you have never tasted",
  },
  {
    icon: "/image/ServicesCoffee4.png",
    title: "Affordable Price",
    description: "Our Coffee prices are easy to afford",
  },
];

export default function WhySection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: lightColors.background,
        py: { xs: 8, md: 10 },
      }}
    >
      {/* CoffeeLeft — arriba derecha volteado */}
      <Box
        component="img"
        src="/image/CoffeeLeft.png"
        alt=""
        sx={{
          position: "absolute",
          top: { xs: -32, md: -35 },
          right: { xs: -50, md: -60 },
          width: { xs: "250px", md: "400px" },
          pointerEvents: "none",
          zIndex: 0,
          transform: "scaleX(-1) scaleY(-1)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              fontFamily: FONTS.playfair,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              color: lightColors.primary.main,
              mb: 2,
            }}
          >
            Why are we different?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: FONTS.playfair,
              color: lightColors.text.secondary,
            }}
          >
            We don't just make your coffee, we make your day!
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {FEATURES.map((feature) => (
            <Grid
              key={feature.title}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{ p: { xs: 2, sm: 0, md: 0 } }}
            >
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>

        {/* Footer CTA */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: FONTS.playfair,
              color: lightColors.text.secondary,
              mb: 1,
            }}
          >
            Great ideas start with great coffee, Lets help you achieve that
          </Typography>
          <Typography
            sx={{
              fontFamily: FONTS.playfair,
              fontWeight: 800,
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: lightColors.primary.main,
              mb: 3,
            }}
          >
            Get started today.
          </Typography>
          <Button variant="contained" sx={{ px: 5, py: 1.5 }}>
            Join Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
