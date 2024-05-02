import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { Infos } from "../Components/Pages";
import avatar from "../Assets/logo.jpg";
import { Helmet } from "react-helmet-async";
import CustomAvatar from "../Components/common/CustomAvatar";
import CustomDivider from "../Components/common/CustomDivider";
import Skills from "../Components/Pages/Skills";
import { useTheme } from "@mui/material/styles";
const About = ({ helmetTitle }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: "100vh",
        overflowY: "scroll",
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="#warning.main"
              cColor="warning"
              icon={<CodeRounded />}
              align="right"
              text="توسعه دهنده فول استک و مدرس برنامه نویسی"
            />

            <Infos>نام و نام خانوادگی : امیرحسین کیماسی </Infos>
            <Infos>سن : 24</Infos>
            <Infos>شهر : اصفهان</Infos>
            <Infos>amirhosein.kiemasi@gmail.com : آدرس ایمیل</Infos>
            <Infos>شماره موبایل : 0933</Infos>
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar size={200} fallback="A.K" avatar={avatar} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="#warning.main"
              cColor="warning"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهات های من"
            />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
