import React, { useEffect } from "react";
import { Button, Grid, styled } from "@mui/material";
import { Container } from "@mui/system";
import LoginForm from "./LoginForm";
import Carousel from "./Carousel";
// import { POS_API } from "api";

const LanguageButton = styled(Button)({
  borderColor: "#0068B3",
  color: "#0068B3",
});

function Login() {
  // async function getMostFollowedUsers() {
  //   const response = await POS_API.post("/SignIn", {
  //     username: "alir",
  //     email: "string",
  //     password: "P@ssw0rd",
  //   });
  //   console.log(response, "res");
  //   return response.data;
  // }
  useEffect(() => {
    // getMostFollowedUsers();
    fetch("https://frontapi.itdeg.net/api/FrontEnd/SignIn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json charset=UTF-8",
      },
      body: JSON.stringify({
        username: "alir",
        email: "string",
        password: "P@ssw0rd",
      }),
    });
  }, []);
  return (
    <Grid container flexWrap={"wrap"} sx={{ overflowX: "hidden" }}>
      <Grid item xs={12} md={6} sx={{ display: { sm: "block", xs: "none" } }}>
        <Carousel />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ mt: { lg: 0, xs: 3 }, mb: { lg: 0, xs: 3 } }}
      >
        <Container maxWidth="sm">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            marginBottom={10}
            marginTop={1}
          >
            <Grid item xs={6} sm={6}>
              <img src="/images/logo.png" alt="logo" width={"100%"} />
            </Grid>
            <Grid item xs={6} container justifyContent="flex-end">
              <LanguageButton variant="outlined" size="large">
                العربيه
              </LanguageButton>
            </Grid>
          </Grid>
          <LoginForm />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Login;
