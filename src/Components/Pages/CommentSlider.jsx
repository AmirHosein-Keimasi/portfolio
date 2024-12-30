import React from "react";
import { Avatar, Box, Button, Typography, Grid } from "@mui/material";
import Slider from "react-slick";
import { projects } from "../../constants/DevSkills";

const ProjectShowcase = () => {
  const options = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <Box component="div">
      <Slider {...options}>
        {projects.map((project, index) => (
          <Box key={index} component="div">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: { xs: "center", md: "end" },
                padding: { xs: 4, md: 15 },
              }}
            >
              {/* Header Section */}
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  position: "relative",
                  display: "inline-block",
                  "& a": {
                    textDecoration: "none",
                    color: "inherit",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      display: "block",
                      width: 0,
                      height: "2px",
                      background: "gray",
                      transition: "width 0.3s ease",
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                    },
                  },
                  "& a:hover::after": {
                    width: "100%",
                  },
                }}
              >
                <a href={project.websiteLink}>{project.title}</a>
              </Typography>

              {/* Content Section */}
              <Grid container alignItems="center" spacing={3}>
                {project.imgSrc && (
                  <Grid item xs={12} md={6}>
                    <img
                      src={project.imgSrc}
                      alt="Devices Showcase"
                      style={{
                        width: "100%",
                        maxWidth: "700px",
                        margin: "0 auto",
                      }}
                    />
                  </Grid>
                )}
                <Grid item xs={12} md={project.imgSrc ? 6 : 12}>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "text.secondary",
                      mb: 2,
                      textAlign: { xs: "center", md: "end" },
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "text.secondary",
                      textAlign: { xs: "center", md: "end" },
                    }}
                  >
                    : تکنولوژی‌ها
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "text.secondary",
                      textAlign: { xs: "center", md: "end" },
                    }}
                  >
                    {project.technologies}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "text.secondary",
                      textAlign: { xs: "center", md: "end" },
                    }}
                  >
                    : ویژگی‌ها
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "text.secondary",
                      textAlign: { xs: "center", md: "end" },
                    }}
                  >
                    ویژگی‌ها: {project.features}
                  </Typography>
                  {/* Buttons Section */}
                  <Box
                    sx={{
                      mt: 4,
                      display: "flex",
                      justifyContent: { xs: "center", md: "end" },
                      gap: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      size="large"
                      sx={{
                        borderRadius: "25px",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                      href={project.websiteLink}
                    >
                      مشاهده وبسایت
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      size="large"
                      sx={{
                        borderRadius: "25px",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                      href={project.codeLink}
                    >
                      مشاهده کد
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              {/* Icons Section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "end" },
                  mt: 2,
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                {project.icons.map((icon, idx) => (
                  <Avatar
                    key={idx}
                    src={icon}
                    alt={`Icon ${idx}`}
                    sx={{ width: 50, height: 50 }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectShowcase;
