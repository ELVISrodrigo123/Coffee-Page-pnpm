// app/components/Section/TestimonialsSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";
import TestimonialCard from "../ui/TestimonialCard";
import { getListTestimonials } from "@/app/services/next-server/Testimonials.service";
import { TestimonialItem } from "@/app/services/Testimonials";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [splashPositions, setSplashPositions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const getResponse = await getListTestimonials();
      const testimonialsArray = getResponse.data?.resp || [];
      const positionsArray = getResponse.data?.splashPositions || [];
      console.log(testimonialsArray)
      console.log(positionsArray)
      setTestimonials(testimonialsArray);
      setSplashPositions(positionsArray);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const splash = splashPositions[current] || splashPositions[0];

  if (loading) {
    return (
      <Box
        sx={{
          backgroundColor: lightColors.background,
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography>Cargando testimonios...</Typography>
      </Box>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: lightColors.background,
        py: { xs: 8, md: 10 },
        width: "100%",
      }}
    >
      <Container>
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
            Our coffee perfection feedback
          </Typography>
          <Typography
            sx={{
              fontFamily: FONTS.playfair,
              fontSize: "1rem",
              color: lightColors.text.secondary,
            }}
          >
            Our customers has amazing things to say about us
          </Typography>
        </Box>

        {/* Carrusel */}
        <Box
          sx={{
            position: "relative",
            overflow: "visible",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* CoffeeLeft dinámico por slide */}
          {splash && (
            <Box
              component="img"
              src="/image/CoffeeLeft.png"
              alt=""
              sx={{
                position: "absolute",
                top: splash.top,
                right: splash.right,
                left: splash.left,
                bottom: splash.bottom,
                width: { xs: "350px", ms: "200px", md: "590px" },
                pointerEvents: "none",
                zIndex: 2,
                transform: splash.transform,
              }}
            />
          )}

          {/* Flecha izquierda */}
          <IconButton
            onClick={prev}
            sx={{
              backgroundColor: lightColors.buttonPrimary.main,
              color: lightColors.buttonPrimary.dark,
              borderRadius: 1.5,
              width: 60,
              height: 60,
              flexShrink: 0,
              zIndex: 2,
              mr: { xs: -5, md: -8 },
              "&:hover": {
                backgroundColor: lightColors.primary.main,
                color: lightColors.background,
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Card con transición */}
          <Box
            sx={{
              flex: 1,
              zIndex: 1,
              transition: "opacity 0.3s ease",
            }}
          >
            <TestimonialCard {...testimonials[current]} />
          </Box>

          {/* Flecha derecha */}
          <IconButton
            onClick={next}
            sx={{
              backgroundColor: lightColors.buttonPrimary.main,
              color: lightColors.buttonPrimary.dark,
              borderRadius: 1.5,
              width: 60,
              height: 60,
              flexShrink: 0,
              zIndex: 2,
              ml: { xs: -5, md: -8 },
              "&:hover": {
                backgroundColor: lightColors.primary.main,
                color: lightColors.background,
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        {/* Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrent(i)}
              sx={{
                mt: 5,
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: "50px",
                bgcolor: i === current ? "#603809" : "rgba(96,56,9,0.25)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
