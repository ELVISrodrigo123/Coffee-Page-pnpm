"use client";

import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FONTS } from "@/app/theme/base/typography";
import { lightColors } from "@/app/theme";

const ABOUT_LINKS = ["Menu", "Features", "News & Blogs", "Help & Supports"];
const COMPANY_LINKS = ["How we work", "Terms of service", "Pricing", "FAQ"];

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/image/CoffeeFooter.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `linear-gradient(0deg, rgba(204, 133, 71, 0.9) 0%, rgba(46, 32, 1, 0.9) 100%)`,
          width: "100%",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          pb: { xs: 6, md: 8 },
          pt: { xs: 6, md: 20 },
        }}
      >
        <Grid container spacing={6}>
          {/* Logo + descripción + redes */}
          <Grid size={{ xs: 12, sm: 8, md: 4 }}>
            <Typography
              sx={{
                fontFamily: FONTS.clicker,
                fontSize: "3rem",
                color: lightColors.text.primary,
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              Bean Scene
            </Typography>
            <Typography
              sx={{
                fontFamily: FONTS.playfair,
                fontSize: "0.9rem",
                color: lightColors.text.primary,
                lineHeight: 1.8,
                mb: 3,
                mx: { xs: "auto", sm: "auto", md: 0 },
                maxWidth: 320,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </Typography>

            {/* Redes sociales */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: { xs: "center", sm: "cente", md: "left" },
              }}
            >
              {[
                { icon: <FacebookIcon />, label: "Facebook" },
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <YouTubeIcon />, label: "YouTube" },
                { icon: <TwitterIcon />, label: "Twitter" },
              ].map(({ icon, label }) => (
                <IconButton
                  key={label}
                  aria-label={label}
                  sx={{
                    color: lightColors.paper,
                    backgroundColor: lightColors.tertiary.contrastText,
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* About */}
          <Grid
            size={{ xs: 6, sm: 4, md: 2.5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "start", md: "start" },
            }}
          >
            <Typography
              sx={{
                fontFamily: FONTS.playfair,
                fontWeight: 800,
                fontSize: "1.2rem",
                color: lightColors.text.primary,
                my: 3,
              }}
            >
              About
            </Typography>
            {ABOUT_LINKS.map((link) => (
              <Typography
                key={link}
                sx={{
                  fontFamily: FONTS.playfair,
                  fontSize: "0.9rem",
                  color: lightColors.text.primary,
                  mb: 1.5,
                  cursor: "pointer",
                  "&:hover": { color: lightColors.buttonPrimary.main },
                }}
              >
                {link}
              </Typography>
            ))}
          </Grid>

          {/* Company */}
          <Grid
            size={{ xs: 6, sm: 5, md: 2.5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography
              sx={{
                fontFamily: FONTS.playfair,
                fontWeight: 800,
                fontSize: "1.2rem",
                color: lightColors.text.primary,
                my: 3,
              }}
            >
              Company
            </Typography>
            {COMPANY_LINKS.map((link) => (
              <Typography
                key={link}
                sx={{
                  fontFamily: FONTS.playfair,
                  fontSize: "0.9rem",
                  color: lightColors.text.primary,
                  mb: 1.5,
                  cursor: "pointer",
                  "&:hover": { color: lightColors.buttonPrimary.main },
                }}
              >
                {link}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid
            size={{ xs: 12, sm: 7, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography
              sx={{
                fontFamily: FONTS.playfair,
                fontWeight: 800,
                fontSize: "1.2rem",
                color: lightColors.text.primary,
                my: 3,
              }}
            >
              Contact Us
            </Typography>
            {[
              "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
              "+1 202-918-2132",
              "beanscene@mail.com",
              "www.beanscene.com",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontFamily: FONTS.playfair,
                  fontSize: "0.9rem",
                  color: lightColors.text.primary,
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
