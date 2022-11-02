import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Clear, ExpandLess, ExpandMore, Menu } from '@mui/icons-material';
import { Collapse, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SidebarFoundation({data}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List
      sx={{ width: '100%', 
      maxWidth: 760, 
      bgcolor: 'background.paper',
    my: 1,
    position: "relative",
    pt: 3
}}
      component="nav"
    >
        <IconButton
        sx={{color: "red",
        position: "absolute",
        top: 0,
        right: 0
        }}
        onClick={toggleDrawer(anchor, false)}
        >
            <Clear />
        </IconButton>
        
        {data.map((item, i) => {return(
        <ListItemButton
        key={i}
        sx={{px: 5,
            background: "green",
            padding: "5px 20px",
            borderRadius: 4,
            color: "#fff",
            mx: 5,
            my: 2,
            ":hover": {
                background: "green",
            }
        }}
        
      onClick={toggleDrawer(anchor, false)}
        >
        <ListItemText 
        primary={item} />
        </ListItemButton>
        )})}
    </List>
    </Box>
  );

  return (
        <React.Fragment>
<Menu sx={{display: {xs: "block", md: "none"}, ml: 2}} onClick={toggleDrawer("right", true)}/>
          <SwipeableDrawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
  );
}
