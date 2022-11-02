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
import { ExpandLess, ExpandMore, Menu } from '@mui/icons-material';
import { Collapse, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SidebarAppPhone({data}) {
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
    borderRadius: 10,
    }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}
      sx={{px: 5,
        background: "green",
        padding: "5px 20px",
        borderRadius: 4,
        color: "#fff",
        mx: 5,
    ":hover": {
        background: "green",
    }
    }}
      >
        <ListItemText 
        primary={data.categoryName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {data.catalog.map((item, i) => {return (
          <Collapse key={i} in={open} timeout="auto" unmountOnExit>
        <List 
        sx={{mb:5}}
        component="div" disablePadding>
          {/* <ListItemButton> */}
            <ListItemText sx={{ pl: 4,
            textAlign: "left"
        }} primary={item.catalogName} />
        <Divider />
        {item.catalogLink.map((item2, i2 ) =>{return (
            <Link  key={i2} to={item.link}>
            <ListItemText
      onClick={toggleDrawer(anchor, false)}
       sx={{ pl: 4, 
                textAlign: "left"
            }} primary={i2+1+" " + item2.name} />
            </Link>
       ) })}
          {/* </ListItemButton> */}
        </List>
      </Collapse>
          )})}
                  <ListItemText sx={{mx: 5,
                background: "green",
                padding: "5px 20px",
                borderRadius: 4,
                color: "#fff",
                cursor: "pointer"
                }} primary="Контакты" />
                  <ListItemText sx={{mx: 5,
                background: "green",
                padding: "5px 20px",
                borderRadius: 4,
                color: "#fff",
                cursor: "pointer"}} primary="FAQ" />

<Typography
                component="button"
                variant="h6"
                sx={{
                  ml: 1,
                  background: "green",
                  color: "#fff",
                  padding: "5px 30px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  display: {xs: "none", md: "block"}
                }}
              >
                Записаться
              </Typography>
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
