import React from "react";
import {
  Box,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { Container } from "@mui/system";

type Props = {};

const Theme = (props: Props) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            defaultValue="Light Mode"
          >
            <FormControlLabel
              value="Light Mode"
              sx={{ justifyContent: "space-between" }}
              control={<Radio />}
              label="Light Mode"
              labelPlacement="start"
            />
            <Divider sx={{ mt: 2, mb: 2 }} />

            <FormControlLabel
              sx={{ justifyContent: "space-between" }}
              value="Dark Mode"
              control={<Radio />}
              label="Dark Mode"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Theme;
