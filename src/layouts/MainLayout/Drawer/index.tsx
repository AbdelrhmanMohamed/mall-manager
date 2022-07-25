import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Navs from "./Navs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

const drawerWidth = 240;

type Props ={
  toggleDrawer:Function,
   open:boolean,
}
export default function ClippedDrawer({open , toggleDrawer }:Props) {
  const theme = useTheme();
  const isMatches_md = useMediaQuery(theme.breakpoints.down("md"));
 

  return (
    <>
      {isMatches_md ? (
        <>
          <SwipeableDrawer
            anchor={"left"}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            sx={{zIndex:10000 ,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
              },
  
            }}
          >
            <Navs />
          </SwipeableDrawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <Navs />
          </Box>
        </Drawer>
      )}
    </>
  );
}
