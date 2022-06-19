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
import Stack from '@mui/material/Stack';
import iitmlogo from "./iitmlogo.svg"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HelpIcon from '@mui/icons-material/Help';

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

const themebutton = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fdfdfd',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#fdfdfd',
      main: '#fdfdfd',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#8D9797',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
  

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
                    <Stack direction="row" spacing={2}>
                      {/* <iitmLogo /> */}
                      <img src={iitmlogo} width={60}/>
                      <Typography variant="h6" component="div" sx = {{
                        pt: 2
                      }}>
                      IITM | Carbon Net Zero
                      </Typography>
                    </Stack>
                    {/* <Typography variant="h6" component="div">
                    IITM | Carbon Net Zero
                    </Typography> */}
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                    </Typography> */}
                    <ThemeProvider theme={themebutton}>
                    <Button variant = "contained" color = "primary" startIcon={<HelpIcon />}>Help </Button>
                    </ThemeProvider>
                </StyledToolbar>
              </AppBar>
        </Box>
    </>
  )
}

export default Navbar
