import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SelfImprovementRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../Components/common/CustomDivider";
import Skills from "../Components/Pages/Skills";
import { useTheme } from "@mui/material/styles";
import SuftSkills from "../Components/Pages/SuftSkills";

const About = ({ helmetTitle }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          {/* md={8} lg={8} xl={8} */}
          <Grid xs={12} sm={12}></Grid>
          <Grid xs={12} sm={12}></Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1, minWidth: 50 }}>
            <CustomDivider
              bColor="text.main"
              cColor="warning"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهات های من"
            />
            <Skills />
            <SuftSkills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
