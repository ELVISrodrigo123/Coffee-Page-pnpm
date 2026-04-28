"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";
import FeatureCard from "../ui/FeatureCard";
import { useEffect, useState } from "react";
import { getListFeatures } from "@/app/services/next-server/WhySection.service";
import { FeatureItem } from "@/app/services/WhySection";

export default function WhySection() {
  const [features, setFeatures] = useState<FeatureItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      const getResponse = await getListFeatures();
      const featuresArray = getResponse.data?.resp || [];
      console.log(featuresArray)
      setFeatures(featuresArray);
      setLoading(false);
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          backgroundColor: lightColors.background,
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography>Cargando características...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: lightColors.background,
        py: { xs: 8, md: 10 },
      }}
    >
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

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {features.map((feature) => (
            <Grid
              key={feature.title}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{ p: { xs: 2, sm: 0, md: 0 } }}
            >
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>

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
