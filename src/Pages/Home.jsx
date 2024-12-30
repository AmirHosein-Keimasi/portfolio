
import { Box, Typography, Button, Avatar, Container } from "@mui/material";
import About from "./About";
import Resume from "./Resume";
import { Contact } from ".";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import { Helmet } from "react-helmet-async";
import src1 from "../Assets/1.png";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Comments from "./Comment";
import ContactCard from "./ContactCard";
const Header = ({ helmetTitle }) => {
  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          my: 10,
          direction: "rtl",
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          gap={6}
        >
          <Avatar
            src={src1}
            alt="Profile"
            sx={{
              width: { xs: 150, md: 300 },
              height: { xs: 150, md: 300 },
            }}
          />

          <Box flex="1" textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h5"
              component="h5"
              fontWeight="bold"
              lineHeight={1.4}
              sx={{ fontSize: { xs: "24px", md: "32px" } }}
            >
              کیفیتی که شما را{" "}
              <Typography
                component="span"
                variant="h4"
                sx={{ color: "success.main", fontWeight: "bold" }} // اعمال رنگ و استایل
              >
                شگفت‌زده
              </Typography>{" "}
              خواهد کرد
            </Typography>

            <Typography
              variant="body1"
              color="textSecondary"
              my={2}
              lineHeight={1.8}
              sx={{ fontSize: { xs: "16px", md: "18px" } }}
            >
              من یا مسئولیتی رو نمی‌پذیرم یا اگه بپذیرم به بهترین شکل ممکن
              انجامش میدم. وقتی با من کار کنید همیشه مطمئن هستید که پروژه‌ها با
              بهترین کیفیت و در زمان مقرر انجام میشن.
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{
                borderRadius: "25px",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              <ExpandMoreIcon />
              شروع یک همکاری خاطره‌انگیز
            </Button>
            <SocialMediaIcons />
          </Box>
        </Box>
      </Container>
    </>
  );
};

const App = () => {
  return (
    <Box sx={{ overflowY: "auto", height: "100vh" }}>
      <Header />
      <About />
      <Resume />
      <Comments />
      <ContactCard />
      <Contact />
    </Box>
  );
};

export default App;
