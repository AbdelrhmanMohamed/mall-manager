import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {Drawer ,Box ,CssBaseline ,IconButton , Container ,Avatar , Typography}  from "@mui/material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Clear, Download } from "@mui/icons-material";

const drawerWidth = "30%";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type Props = {
  open: boolean;
  setOpen: Function;
};
export default function PersistentDrawerRight(props: Props) {
  const { open, setOpen } = props;
  const theme = useTheme();


  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex"  }}>
      <CssBaseline />
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: {xs:"100%" , lg:"30%"},
            marginTop: "74px",
            backgroundColor:"#E9F4FC"
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
          <Container>
        <Box sx={{pt:3}}>
          <Box sx={{ width:"100%"}}>
            <IconButton onClick={handleDrawerClose} sx={{display:"flex", ml:"auto"}} size="large">
              <Clear sx={{ color: "#333" }} />
            </IconButton>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column" , justifyContent:"center" , alignItems:"center" }}>
            <Avatar sx={{width:"90px" , height:"90px"}} />
            <Typography variant="h5" sx={{color:"#333", mt:2}}>Murad Adel Zaki</Typography>
            <Typography variant="body1" sx={{fontSize:"14px" , color:"#333"}}>Co-Founder @ Madenaty Mall</Typography>
            <Typography variant="body1" sx={{fontSize:"14px" , color:"#333"}}>+20113572563</Typography>
          </Box>
          <Box sx={{mt:3}}>
          <Typography variant="h5">Shared File</Typography>
          <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" ,mt:2}}>
            <Box sx={{display:"flex" , alignItems:"center"}}>
            <img src="/images/M3.svg" />
            <Box sx={{ml:2}}>
            <Typography sx={{fontSize:"14px" , color:"#333"}}>Conract.pdf</Typography>
            <Typography sx={{fontSize:"10px" , color:"#A9A9A9"}}>12 march 22 . 342 kb</Typography>
            </Box>

            </Box>
            <IconButton>
              <Download  sx={{color:"#0068B3"}}/>
            </IconButton>
          </Box>
          <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" ,mt:2}}>
            <Box sx={{display:"flex" , alignItems:"center"}}>
            <img src="/images/M2.svg" />
            <Box sx={{ml:2}}>
            <Typography sx={{fontSize:"14px" , color:"#333"}}>Conract.xcv</Typography>
            <Typography sx={{fontSize:"10px" , color:"#A9A9A9"}}>12 march 22 . 342 kb</Typography>
            </Box>

            </Box>
            <IconButton>
              <Download  sx={{color:"#0068B3"}}/>
            </IconButton>
          </Box>
          <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" ,mt:2}}>
            <Box sx={{display:"flex" , alignItems:"center"}}>
            <img src="/images/M1.svg" />
            <Box sx={{ml:2}}>
            <Typography sx={{fontSize:"14px" , color:"#333"}}>Conract.doc</Typography>
            <Typography sx={{fontSize:"10px" , color:"#A9A9A9"}}>12 march 22 . 342 kb</Typography>
            </Box>

            </Box>
            <IconButton>
              <Download  sx={{color:"#0068B3"}}/>
            </IconButton>
          </Box>
          </Box>
        </Box>
          </Container>
      </Drawer>
    </Box>
  );
}
