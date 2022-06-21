import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import getDesignTokens from './theme';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


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
          // width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
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
