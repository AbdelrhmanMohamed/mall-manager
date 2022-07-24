import { Box ,Typography} from "@mui/material";
import React from "react";

type Props = {
  sender: boolean;
  text: string;
  time?:boolean
};

const ChatMessages = ({ sender, text , time }: Props) => {
  return (
    <Box sx={{mt:2}}>
    <Box
      sx={{
        p: 2,
        maxWidth: "250px",
        width: "fit-content",
        borderRadius: "5px",
        backgroundColor: sender ? "#0068B3" : "#DFDFDF",
        color: sender ? "#fff" : "#333",
        ml:sender ? "unset" : "auto",
      }}
    >
      {text}
    </Box>
    {time ? <Typography variant="body1"  sx={{fontSize:"14px" , color:"#A9A9A9"}}>4 minutes ago</Typography> : ''}
        </Box>
  );
};

export default ChatMessages;
