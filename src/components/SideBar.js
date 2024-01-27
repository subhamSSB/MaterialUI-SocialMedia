import { Home } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import Diversity3SharpIcon from "@mui/icons-material/Diversity3Sharp";
import NightlightSharpIcon from "@mui/icons-material/NightlightSharp";
import React from "react";

const SideBar = ({setMode,mode}) => {
  return (
    <Box
     
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <ArticleSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <GroupSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <StorefrontSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Diversity3SharpIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <NightlightSharpIcon />
            </ListItemIcon>
            <Switch onChange={(e) => setMode(mode === 'light' ? 'dark':'light')}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  );
};

export default SideBar;
