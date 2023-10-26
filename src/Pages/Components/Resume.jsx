import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Slide,
  Grid,
} from "@mui/material";

import { DevEdu } from "../../Containers/DevSkills";

import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

const Resume = ({ helmetTitle }) => {
  const [loding, setloding] = useState(false);

  useEffect(() => {
    setloding(true);
    return () => {
      setloding(false);
    };
  }, []);
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
        <Slide
          direction="down"
          in={loding}
          style={{
            transitionDelay: loding ? "300ms" : "0ms",
          }}
        >
          <Divider
            textAlign="center"
            sx={{
              mt: 2,
              "&::before, &::after": {
                borderColor: "error.main",
              },
            }}
          >
            <Chip
              icon={<SettingsEthernetRounded />}
              color="error"
              label={
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ textAlign: "center" }}
                >
                  رزومه من
                </Typography>
              }
              sx={{ p: 3 }}
            />
          </Divider>
        </Slide>
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
   
            <Divider
              textAlign="center"
              sx={{
                m: 2,
                "&::before, &::after": {
                  borderColor: "warning.main",
                },
              }}
            >
              <Chip
                icon={<HomeRepairServiceRounded />}
                color="warning"
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{ textAlign: "center" }}
                  >
                    تحصیلات
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>

            <Timeline position="alternate" sx={{ direction: "ltr" }}>
              {DevEdu.map((item, index) => (
                <Slide
                  direction="up"
                  in={loding}
                  style={{
                    transitionDelay: loding ? `${index + 3}99ms` : "0ms",
                  }}
                >
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color="warning" variant="outlined">
                        <HomeRepairServiceRounded color="warning" />
                      </TimelineDot>
                      {index != 3 ? <TimelineConnector /> : null}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="caption" color="gray">
                        {item.year}
                      </Typography>
                      <Typography variant="body1" color="black">
                        {item.cert}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {item.major}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {item.place}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Slide>
              ))}
            </Timeline>
          </Grid>
          <Grid xs={6}>
            <Divider
              textAlign="center"
              sx={{
                marginTop: 2,
                "&::before, &::after": {
                  borderColor: "info.main",
                },
              }}
            >
              <Chip
                icon={<SchoolRounded />}
                color="info"
                label={
                  <Typography
                    variant="body1"
                    color="block"
                    sx={{ textAlign: "center" }}
                  >
                    تحصیلات
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>
            {/* <Timeline position="alternate" >
              {DevEdu.map((item, index) => (
                <TimelineItem  key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="info" variant=" ">
                      <SchoolRounded color="info" />
                    </TimelineDot>
                    {index != 3 ? <TimelineConnector /> : null}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="inherit"
                      color="gray"
                      sx={{ textAlign: "center" }}
                    >
                      {item.year}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="black"
                      sx={{ textAlign: "center" }}
                    >
                      {item.cert}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="black"
                      sx={{ textAlign: "center", mt: 1 }}
                    >
                      {item.major}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="black"
                      sx={{ textAlign: "center", mt: 1 }}
                    >
                      {item.place}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline> */}{" "}
            <Timeline position="alternate" sx={{ direction: "ltr" }}>
              {DevEdu.map((item, index) => (
                   <Slide
                   direction="up"
                   in={loding}
                   style={{
                     transitionDelay: loding ? `${index + 3}99ms` : "0ms",
                   }}
                 >
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="info" variant="outlined">
                      <SchoolRounded color="info" />
                    </TimelineDot>
                    {index != 3 ? <TimelineConnector /> : null}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="caption" color="gray">
                      {item.year}
                    </Typography>
                    <Typography variant="body1" color="black">
                      {item.cert}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {item.major}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {item.place}
                    </Typography>
                  </TimelineContent>
                </TimelineItem></Slide>
              ))}
            </Timeline>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
