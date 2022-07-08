import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import getDesignTokens from '../../theme';
import { CssBaseline, Grid, Paper, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import "@fontsource/ibm-plex-sans";
import windmills1 from './windmills1.jpg';
import BriefBody from '../briefbody';

import IntroBody from '../intro';
import IntroFeatures from '../introFeatures';


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


const navBarStyle = {
  flexDirection: 'row',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignContent: 'flex-start',
  // bgcolor: 'background.default',
  borderRadius: 1,
  fontSize: '1rem',
  pt: 1.2,
  pb: 1.2
} as const;

const customButtonStyle = {
  display: 'flex',
  flexDirection: 'row',
  borderRadius: '10px',
  border: 1,
  borderColor: 'divider',
  alignItems: 'center',
  ml: 2,
  pl: 0.5,
  pr:0.5
} as const;

const styles = {
  customizeToolbar: {
    minHeight: '50px',
    display: 'inline-flex'
  }
};


function Briefing() {

  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorModeSet = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const themeSet = React.useMemo(
    () =>
      createTheme(getDesignTokens(mode === 'light' ? 'light' : 'dark')),
    [mode],
  );

  const navBarColor = (mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(10, 25, 41, 0.72)');

  // const githubNewTab = (url: string | URL | undefined) => {
  //   window.open(url, '_blank', 'noopener, norefferer');
  // };


  {/* {themeSet.palette.mode} mode */ }
  return (
    <ColorModeContext.Provider value={colorModeSet}>
      <ThemeProvider theme={themeSet}>
        <CssBaseline />
        <AppBar
          enableColorOnDark
          style={{ 
            backgroundColor: navBarColor, 
          }} sx={{
            boxShadow: 'none',
            borderBottom: 1,
            borderColor: 'divider',
            backgroundImage: 'none',
          }}
        >
          <Container sx={{
          }}>
            <Box sx={navBarStyle} maxWidth='lg'
            >
              <ResponsiveAppBar />
              <Box sx = {{
                display: 'inline-flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row-reverse'
              }}>
                <Box
                  sx={customButtonStyle}>
                  <IconButton color="primary" size='small'
                    onClick={colorModeSet.toggleColorMode}>
                    {themeSet.palette.mode === 'dark' ?
                      <DarkModeOutlinedIcon fontSize='small' /> :
                      <LightModeOutlinedIcon fontSize='small' />}
                  </IconButton>
                </Box>
                {/* <Box
                  sx={customButtonStyle}>
                  <a href='https://github.com/tssuba/project-carbon-net-zero/' target='_blank' rel='noreferrer'>
                  <IconButton color="primary" size='small'
                    // onClick={() => githubNewTab('https://github.com/tssuba/project-carbon-net-zero/')}
                    >
                      <GitHubIcon />
                  </IconButton>
                  </a>
                </Box> */}
              </Box>
            </Box>
          </Container>
        </AppBar>
        <Toolbar style={styles.customizeToolbar}/>
        <main>
          <Box>
            <Container maxWidth='lg'>
              {/* <Paper> */}
              <Grid container columns={{ xs: 4, sm: 4, md: 12 }} spacing={10}>
                <Grid item xs={4} sm={4} md={6}>
                  <Box 
                  style={{transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp, 
                    duration: theme.transitions.duration.leavingScreen
                  }), 
                  // minHeight: '-webkit-calc(100vh-120px)'
                }}
                  alignItems='center'
                  sx = {{
                    display: 'flex',
                    height: 'calc(100vh - 120px)',
                    maxHeight: '1000px',
                    overflow: 'hidden'
                    // minHeight: 'calc(100vh - 120px)',
                    // maxHeight: 'calc(100vh - 120px)',
                    // maxHeight: '1000px'
                    // bgcolor: 'secondary.light'
                  }}
                  >
                    {/* <Stack> */}
                      <img src={windmills1} height='100%' />
                    {/* </Stack> */}
                  </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={6} >
                <Box 
                  style={{transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp, 
                    duration: theme.transitions.duration.leavingScreen
                  }), 
                  // minHeight: '-webkit-calc(100vh-120px)'
                }}
                  alignItems='center'
                  sx = {{
                    display: 'flex',
                    height: 'calc(100vh - 120px)',
                    maxHeight: '1000px'
                    // minHeight: 'calc(100vh - 120px)',
                    // maxHeight: 'calc(100vh - 120px)',
                    // maxHeight: '1000px'
                    // bgcolor: 'secondary.light'
                  }}
                  >
                    {/* <Stack> */}
                      <BriefBody/>
                    {/* </Stack> */}
                  </Box>
                </Grid>
              </Grid>
              {/* </Paper> */}
            </Container>
          </Box>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Briefing;