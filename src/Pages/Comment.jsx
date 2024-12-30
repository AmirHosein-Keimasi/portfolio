import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import CustomDivider from "../Components/common/CustomDivider";
import CommentSlider from "../Components/Pages/CommentSlider";

const Comments = ({ helmetTitle }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
        display: "flex",
        flexDirection: "column",
        minHeight: "60vh", // حداقل ارتفاع کارت برای اطمینان از فضای مناسب
        marginBottom: { xs: "16px", sm: "32px", md: "40px" }, // فاصله پایین برای صفحات کوچک‌تر
        paddingBottom: "16px", // فاصله داخلی پایین برای کارت
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="text.main"
          cColor="warning"
          icon={<ForumRounded />}
          align="center"
          text="پروژه ها"
        />
        <CommentSlider />
      </CardContent>
    </Card>
  );
};

export default Comments;
