"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";

export default function CoffeeSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "auto", md: "650px" },
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
          backgroundColor: lightColors.secondary.main,
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, py: { xs: 6, md: 8 } }}
      >
        <Grid
          container
          spacing={4}
          sx={{ alignItems: "center", justifyContent: "space-around" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              sx={{
                fontFamily: FONTS.playfair,
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 3,
              }}
            >
              Get a chance to have an Amazing morning
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: FONTS.playfair,
                mb: 4,
                maxWidth: 420,
                mx: { xs: "auto", ms: "auto", md: 0 },
              }}
            >
              We are giving you a one time opportunity to experience a better
              life with coffee.
            </Typography>
            <Button variant="contained" sx={{ px: 4, py: 1.4 }}>
              Order Now
            </Button>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 500,
                height: { xs: 200, sm: 500, md: 400 },
              }}
            >
              <Box
                component="img"
                src="/image/Coffee.png"
                alt=""
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "100%",
                  transform: "translate(-44%, -50%)",
                  width: "150%",
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src="/image/GlassCoffee.png"
                alt="Amazing morning coffee"
                sx={{
                  position: "absolute",
                  transform: {
                    xs: "translate(50%, 0%)",
                    sm: "translate(35%, 0%)",
                    md: "translate(75%, 0%)",
                  },
                  width: { xs: "50%", sm: "60%", md: "60%" },
                  zIndex: 2,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
