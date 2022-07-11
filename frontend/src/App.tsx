import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import getDesignTokens from './theme';
import { CssBaseline, Grid, Paper, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import "@fontsource/ibm-plex-sans";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import twitterImg from './twitter.png';
import researchImg from './Research.png';
import newsImg from './news.png';

import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

import StickyFooter from './components/footer';


import Carousel from 'nuka-carousel';

import { useNavigate } from 'react-router-dom'

import IntroBody from './components/intro';
import IntroFeatures from './components/introFeatures';




const ColorModeContext = React.createContext({ toggleColorMode: () => { } });



const navBarStyle = {
  // justifySelf: 'center',
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


function App() {

  let navigate = useNavigate();

  const handleCloseNavMenuN = () => {
    navigate("/news");
  };
  const handleCloseNavMenuR = () => {
    navigate("/research");
  };
  const handleCloseNavMenuP = () => {
    navigate("/people");
  };

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
            // backgroundColor: '#fff000'
          }} sx={{
            boxShadow: 'none',
            borderBottom: 1,
            borderColor: 'divider',
            backgroundImage: 'none',
          }}
        >
          {/* <Container sx={{ 
            bgcolor: '#f0f0f0',
            width: '100%',
          }}> */}
            <Box sx={navBarStyle} maxWidth='100%' 
            // bgcolor='#000'
            >
              <ResponsiveAppBar />
              <Box sx = {{
                display: 'inline-flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row-reverse',
                pr: 4,
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
          {/* </Container> */}
        </AppBar>
        <Toolbar style={styles.customizeToolbar}/>
        <main>
          <Box>
            {/* <Container maxWidth='lg'> */}
              {/* <Paper> */}
              {/* <Grid container columns={{ xs: 4, sm: 4, md: 12 }} spacing={10}>
                <Grid item xs={4} sm={4} md={6}> */}
                  <Box 
                  style={{transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp, 
                    duration: theme.transitions.duration.leavingScreen
                  }), 
                  // minHeight: '-webkit-calc(100vh-120px)'
                }}
                  alignItems='center'
                  justifyItems = 'center'
                  sx = {{
                    display: 'flex',
                    height: 'calc(100vh - 120px)',
                    maxHeight: '1000px',
                  // bgcolor: '#f0f0f0',
                  // mx: 'auto',
                  }}
                  >
                    {/* <Stack> */}

                      <IntroBody/>

                      
            {/* <Stack direction='row'> */}
            
                  {/* <NewspaperOutlinedIcon sx = {{
                      fontSize: '9rem',
                  }} />
                  <LibraryBooksOutlinedIcon sx = {{
                      fontSize: '9rem',
                      ml: 20,
                      mr: 20,
                  }}/>
                  <TwitterIcon sx = {{
                      fontSize: '9rem'
                  }}/> */}

            {/* </Stack> */}
                    {/* </Stack> */}
                  </Box>
                {/* </Grid>
                <Grid item xs={4} sm={4} md={6} >
                <Box 
                  style={{transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp, 
                    duration: theme.transitions.duration.leavingScreen
                  })}}
                  alignItems='flex-start'
                  // justifyItems='left'
                  // overflow='scroll'
                  sx = {{
                    display: 'flex',
                    height: 'calc(100vh - 120px)',
                    maxHeight: '1000px',
                    // width: '2000px',
                    bgcolor: 'secondary.light',
                    [theme.breakpoints.up('md')]: {width: '1000px',},
                    overflowY: 'scroll',
                    // overflowX: 'initial'  
                    // minHeight: '600px'
                  }}>
                      <IntroFeatures />
                      
                    </Box>
                </Grid>
              </Grid> */}
              {/* </Paper> */}
            
                    {/* </Box> */}
            {/* </Container> */}


          </Box>
        </main>
        <StickyFooter />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// Bottom Carousel

/*  <Box sx = {{ padding: '50px'}} />
              <Box sx = {{
              pt : '5',
              minWidth: '100px',
              minHeight: '100px',
              // bgcolor: '#000'
            }}></Box>
            <Box>
            <Carousel 
                    autoplay = {true}
                    autoplayInterval = {6000}
                    pauseOnHover = {true}
                    wrapAround = {true}
                    speed = {1000}
            renderCenterLeftControls={({ previousSlide }) => (
    null
    )}
    renderCenterRightControls={({ nextSlide }) => (
      null
    )}
    // renderBottomCenterControls={() => (
    //   null
    // )}

  >
              <Box sx = {{ mx: 'auto', width: '850px'}}>
                <Box width= '100%' 
                // bgcolor= '#f0f0f0' 
                justifyContent = 'center'
                display='flex'
                >
                <Typography sx = {{
                  mx: 'auto', 
                  justifySelf: 'center',
                  fontSize: 'large',
                  fontWeight: '600'
                  }}> News </Typography>
                </Box>
                <img src={newsImg} style={{cursor:'pointer'}} onClick = {handleCloseNavMenuN}/>
                </Box>
              <Box sx = {{ mx: 'auto', width: '800px'}}>
              <Box width= '100%' 
                justifyContent = 'center'
                display='flex'
                >
                <Typography sx = {{
                  mx: 'auto', 
                  justifySelf: 'center',
                  fontSize: 'large',
                  fontWeight: '600'
                  }}> Research </Typography>
                </Box>
                <img src={researchImg} style={{cursor:'pointer'}} onClick = {handleCloseNavMenuR}/>
                </Box>
              <Box sx = {{ mx: 'auto', width: '500px'}}>
              <Box width= '100%'  
                justifyContent = 'center'
                display='flex'
                >
                <Typography sx = {{
                  mx: 'auto', 
                  justifySelf: 'center',
                  fontSize: 'large',
                  fontWeight: '600',
                  pb: 4,
                  }}> Social Networking </Typography>
                </Box>
                <img src={twitterImg} style={{cursor:'pointer'}} onClick = {handleCloseNavMenuP} /></Box>
                    </Carousel>
            </Box> */