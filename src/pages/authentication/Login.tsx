import React from "react";
import { Button, Grid, styled } from "@mui/material";
import { Container } from "@mui/system";

import LoginForm from "../../components/LoginForm";
import Carousel from "../../components/Carousel";

const LanguageButton = styled(Button)({
  borderColor: "#0068B3",
  color: "#0068B3",
});
function Logi() {
  return (
    <Grid container flexWrap={"wrap"}>
      <Grid item xs={12} sm={6}>
        <Carousel />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Container maxWidth="sm">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            marginBottom={10}
            marginTop={1}
          >
            <Grid item xs={6}>
              <img src="/images/logo.png" alt="logo" />
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

export default Logi;
