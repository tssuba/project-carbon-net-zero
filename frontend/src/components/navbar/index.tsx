import * as React from 'react';
import { Link , Navigate, useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/plus-jakarta-sans/700.css";

import { styled } from '@mui/material/styles';
import { ClassNames } from '@emotion/react';
import { fontWeight } from '@mui/system';

const pages = ['News', 'Research', 'People'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const styles = {
  customizeToolbar: {
    minHeight: '36px',
    display: 'inline-flex'
  }
};

const ResponsiveAppBar = () => {

  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate("/news");
  };
  const handleCloseNavMenuB = () => {
    setAnchorElNav(null);
    navigate("/briefing");
  };
  const handleCloseNavMenuN = () => {
    setAnchorElNav(null);
    navigate("/news");
  };
  const handleCloseNavMenuR = () => {
    setAnchorElNav(null);
    navigate("/research");
  };
  const handleCloseNavMenuP = () => {
    setAnchorElNav(null);
    navigate("/people");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // <AppBar position="static" color='transparent'>
    //   <Container maxWidth="lg">
        <Toolbar 
          // variant = 'dense'
          style={styles.customizeToolbar}
          disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,
          color: 'primary.main'
          }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'IBM Plex Sans',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: 'medium',
              pl: 4,
            }}
          >
            IITM | Carbon Net Zero
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color= 'primary'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

                <MenuItem onClick={handleCloseNavMenuN}>
                  <Typography textAlign="center" color='primary'>News</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenuR}>
                  <Typography textAlign="center" color='primary'>Research</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenuP}>
                  <Typography textAlign="center" color='primary'>People</Typography>
                </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon color= 'primary'
          sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'IBM Plex Sans',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            IITM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenuB}
                // size='small'
                sx={{ 
                  // my: 2, 
                  color: 'text.primary', 
                  display: 'block' ,
                  fontWeight: '600',
                  // fontFamily: 'Plus Jakarta Sans',
                  // fontSize: 'small',
                  textTransform: 'none',
                  // typography: 'body3'
                }}>
                About Us
              </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenuN}
                // size='small'
                sx={{ 
                  // my: 2, 
                  color: 'text.primary', 
                  display: 'block' ,
                  fontWeight: '600',
                  // fontFamily: 'Plus Jakarta Sans',
                  // fontSize: 'small',
                  textTransform: 'none',
                  // typography: 'body3'
                }}>
                News
              </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenuR}
                // size='small'
                sx={{ 
                  // my: 2, 
                  color: 'text.primary', 
                  display: 'block' ,
                  fontWeight: '600',
                  // fontFamily: 'Plus Jakarta Sans',
                  // fontSize: 'small',
                  textTransform: 'none',
                  // typography: 'body3'
                }}>
                Research
              </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => ( */}
              <Button
                // key={page}
                onClick={handleCloseNavMenuP}
                // size='small'
                sx={{ 
                  // my: 2, 
                  color: 'text.primary', 
                  display: 'block' ,
                  fontWeight: '600',
                  // fontFamily: 'Plus Jakarta Sans',
                  // fontSize: 'small',
                  textTransform: 'none',
                  // typography: 'body3'
                }}>
                Twitter
              </Button>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
    //   </Container>
    // </AppBar>
  );
};
export default ResponsiveAppBar;