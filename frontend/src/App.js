import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Navbar from './components/navbar';
import NewsList from './components/newsList';
import ResearchList from './components/researchList';
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
import Stack from '@mui/material/Stack';
import iitmlogo from "./components/navbar/iitmlogo.svg"

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import axios from "axios";
import {useState, useEffect} from "react";
// import TweetEmbed from 'react-tweet-embed';
import { TwitterTweetEmbed } from 'react-twitter-embed'
import TweetsList from './components/twitterList';

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
  color: 'black',
}));

const theme = createTheme();

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

function App() {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [posts, setPosts] = useState([])

  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get("http://api.localhost/news")

    setPosts(data)
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />
      <main>
        <Box
        sx={{
          bgcolor: '#F5F5F5',
          pt: 2,
          pb: 6
        }}
        >
          <Container>
          <ThemeProvider theme={themebutton}>
            <ButtonGroup  disableElevation variant="contained" color="secondary" sx={{ boxShadow: 1 }}>
              <Button size = "large" startIcon={<HomeIcon />} style = {{
                minHeight : 42,
              }}></Button>
              <Button>This Search</Button>
            </ButtonGroup>
            </ThemeProvider>
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
              <Typography variant="subtitle2" align="left" color="black" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
              </Typography>
              </Grid>
              <Grid item xs = {2}>
              <Typography variant="subtitle2" align="right" color="text.secondary" paragraph
              sx = {{ pt: 3, pr: 3}}>
                      Made in IITM
                      </Typography>
              </Grid>
              <Grid item xs = {1}>
              <img src={iitmlogo} width={60} align="right"/>
              </Grid>
              {/* <Grid item xs={1}>
                <img src={iitmlogo} width={60} sx = {{
                  pt: 10
                }}/>
              </Grid>
              <Grid item xs={2}>
              <Typography variant="subtitle2" align="right" color="text.secondary" paragraph
              sx = {{ pt: 6}}>
                IIT Madras
              </Typography>
              </Grid> */}
            </Grid>
            <Stack direction="row" spacing={2}>
              <Grid item xs={2}>
                <Item variant="outlined" elevation={0} sx = {{
                  maxWidth: 75
                }}>Elsevier</Item>
              </Grid>
              <Grid item xs={2}>
                <Item variant="outlined" elevation={0} sx = {{
                  maxWidth: 75
                }}>Springer</Item>

              </Grid>
            </Stack>
            <Tabs 
            aria-label="navigation tabs"
            value={value}
            onChange={handleChange}
            sx = {{pt: 2, pb: 3}}
            variant="scrollable"
            scrollButtons="auto">
              <Tab label="Overview" />
              <Tab label="Briefing"/>
              <Tab label="Papers"/>
              <Tab label="News"/>
              <Tab label="People"/>
            </Tabs>
            {/* <NewsList />
            <ResearchList /> */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }} sx = {{
            pb: 4
            }}>
              <Grid item xs={6}>
                <NewsList />
              </Grid>
              <Grid item xs={6}>
                <ResearchList />
              </Grid>
            </Grid>
            {/* <Stack direction = "row" spacing={2} sx = {{
              maxWidth: 1000
            }}>
              <Box sx = {{
                width: 1000
              }}>
            <TwitterTweetEmbed tweetId = {'933354946111705097'} />
            </Box>
            <Box sx = {{
                width: 1000
              }}>
                <TwitterTweetEmbed tweetId = {'1538500537586434048'} />
              </Box>
              <Box sx = {{
                width: 1000
              }}>
                <TwitterTweetEmbed tweetId = {'1538498613919289345'} />
              </Box>
            </Stack> */}
              
            <TweetsList />
          </Container>
        </Box>
      </main>
      {/* {posts.map(post => (
          <div key = {post.id}>
            <h5>{post.title}</h5>
            <p>{post.publisher}</p>
            <p>{post.published_date}</p>
          </div>
        ))} */}
    </ThemeProvider>
  );
}

export default App;
