"use client";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";

interface CoffeeCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

export default function CoffeeCard({
  image,
  name,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Imagen */}
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: "100%",
          height: 240,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Contenido */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          border: `2px solid ${lightColors.secondary.light}`,
          backgroundColor: lightColors.secondary.contrastText,
          borderTop: 0,
          alignItems: "center",
          textAlign: "center",
          px: 3,
          py: 2.5,
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: FONTS.playfair,
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "#603809",
            mb: 0.5,
          }}
        >
          {name}
        </Typography>

        <Typography
            variant="body1"
          sx={{
            fontFamily: FONTS.playfair,
            color: lightColors.text.secondary,
          }}
        >
          {description}
        </Typography>

        <Typography
          sx={{
            fontFamily: FONTS.playfair,
            fontWeight: 700,
            fontSize: "1.1rem",
            color: lightColors.primary.main,
            my: 1,
          }}
        >
          {price}
        </Typography>

        <Button variant="contained" sx={{ px: 4, py: 1 , mb: -5 }}>
          Order Now
        </Button>
      </CardContent>
    </Card>
  );
}
