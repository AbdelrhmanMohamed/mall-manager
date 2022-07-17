import React from "react";
import Routes from "./routes";
import { SnackbarProvider } from "notistack";
import Slide, { SlideProps } from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import { closeSnackbar } from "redux/snackbarSlice";
import { useAppDispatch } from "app/hooks";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}
function App() {
  const notistackRef = React.useRef(null);
  const dispatch = useAppDispatch();

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <>
      <SnackbarProvider
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={5000}
        maxSnack={5}
        preventDuplicate
        dense
        TransitionComponent={SlideTransition}
        onClose={() => dispatch(closeSnackbar())}
        ref={notistackRef}
        action={(key) => (
          <IconButton
            style={{
              color: "#fff",
              opacity: "0.7",
              fontSize: "16px",
              padding: "10px",
            }}
            onClick={onClickDismiss(key)}
          >
            {/* <CloseIcon /> */}
          </IconButton>
        )}
      >
        <Routes />
      </SnackbarProvider>
    </>
  );
}

export default App;
