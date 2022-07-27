import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ReactElement } from "react";

interface Props extends DialogProps {
  title?: string;
  subtitle?: ReactElement|string;
}

export default function ConfirmModel(props: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      sx={{
        ".MuiPaper-root": {
          borderRadius: 3,
        },
      }}
      fullScreen={fullScreen}
      aria-labelledby="hcwww-dialog"
      {...props}
    >
      <IconButton
        aria-label="close"
        
        sx={{
          position: "absolute",
          right: 12,
          top: 10,
          color: (theme) => theme.palette.grey[500],
          backgroundColor: (theme) => theme.palette.grey[200],
          "&:hover": {
            backgroundColor: (theme) => theme.palette.grey[300],
          },
        }}
        onClick={(e) => props.onClose(e, "escapeKeyDown")}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onClick={(e) => props.onClose(e, "escapeKeyDown")}
      >
        <CheckCircleIcon
          sx={{
            fontSize: "4rem",
            textAlign: "center",
            color: "success.light",
          }}
        />
        <Typography mt={2} mb={1} textAlign="center" variant="h4">
          {props.title}
        </Typography>
        <Typography
          textAlign="center"
          variant="subtitle1"
          color="textSecondary"
        >
          {props.subtitle}
        </Typography>
        <Button
          sx={{
            marginTop: 3,
            width: "25%",
          }}
          onClick={(e) => props.onClose(e, "escapeKeyDown")}
          variant="outlined"
          autoFocus
        >
          موافق
        </Button>
      </DialogContent>
    </Dialog>
  );
}
