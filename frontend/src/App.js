import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Navbar from './components/navbar';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

// export default function DisabledTabs() {
//   const [value, setValue] = React.useState(2);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
// }


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F5F5F5',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme();

function App() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Box
        sx={{
          bgcolor: '#F5F5F5',
          pt: 2,
          pb: 6
        }}
        >
          <Container>
            <ButtonGroup variant="contained">
              <Button size = "large" startIcon={<HomeIcon />} style = {{
                minHeight : 42
              }}></Button>
              <Button>This Search</Button>
            </ButtonGroup>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Typography
                component="h1"
                variant="h4"
                align="left"
                color="black"
                gutterBottom
                sx = {{
                  pt: 3
                }}
                style = {{
                  fontWeight: 600
                }}
              >
                Carbon Net-Zero Primer
              </Typography>
              <Typography variant="subtitle2" align="left" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
              </Typography>
              </Grid>
              <Grid item xs={3}>
              <Typography variant="subtitle2" align="right" color="text.secondary" paragraph
              sx = {{ pt: 6}}>
                IIT Madras
              </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <Item variant="outlined" elevation={0}>Elsevier</Item>
              </Grid>
              <Grid item xs={1}>
                <Item variant="outlined" elevation={0}>Springer</Item>

              </Grid>
            </Grid>
            <Tabs 
            aria-label="navigation tabs"
            value={value}
            onChange={handleChange}
            sx = {{pt: 2, pl: 0}}>
              <Tab label="Overview" />
              <Tab label="Briefing"/>
              <Tab label="Papers"/>
              <Tab label="News"/>
              <Tab label="People"/>
            </Tabs>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
