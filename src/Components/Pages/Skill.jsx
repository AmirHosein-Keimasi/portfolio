import {
  LinearProgress,
  Typography,
  Box,
  Divider,
  Chip,
  Badge,
} from "@mui/material";
import React from "react";

const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Divider
        textAlign="right"
        variant="fullWidth"
        sx={{
          "&::before , &::after": {
            borderColor: "primari.main",
          },
          mt: 1,
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 25 }} />}
          color={color}
          label={name}
          sx={{ color: "#000", p: 2 }}
        ></Chip>
      </Divider>

      <Box sx={{ display: "flex", alignItems: "center", m: 2 }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="black">
            <Badge
              variant="standard"
              badgeContent={`${Math.round(value)}%`}
              color={color}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 3 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ borderRadius: 2, height: 7 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
