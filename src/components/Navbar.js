import { Notifications, Pets } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
// import Dropdown from '@mui/joy/Dropdown';
// import Menu from '@mui/joy/Menu';
// import MenuButton from '@mui/joy/MenuButton';
// import MenuItem from '@mui/joy/MenuItem';

import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Subham Gope
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search.." />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
            onClick={(e) => {
              setOpen(true);
            }}
          />
        </Icons>
        <UserBox
          onClick={(e) => {
            setOpen(true);
          }}
        >
          {" "}
          <Avatar sx={{ width: 30, height: 30 }} src="" />
        </UserBox>
      </StyledToolbar>

      <Menu
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={(e) => {
          setOpen(false);
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
