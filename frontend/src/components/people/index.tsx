import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import getDesignTokens from '../../theme';
import { CssBaseline, Grid, Paper, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../../components/navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import "@fontsource/ibm-plex-sans";
import Stack from '@mui/material/Stack';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import axiosInstance from '../../utils/AxiosAPI';
import {useState, useEffect} from "react";


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

// const greyButtonDark = {
//   fontFamily: 'IBM Plex Sans',
//   fontWeight: '600',
//   fontSize: 'small',
//   bordercolor: 'rgb(51, 153, 255)',
//   color: 'grey.500',
//   bgcolor: 'rgb(23, 58, 94)',
//   textTransform:'none'
// }

interface TweetIdType {
  id: number;
  tweetId: string;
};

function People() {

  const theme = useTheme();

  const curTheme = useTheme();

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

  const [tweetIds, setTweetIds] = useState<Array<TweetIdType>>([]);

  const getTweetIds = async () => {
      const { data } = await axiosInstance.get("/tweets");
      setTweetIds(data);
  };

  useEffect(() => {
      getTweetIds();
  }, []);


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
          <Container maxWidth = 'lg'>
            <Box 
            // bgcolor='rgba(0,0,0,0.5)' 
            // display= 'flex'
            width='550px'
            sx = {{
            [curTheme.breakpoints.down('sm')]: {
              width: '300px',
              mx: 'auto'
            },
             mx:'auto'
            }}
            >
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8 }}>
              {tweetIds.map((tweetId) => (
                <Grid item xs={4} sm={4} md={4}>
                              <div style={{
              // width:'100%', 
              justifyContent:'center'}}
              key={tweetId.id}>
                <TwitterTweetEmbed tweetId={tweetId.tweetId} />
            </div>
                  </Grid>
          ))}
              </Grid>
            </Box>
          </Container>
           
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default People;