import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (localStorage.getItem("installButtonShown") === "true") {
      setShowInstallButton(false);
    } else {
      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowInstallButton(true);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt,
        );
      };
    }
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((result) => {
        if (result.outcome === "accepted") {
          console.log("User accepted the install prompt");
          localStorage.setItem("installButtonShown", "true");
        } else {
          console.log("User dismissed the install prompt");
          localStorage.setItem("installButtonShown", "true");
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  return (
    <>
      {showInstallButton && (
        <Button
          variant="contained"
          color="success"
          size="medium"
          startIcon={<InstallMobileIcon />}
          sx={{
            borderRadius: "25px",
            fontSize: { xs: "12px", md: "14px" },
            backgroundColor: theme.palette.success.main,
            "&:hover": {
              backgroundColor: theme.palette.success.dark,
            },
          }}
          onClick={handleInstallClick}
        >
          نصب اپلیکیشن
        </Button>
      )}
    </>
  );
};

export default InstallButton;
