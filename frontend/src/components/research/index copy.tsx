import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
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
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

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


interface ResearchArticleType {
  id: number;
  // link: string;
  title: string;
  publisher: string;
  published_date: string;
}


function Research() {

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
  
  const [researchArticles, setResearchArticles] = useState<Array<ResearchArticleType>>([]);

    const getResearchArticles = async () => {
        const { data } = await axiosInstance.get("/research");
        setResearchArticles(data);
    };

    useEffect(() => {
        getResearchArticles();
    }, []);


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
        <Container maxWidth='lg' sx = {{ pt: 2}}>

          <h1>
            <Stack direction='row'>
            <span>
            <LibraryBooksIcon sx = {{
            fontSize: '2rem',
            pt: 1.5
            }}/>
              </span> 
              <span> | Research</span>
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
          {researchArticles.map((researchArticle) => (
            <TableRow
              key={researchArticle.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography fontWeight='600'>
                {researchArticle.title}
                </Typography>
                
              </TableCell>
              <TableCell align="right">{researchArticle.publisher}</TableCell>
              <TableCell align="right">{researchArticle.published_date}</TableCell>
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

export default Research;