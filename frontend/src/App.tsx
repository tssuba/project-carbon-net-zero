import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import getDesignTokens from './theme';
import { CssBaseline, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/navbar';
import { bgcolor } from '@mui/system';


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const initPalette = getDesignTokens('dark');


const navBarStyle = {
  flexDirection: 'row',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-center',
  alignContent: 'flex-start',
  // bgcolor: 'background.paper',
  borderRadius: 1,
  fontSize: '1rem',
  p: 1.2,
} as const;


function App() {

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

  const navBarColor = (mode === 'light' ? '#fff' : 'rgb(19, 47, 76, 0.60)')


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
          }}
        >
          <Container>
            <Box sx={navBarStyle} maxWidth='lg'>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: '10px',
                  border: 1,
                  borderColor: 'divider'
                }}>
                <IconButton color="primary" size='small'
                  onClick={colorModeSet.toggleColorMode}>
                  {themeSet.palette.mode === 'dark' ?
                    <LightModeOutlinedIcon fontSize='small' /> :
                    <DarkModeOutlinedIcon fontSize='small' />}
                </IconButton>
              </Box>
              <Box>
                <ResponsiveAppBar />
              </Box>
            </Box>
          </Container>
        </AppBar>
        {/* <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'background.paper',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        /> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
