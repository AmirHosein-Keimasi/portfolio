import { Box, IconButton } from "@mui/material";
import { GitHub, Telegram, Instagram, WhatsApp, LinkedIn } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <Box
      component="div"
      sx={{
        m: "0 auto",
        textAlign: "center",
      }}
    >
      <IconButton aria-label="Github">
        <a
          href="https://github.com/amirhosein-keimasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub
            sx={{
              color: "gray",
              "&:hover": {
                color: "text.main",
                opacity: 3,
              },
              "&.Mui-selected": {
                color: "text.main",
              },
            }}
          />
        </a>
      </IconButton>
      <IconButton aria-label="Instagram">
        <a
          href="https://www.instagram.com/amir_v13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            sx={{
              color: "gray",
              "&:hover": {
                color: "text.main",
                opacity: 3,
              },
              "&.Mui-selected": {
                color: "text.main",
              },
            }}
          />
        </a>
      </IconButton>
      <IconButton aria-label="Telegram">
        <a href="https://telegram.im/@amir1_1" target="_blank" rel="noopener noreferrer">
          <Telegram
            sx={{
              color: "gray",
              "&:hover": {
                color: "text.main",
                opacity: 3,
              },
              "&.Mui-selected": {
                color: "text.main",
              },
            }}
          />
        </a>
      </IconButton>
      <IconButton aria-label="WhatsApp">
        <a href="https://telegram.im/@amir1_1" target="_blank" rel="noopener noreferrer">
          <WhatsApp
            sx={{
              color: "gray",
              "&:hover": {
                color: "text.main",
                opacity: 3,
              },
              "&.Mui-selected": {
                color: "text.main",
              },
            }}
          />
        </a>
      </IconButton>
      <IconButton aria-label="Linkdin">
        <a href="https://www.linkedin.com/in/amir-hosein-keimasi-1b6849212/" target="_blank" rel="noopener noreferrer">
          <LinkedIn
            sx={{
              color: "gray",
              "&:hover": {
                color: "text.main",
                opacity: 3,
              },
              "&.Mui-selected": {
                color: "text.main",
              },
            }}
          />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
