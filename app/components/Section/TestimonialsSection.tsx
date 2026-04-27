"use client";

import { useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";
import TestimonialCard from "../ui/TestimonialCard";

const TESTIMONIALS = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "Jonny Thomas",
    role: "Project Manager",
    image: "/image/person1.jpg",
  },
  {
    text: "The coffee here is absolutely incredible. Every morning I come in and the baristas know exactly what I need. The atmosphere is warm, the beans are fresh, and the service is unmatched anywhere in the city.",
    name: "Sarah Mitchell",
    role: "Graphic Designer",
    image: "/image/person2.jpg",
  },
  {
    text: "Bean Scene changed my morning routine completely. I used to dread waking up early but now I look forward to every single cup. The quality and consistency is something truly special.",
    name: "Marcus Rivera",
    role: "Software Engineer",
    image: "/image/person3.jpg",
  },
  {
    text: "The coffee here is absolutely incredible. Every morning I come in and the baristas know exactly what I need. The atmosphere is warm, the beans are fresh, and the service is unmatched anywhere in the city.",
    name: "Smith Moore",
    role: "Graphic Designer",
    image: "/image/person4.jpg",
  },
];

// CoffeeLeft posiciones por slide — cada uno en esquina diferente
const SPLASH_POSITIONS = [
  {
    top: -150,
    right: -250,
    left: "unset",
    bottom: "unset",
    transform: "scaleX(-1) scaleY(-1)",
  },
  {
    top: "unset",
    right: "unset",
    left: -250,
    bottom: -150,
    transform: "scaleX(1) scaleY(1)",
  },
  {
    top: -150,
    right: -250,
    left: "unset",
    bottom: "unset",
    transform: "scaleX(-1) scaleY(-1)",
  },
  {
    top: "unset",
    right: "unset",
    left: -250,
    bottom: -150,
    transform: "scaleX(1) scaleY(1)",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const splash = SPLASH_POSITIONS[current];

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
      <Container /* maxWidth="lg" */>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              fontFamily: FONTS.playfair,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "#603809",
              mb: 2,
            }}
          >
            Our coffee perfection feedback
          </Typography>
          <Typography
            sx={{
              fontFamily: FONTS.playfair,
              fontSize: "1rem",
              color: "#707070",
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
            <TestimonialCard {...TESTIMONIALS[current]} />
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
          {TESTIMONIALS.map((_, i) => (
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
