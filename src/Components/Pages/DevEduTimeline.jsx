import { Slide, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import { devEdu } from "../../constants/DevSkills";

const DevEduTimeline = ({ loading }) => {
  return (
    <Timeline position="alternate" sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          }}
        >
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined">
                <SchoolRounded color="warning" />
              </TimelineDot>
              {index !== 3 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="gray">
                {item.year}
              </Typography>
              <Typography variant="body1" color="text.main">
                {item.cert}
              </Typography>
              <Typography variant="body2" color="text.main">
                {item.major}
              </Typography>
              <Typography variant="body2" color="text.main">
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevEduTimeline;
