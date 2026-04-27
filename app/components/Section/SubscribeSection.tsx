"use client";

import {
  Box,
  Button,
  colors,
  Container,
  InputBase,
  Typography,
} from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";

export default function SubscribeSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "visible",
        minHeight: { xs: "auto", md: "420px" },
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/image/BackgroundCoffeeTea.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: lightColors.tertiary.light,
          zIndex: 1,
        },
      }}
    >
      {/* CoffeeTea izquierda */}
      <Box
        component="img"
        src="/image/CoffeeTea.png"
        alt=""
        sx={{
          position: "absolute",
          left: { xs: -60, md: -130 },
          bottom: { xs: -40, sm: -60, md: -120 },
          width: { xs: "150px", sm: "200px", md: "400px" },
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* CoffeeTea derecha — espejada */}
      <Box
        component="img"
        src="/image/CoffeeTea.png"
        alt=""
        sx={{
          position: "absolute",
          right: { xs: -60, md: -130 },
          bottom: { xs: -40, sm: -60, md: -120 },
          width: { xs: "150px", sm: "200px", md: "400px" },
          zIndex: 2,
          pointerEvents: "none",
          transform: "scaleX(-1)",
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          py: { xs: 8, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontFamily: FONTS.playfair,
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: lightColors.text.primary,
            mb: 2,
          }}
        >
          Subscribe to get the Latest News
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: FONTS.playfair,
            color: lightColors.text.primary,
            mb: 5,
          }}
        >
          Don't miss out on our latest news, updates, tips and special offers
        </Typography>

        {/* Input + botón */}
        <Box
          sx={{
            display: "flex",
            borderRadius: "8px",
            overflow: "hidden",
            maxWidth: 620,
            mx: "auto",
            backgroundColor: lightColors.paper,
          }}
        >
          <InputBase
            placeholder="Enter your mail"
            fullWidth
            sx={{
              px: 3,
              py: 1.5,
              fontFamily: FONTS.playfair,
              fontSize: "0.95rem",
              color: lightColors.text.secondary,
            }}
          />
          <Button
            variant="contained"
            sx={{
              fontFamily: FONTS.playfair,
              fontWeight: 700,
              bgcolor: lightColors.buttonPrimary.main,
              color: lightColors.buttonPrimary.dark,
              px: 4,
              borderRadius: 0,
              fontSize: "1rem",
              flexShrink: 0,
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
