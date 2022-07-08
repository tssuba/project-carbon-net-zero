import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme} from '@mui/material/styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import getDesignTokens from '../../theme';
import { CssBaseline, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import "@fontsource/ibm-plex-sans";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import { TableSortLabel } from '@mui/material';

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


interface NewsArticleType {
  id: number;
  link: string;
  title: string;
  publisher: string;
  published_date: string;
}


function News() {

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
  
  const [newsArticles, setNewsArticles] = useState<Array<NewsArticleType>>([]);

    const getNewsArticles = async () => {
        const { data } = await axiosInstance.get("/news");
        setNewsArticles(data);
    };

    useEffect(() => {
        getNewsArticles();
    }, []);

    const reversedKeys = newsArticles.reverse();

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
                <Box
                  sx={customButtonStyle}>
                  <a href='https://github.com/tssuba/project-carbon-net-zero/' target='_blank' rel='noreferrer'>
                  <IconButton color="primary" size='small'
                    // onClick={() => githubNewTab('https://github.com/tssuba/project-carbon-net-zero/')}
                    >
                      <GitHubIcon />
                  </IconButton>
                  </a>
                </Box>
              </Box>
            </Box>
          </Container>
        </AppBar>
        <Toolbar style={styles.customizeToolbar}/>
        <main>
        <Container maxWidth='lg' sx = {{ pt: 2}}>

          <h1>
            <Stack direction='row'>
            <span>
            <NewspaperRoundedIcon sx = {{
            fontSize: '2rem',
            pt: 1.5
            }}/>
              </span> 
              <span> | News</span>
              {/* <Typography sx = {{mt: 2, ml: 2}}>
                blah blah blah
              </Typography> */}
              </Stack>
          </h1>

        <TableContainer component={Paper} sx = {{
          height: 'calc(100vh - 200px)',
          maxHeight: '1000px'
        }}>
      <Table  stickyHeader 
      sx={{ minWidth: 650, bgcolor:'background.paper',
    border: 1, borderColor: 'divider'
    }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Publisher</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>    
        <TableBody>
          {reversedKeys.map((newsArticle) => (
            <TableRow
              key={newsArticle.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <a href={newsArticle.link} 
              target='_blank' 
              rel='noreferrer'
              style={{ textDecoration: 'none',
              color: 'primary.main' }}
              >
                <Typography fontWeight='600'>
                {newsArticle.title} 
                </Typography>
                </a>
              </TableCell>
              <TableCell align="right">{newsArticle.publisher}</TableCell>
              <TableCell align="right">{newsArticle.published_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default News;