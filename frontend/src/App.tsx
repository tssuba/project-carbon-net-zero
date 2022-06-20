import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});



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
    createTheme(getDesignTokens(mode === 'light' ? 'dark' : 'light')),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorModeSet}>
      <ThemeProvider theme={themeSet}>
        <Box
          sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
          }}
          >
          {themeSet.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorModeSet.toggleColorMode} color="inherit">
            {themeSet.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
