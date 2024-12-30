import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import GroupIcon from "@mui/icons-material/Group";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import HeadsetIcon from "@mui/icons-material/Headset";
import EditIcon from "@mui/icons-material/Edit";
import CustomDivider from "../common/CustomDivider";
import { CodeRounded } from "@mui/icons-material";

const skills = [
  { title: "مسئولیت‌پذیری", icon: <CalendarTodayIcon /> },
  { title: "نظم و وقت‌شناسی", icon: <AccessTimeIcon /> },
  { title: "کار تیمی", icon: <GroupIcon /> },
  { title: "توانایی حل مسئله", icon: <PlaylistAddCheckCircleIcon /> },
  { title: "انتقادپذیر", icon: <ChatBubbleOutlineIcon /> },
  { title: "یادگیری و تدریس", icon: <EditIcon /> },
  { title: "شنونده‌ی خوب", icon: <HeadsetIcon /> },
  { title: "شوخ‌طبعی", icon: <EmojiEmotionsIcon /> },
  { title: "همدلی و همیاری", icon: <FavoriteIcon /> },
];

function SoftSkills() {
  return (
    <Box sx={{ padding: 5,  textAlign: "center" }}>
      <CustomDivider
        bColor="text.main"
        cColor="warning"
        icon={<CodeRounded />}
        align="center"
        text="مهارت های نرم"
      />
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                mt: 2,
                backgroundColor: "success.main",
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 1,
                borderRadius: 2,
                boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {React.cloneElement(skill.icon, { sx: { fontSize: "50px" } })}
              </Box>
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                  }}
                  color="#000000"
                >
                  {skill.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SoftSkills;
