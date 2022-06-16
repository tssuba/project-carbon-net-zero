import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { maxWidth, spacing } from '@mui/system';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    // alignItems: 'flex-center',
    justifyContent: 'space-between',
    // justifyItems: 'right' ,
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 90,
      maxWidth: 1200,
    },
  }))
  ;
  

const Navbar
 = () => {
  return (
    <>
    
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: "#2563eb"}}>
                <StyledToolbar sx = {{
                  width: "100%",
                  mx: "auto"
                }}>
                    {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    > 
                    <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div">
                    IITM | Carbon Net Zero
                    </Typography>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                    </Typography> */}
                    <Button color="inherit">Login</Button>
                </StyledToolbar>
              </AppBar>
        </Box>
    </>
  )
}

export default Navbar
