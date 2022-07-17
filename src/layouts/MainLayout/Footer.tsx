import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import LanguageIcon from "@mui/icons-material/Language";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      sx={{
        marginTop: "auto",
        backgroundColor: "#233044",
        color: "#fff",
      }}
      p={2}
      pb={6}
      pt={6}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Stack justifyContent={"center"}>
              <LanguageIcon
                fontSize="large"
                sx={{ color: "#fff", fontSize: "4.5rem" }}
              />
              <Typography variant="h5" maxWidth={"90%"} mb={3} mt={1}>
                المنصة الموحدة لعملاء مياه الشرب والصرف الصحي
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box mt={1}>
              <Typography variant="h4" fontWeight="bold" mb={1}>
                اشهر الخدمات
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
              >
                الاستعلام عن الفواتير
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
              >
                تسجيل قراءتي
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
              >
                شكوي انقطاع مياه
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box mt={1}>
              <Typography variant="h4" fontWeight="bold" mb={1}>
                الدعم والمساعدة
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
              >
                الشكاوي
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
              >
                الأسئلة الشائعة
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
              >
                المقترحات
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Box pt={{ lg: 9 }}>
              <Typography variant="h4" fontWeight="bold" mb={1}>
                اتصل بنا
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
              >
                كورنيش النيل – محطه مياه روض الفرج الساحل, القاهرة , مصر
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
              >
                02/24583591
              </Typography>
              <Typography
                variant="subtitle1"
                py={0.7}
                className="text-slate-200"
                mb={2}
              >
                hcww@hcww.com.eg
              </Typography>
              <Stack direction="row" spacing={1} width="100%">
                <IconButton aria-label="FacebookIcon" className="bg-slate-50">
                  <FacebookIcon fontSize="small" className="fill-sky-700" />
                </IconButton>
                <IconButton aria-label="TwitterIcon" className="bg-slate-50">
                  <TwitterIcon fontSize="small" className="fill-sky-400" />
                </IconButton>
                <IconButton aria-label="InstagramIcon" className="bg-slate-50">
                  <InstagramIcon fontSize="small" className="fill-red-500" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
