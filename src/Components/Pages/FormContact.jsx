import React from "react";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../Validation/contactValidation";
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  EmailRounded,
  Face6Rounded,
  SubjectRounded,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const FormContact = () => {
  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
    validationSchema: contactValidationSchema,
  });
  const theme = useTheme();

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "primary.main" : "primary.main",
          boxShadow: "none",
        }}
      >
        <Grid container>
          <Grid xs={12} sx={{ direction: "ltr", p: 4 }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <TextField
                  sx={{ p: 0.5 }}
                  fullWidth
                  size="small"
                  color="warning"
                  label="نام و نام خانوادگی"
                  name="fullname"
                  variant="outlined"
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname,
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment postion="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  sx={{ p: 0.5 }}
                  fullWidth
                  size="small"
                  color="warning"
                  label="آدرس ایمیل"
                  name="email"
                  variant="outlined"
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment postion="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  sx={{ p: 0.5 }}
                  fullWidth
                  size="small"
                  color="warning"
                  label="عنوان"
                  name="subject"
                  variant="outlined"
                  helperText={
                    formik.touched.subject ? formik.errors.subject : null
                  }
                  error={Boolean(
                    formik.touched.subject && formik.errors.subject,
                  )}
                  value={formik.values?.subjectj}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment postion="end">
                        <SubjectRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  sx={{ p: 0.5 }}
                  fullWidth
                  multiline
                  rows={6}
                  size="small"
                  color="warning"
                  label="متن پیام"
                  name="message"
                  variant="outlined"
                  helperText={
                    formik.touched.message ? formik.errors.message : null
                  }
                  error={Boolean(
                    formik.touched.message && formik.errors.message,
                  )}
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          alignItems: "end",
          flexDirection: "column",
          backgroundColor:
            theme.palette.mode === "dark" ? "primary.main" : "primary.main",
        }}
      >
        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
        >
          ارسال کن
        </Button>
      </CardActions>
    </form>
  );
};

export default FormContact;
