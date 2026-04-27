"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflowX: 'hidden',
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src="/image/coffee_header.svg"
        alt="Coffee background"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Overlay oscuro sobre la imagen */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: {
            md: "linear-gradient(to right, rgba(0, 0, 0, 0.7) 20%, rgba(255, 255, 255, 0) 100%)",
          },
        }}
      />

      {/* Hero content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pb: { xs: 8, md: 4 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: FONTS.playfair,
            mb: 1,
          }}
        >
          We've got your morning covered with
        </Typography>

        <Typography
          sx={{
            fontFamily: FONTS.clicker,
            fontSize: { xs: "8rem", sm: "10rem", md: "13rem" },
            fontWeight: 400,
            lineHeight: 1,
            my: 3,
          }}
        >
          Coffee
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: FONTS.playfair,
            maxWidth: 530,
            py: 3,
          }}
        >
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </Typography>

        <Button
          variant="contained"
          sx={{
            fontFamily: FONTS.playfair,
            px: 4,
            py: 1.5,
            width: "fit-content",
          }}
        >
          Order Now
        </Button>
      </Container>
    </Box>
  );
}
