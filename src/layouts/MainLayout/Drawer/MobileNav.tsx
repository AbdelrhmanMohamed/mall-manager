import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Navs from "./Navs";

export default function SwipeableTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen( open );
    };


  return (
    <div>
          <Button onClick={toggleDrawer( true)}>open</Button>
          <SwipeableDrawer
            anchor={"left"}
            open={open}
            onClose={toggleDrawer( false)}
            onOpen={toggleDrawer( true)}
          >
            <Navs />
          </SwipeableDrawer>
    </div>
  );
}
