import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { Infos } from "../Components/Pages";
import avatar from "../Assets/logo.jpg";
import { Helmet } from "react-helmet-async";
import CustomAvatar from "../Components/common/CustomAvatar";
import CustomDivider from "../Components/common/CustomDivider";
import Skills from "../Components/Pages/Skills";

const About = ({ helmetTitle }) => {

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text="توسعه دهنده فول استک و مدرس برنامه نویسی"
            />

            <Infos>نام و نام خانوادگی : یونس قربانی</Infos>
            <Infos>سن : ۳۰</Infos>
            <Infos>شهر : کلاله</Infos>
            <Infos>Younes.Gh@Chmail.ir : آدرس ایمیل</Infos>
            <Infos>شماره موبایل : ۰۹۳۵۰۰۰۱۱۲۲</Infos>

            
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar size={200} fallback="A.K" avatar={avatar} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
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
