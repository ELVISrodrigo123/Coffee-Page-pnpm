// app/components/Section/MenuSection.tsx
'use client';

import { Box, Container, Grid, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors, theme } from "@/app/theme";
import CoffeeCard from "../ui/CoffeeCard";
import { useEffect, useState } from "react";
import { getListMenuCoffee } from "@/app/services/next-server/MenuSection.service";
import { CoffeeItem } from "@/app/services/MenuSection";

export default function MenuSection() {
  const [coffees, setCoffees] = useState<CoffeeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoffees = async () => {
      const getResponse = await getListMenuCoffee();
      const coffeeArray = getResponse.data?.resp || [];
      console.log(coffeeArray)
      setCoffees(coffeeArray);
      setLoading(false);
    };
    
    fetchCoffees();
  }, []);

  if (loading) {
    return (
      <Box sx={{ backgroundColor: lightColors.background, py: 8, textAlign: "center" }}>
        <Typography>Cargando nuestro menú...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: lightColors.background,
        pt: 0,
        pb: { xs: 2, md: 2 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: FONTS.playfair,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.8rem" },
              color: lightColors.primary.main,
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
              color: lightColors.text.secondary,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Explore all flavours of coffee with us. There is always a new cup
            worth experiencing
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {coffees.map((coffee, index) => (
            <Grid
              key={coffee.name || index}
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