"use client";

import { Box, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  image: string;
}

export default function TestimonialCard({
  text,
  name,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: lightColors.secondary.contrastText,
        borderRadius: 0,
        border: `2px solid ${lightColors.secondary.light}`,
        px: { xs: 5,sm: 8, md: 6 },
        py: { xs: 4, md: 5 },
        mx: { xs: 1, md: 4 },
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Comillas */}
      <Typography
        sx={{
          fontFamily: FONTS.playfair,
          fontSize: {xs:120, sm:100, md: 280 },
          color: lightColors.primary.main,
          lineHeight: 0.7,
          textAlign: "left",
          paddingBottom: {sx:-8},
          marginBottom:{md: -8}
        }}
      >
        “
      </Typography>

      {/* Texto */}
      <Typography
        sx={{
          fontFamily: FONTS.playfair,
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          color: "#444",
          lineHeight: 1.9,
          mb: 4,
          maxWidth: 750,
          mx: "auto",
        }}
      >
        {text}
      </Typography>

      {/* Nombre y rol */}
      <Typography
        sx={{
          fontFamily: FONTS.playfair,
          fontWeight: 800,
          fontSize: "1.3rem",
          color: "#603809",
          mb: 0.5,
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontFamily: FONTS.playfair,
          fontSize: "0.9rem",
          color: "#707070",
          mb: 3,
        }}
      >
        {role}
      </Typography>

      {/* Foto */}
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: 80,
          height: 80,
          borderRadius: 1.5,
          objectFit: "cover",
          mx: "auto",
          display: "block",
          mb: -10,
        }}
      />
    </Box>
  );
}
