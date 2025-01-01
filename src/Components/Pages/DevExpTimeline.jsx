import { Slide, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { HomeRepairServiceRounded } from "@mui/icons-material";
import { devEx } from "../../constants/DevSkills";

const DevExpTimeline = ({ loading }) => {
  return (
    <Timeline position="alternate" sx={{ direction: "ltr" }}>
      {devEx.map((item, index) => (
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
                <HomeRepairServiceRounded color="warning" />
              </TimelineDot>
              {index !== devEx.length - 1 ? <TimelineConnector /> : null}
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
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevExpTimeline;
