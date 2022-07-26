import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import UserChat  from './UserChat'
import {Search , SearchIconWrapper  ,StyledInputBase} from "./index"
import SearchIcon from "@mui/icons-material/Search";

type Props = {}
  
  
const UserChatList = (props: Props) => {
  return (
    <Container sx={{ pt: 3 , px:{xs:1 , lg:3} }} maxWidth="xs">
    <Box sx={{ mb: 3 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{ pl: 7 }}
        />
      </Search>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h6" fontSize={20}>
        Messages
      </Typography>
      <Typography
        sx={{
          backgroundColor: "#0068B3",
          padding: "8px",
          marginLeft: 1,
          borderRadius: "5px",
          color: "#fff",
        }}
      >
        123
      </Typography>
    </Box>
    <Box >
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
    </Box>
  </Container>
)
}

export default UserChatList

