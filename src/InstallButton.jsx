import React, { useState, useEffect } from "react";
import { Snackbar, Button, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    // چک می‌کنیم که آیا پنل قبلاً نشان داده شده یا نه
    if (localStorage.getItem("installButtonShown") === "true") {
      setShowInstallButton(false); // اگر قبلاً نشان داده شده باشد، دکمه را نمایش نمی‌دهیم
    } else {
      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowInstallButton(true);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      };
    }
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((result) => {
        if (result.outcome === "accepted") {
          console.log("User accepted the install prompt");
          // ذخیره وضعیت نصب موفق در localStorage
          localStorage.setItem("installButtonShown", "true");
        } else {
          console.log("User dismissed the install prompt");
          // ذخیره وضعیت رد نصب در localStorage
          localStorage.setItem("installButtonShown", "true");
        }

        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  if (!showInstallButton) {
    return null;
  }

  return (
    <Snackbar
      open={showInstallButton}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={60000000} // نمایش پنل برای مدت طولانی (محدودیت دلخواه)
      sx={{
        position: "fixed", // پنل در موقعیت ثابت قرار می‌گیرد
        top: 0, // در بالای صفحه قرار می‌گیرد
        left: "50%", // برای وسط صفحه قرار گرفتن
        transform: "translateX(-50%)", // جابجایی برای دقیقاً وسط بودن
        zIndex: 9999, // اطمینان از اینکه پنل روی همه چیز قرار بگیرد
      }}
      message={
        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleInstallClick}
        >
          نصب اپلیکیشن
        </Button>
      }
    />
  );
};

export default InstallButton;
