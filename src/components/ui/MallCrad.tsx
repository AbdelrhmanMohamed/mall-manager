import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";

interface CardProps {
  icon?: React.ReactNode;
  color?: string;
  title: string;
  amount?: string | number;
}

export default function MallCard({ icon, color, title, amount }: CardProps) {
  return (
    <Card sx={CardStyle}>
      <CardContent>
        <Box mb={0.5} display="flex" alignItems={"center"}>
          {icon}
          <Typography mx={1} component={"span"} variant="h6" color={color}>
            {title}
          </Typography>
        </Box>
        <Typography mx={0.5} variant="h3" fontWeight={"bold"}>
          {amount}
        </Typography>
      </CardContent>
    </Card>
  );
}

const CardStyle: SxProps<Theme> = {
  boxShadow: (theme) => theme.shadows[3],
};
