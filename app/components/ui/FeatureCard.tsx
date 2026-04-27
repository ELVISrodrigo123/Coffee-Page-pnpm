"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "../../theme/base/lightColors";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        border: `2px solid ${lightColors.secondary.light}`,
        backgroundColor: lightColors.secondary.contrastText,
        height: "100%",
        "&:hover": {
          backgroundColor: lightColors.secondary.dark,
          border: "none",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: 4,
          gap: 2,
          height: "100%",
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{ width: 70, height: 70, objectFit: "contain", mx: "auto" }}
        />

        <Typography
          sx={{
            fontFamily: FONTS.playfair,
            fontWeight: 800,
            fontSize: "1.5rem",
            color: lightColors.primary.main,
            textAlign: "center",
            width: "100%",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: FONTS.playfair,
            color: lightColors.text.secondary,
            textAlign: "center",
            width: "100%",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
