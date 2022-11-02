import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { Divider } from '@mui/material';

export default function ListApp({data}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
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
      sx={{px: 5,}}
      >
        <ListItemText primary={data.question} />
        {open ? <CancelPresentationOutlinedIcon /> : <AddBoxOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* <ListItemButton> */}
          <Divider />
            <ListItemText sx={{ pl: 4,
            textAlign: "left"
            }} primary={data.answer} />
          {/* </ListItemButton> */}
        </List>
      </Collapse>
    </List>
  );
}
