import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import CustomDivider from "../Components/common/CustomDivider";
import DevEduTimeline from "../Components/Pages/DevEduTimeline";
import DevExpTimeline from "../Components/Pages/DevExpTimeline";
import { useTheme } from "@mui/material/styles";
const Resume = ({ helmetTitle, singleView = false }) => {
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
        minHeight: singleView ? "auto" : "100vh",
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
        height: singleView ? "100vh" : "auto",
        overflowY: singleView ? "auto" : "unset",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="رزومه من"
        />
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات"
            />

            <DevExpTimeline loading={loading} />
          </Grid>

          <Grid xs={6}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات"
            />

            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
