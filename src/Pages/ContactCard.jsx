import React from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import {
  Email as EmailIcon,
  Telegram as TelegramIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  ContentCopy as CopyIcon,
  AccountCircle,
} from "@mui/icons-material";
import CustomDivider from "../Components/common/CustomDivider";

const contactData = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "amirhosein.kiemasi@gmail.com",
  },
  { icon: <TelegramIcon />, label: "Telegram", value: "@amir1_1" },
  { icon: <LinkedInIcon />, label: "LinkedIn", value: "amirhossein-keimasi" },
  { icon: <PhoneIcon />, label: "Phone", value: "+98 933 378 84 21" },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    value: "amirhosein-keimasi",
  },
  { icon: <LanguageIcon />, label: "Website", value: "BijanProgrammer.com" },
];

const ContactCard = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <CustomDivider
        bColor="text.main"
        cColor="warning"
        icon={<AccountCircle />}
        align="center"
        text="تماس با من "
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          mt: 5,
        }}
      >
        <Box
          sx={{
            padding: "10",
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            width: "80%",
          }}
        >
          {contactData.map((item, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 5,
                boxShadow: 1,
                borderRadius: 2,
                backgroundColor: "warning.main",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {item.icon}
                <Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontSize: "0.85rem" }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {item.value}
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={() => handleCopy(item.value)}>
                <CopyIcon fontSize="small" />
              </IconButton>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ContactCard;
