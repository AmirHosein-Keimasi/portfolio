
import {
   
    Typography,
    Card,
    CardContent,
    Divider,
    Chip,
    Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";

import DevInfo from "./Components/Infoos";
import Skill from "./Components/Skill";
import avatar from "../Assets/logo.jpg";
import { DevSkills } from "../Containers/DevSkills";

const About = () => {
    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
        DevSkills;

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
            }}
        >
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Divider
                            textAlign="right"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "primary.main",
                                },
                            }}
                        >
                            <Chip
                                color="primary"
                                icon={<CodeRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        توسعه دهنده فول استک و مدرس برنامه نویسی
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>

                        <DevInfo>نام و نام خانوادگی : یونس قربانی</DevInfo>
                        <DevInfo>سن : ۳۰</DevInfo>
                        <DevInfo>شهر : کلاله</DevInfo>
                        <DevInfo>Younes.Gh@Chmail.ir : آدرس ایمیل</DevInfo>
                        <DevInfo>شماره موبایل : ۰۹۳۵۰۰۰۱۱۲۲</DevInfo>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <Avatar
                            src={avatar}
                            variant="rounded"
                            sx={{
                                height: 250,
                                width: 250,
                                margin: "0 auto",
                                display: {
                                    xl: "block",
                                    lg: "block",
                                    md: "block",
                                    sm: "none",
                                    xs: "none",
                                },
                            }}
                        >
                            YG
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <Divider
                            textAlign="center"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "secondary.main",
                                },
                            }}
                        >
                            <Chip
                                color="secondary"
                                icon={<SelfImprovementRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        مهارت های من
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>
                        <Skill
                            name={htmlSkill.name}
                            icon={htmlSkill.icon}
                            color={htmlSkill.color}
                            value={95}
                        />
                        <Skill
                            name={cssSkill.name}
                            icon={cssSkill.icon}
                            color={cssSkill.color}
                            value={95}
                        />
                        <Skill
                            name={jsSkill.name}
                            icon={jsSkill.icon}
                            color={jsSkill.color}
                            value={95}
                        />
                        <Skill
                            name={reactSkill.name}
                            icon={reactSkill.icon}
                            color={reactSkill.color}
                            value={95}
                        />
                        <Skill
                            name={nodeSkill.name}
                            icon={nodeSkill.icon}
                            color={nodeSkill.color}
                            value={95}
                        />
                        <Skill
                            name={gitSkill.name}
                            icon={gitSkill.icon}
                            color={gitSkill.color}
                            value={95}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default About;
