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
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? "primary.main" : "primary.main",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<ForumRounded />}
          align="center"
          text="نظ‍رات و رضایت کارفرماها"
        />
        <CommentSlider />
      </CardContent>
    </Card>
  );
};

export default Comments;
