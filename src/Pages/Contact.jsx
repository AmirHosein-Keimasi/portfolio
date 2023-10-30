import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import worldMap from "../Assets/map.svg";
import CustomDivider from "../Components/common/CustomDivider";
import FormContact from "../Components/Pages/FormContact";


const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<AccountCircle />}
          align="center"
          text="ارتباط با من "
        />

        <Grid container sx={{ mt: 10}}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid xs={12} sx={12} md={8}>
              <Card
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FormContact />
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                mt:5
              }} 
            >
              <Typography
                variant="h6"
                color="black"
                sx={{
                  fontFamily: "vazir",
                  mt: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                بیا در مورد همه چیز باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="black"
                sx={{
                  mt: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                👋{" "}
                <a
                  href="mailto:amirhosein.kiemasi@gmail.com"
                  alt="email"
                  style={{
                    color: "tomato",
                  }}
                >
                  ایمیل
                </a>{" "}
                بزن به من
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
