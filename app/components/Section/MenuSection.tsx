"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";
import CoffeeCard from "../ui/CoffeeCard";

const COFFEES = [
  {
    image: "/image/CoffeeTeaImg1.jpg",
    name: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
  {
    image: "/image/CoffeeTeaImg2.jpg",
    name: "Chai Latte",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
  {
    image: "/image/CoffeeTeaImg3.jpg",
    name: "Macchiato",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
  {
    image: "/image/CoffeeTeaImg4.jpg",
    name: "Expresso",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
];

export default function MenuSection() {
  return (
    <Box
      sx={{
        backgroundColor: lightColors.background,
        pt: 0, // ← sin margen arriba
        pb: { xs: 2, md: 2 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: FONTS.playfair,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.8rem" },
              color: "#603809",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Enjoy a new blend of coffee style
          </Typography>
          <Typography
            sx={{
              fontFamily: FONTS.playfair,
              fontSize: { xs: "0.95rem", md: "1rem" },
              color: "#707070",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Explore all flavours of coffee with us. There is always a new cup
            worth experiencing
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          {COFFEES.map((coffee) => (
            <Grid
              key={coffee.name}
              sx={{ p: { xs: 2, sm: 0, md: 0 } }}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <CoffeeCard {...coffee} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
