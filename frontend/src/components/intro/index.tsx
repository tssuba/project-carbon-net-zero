import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Typography } from '@mui/material';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/ibm-plex-sans";

import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';


import Carousel from 'nuka-carousel';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { PaletteMode } from '@mui/material';


import { red, green, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Height } from '@mui/icons-material';
import { Container } from '@mui/system';

import { Link , Navigate, useNavigate} from 'react-router-dom'


const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
        textAlign: 'center',
    },
  }));

const styles = {
    customizeTyporaphy: {
        backgroundImage: "-webkit-linear-gradient(left, #007FFF, #0059B2)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        font: 'Plus Jakarta Sans',

    },

    spanColorDark:{
        backgroundImage: "-webkit-linear-gradient(left, #fff, #fff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        font: 'Plus Jakarta Sans',
        // color: '#fff'
    },

    spanColorLight:{
        backgroundImage: "-webkit-linear-gradient(left, #000, #000)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        font: 'Plus Jakarta Sans',
        // color: '#000'
    },

};

const IntroBody = () => {

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

    const curTheme = useTheme();

    const greyButtonDark = {
        fontFamily: 'IBM Plex Sans',
        fontWeight: '600',
        fontSize: 'small',
        bordercolor: 'rgb(51, 153, 255)',
        color: 'grey.500',
        bgcolor: 'rgb(23, 58, 94)',
        textTransform:'none'
      }


    return (

            <Root sx = {{
                width: '100%',
            // bgcolor: 'secondary.light',
        }}>
        <Typography
        marginBottom='20px'
        marginTop='30px'
            variant='h1'
            style={styles.customizeTyporaphy}
            fontWeight='600'
            lineHeight='1.11429'
            fontSize='clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)'
        >
                Carbon Net Zero
            {/* <span 
                style={curTheme.palette.mode === 'light' ?
                styles.spanColorLight : styles.spanColorDark
            }
                >
                {' '}Primer
            </span> */}
        </Typography >
        <Box
        mx = 'auto' 
        // bgcolor = '#000'
        width = '500px'
        pt = '25px'

        >
        <Carousel 
        autoplay = {true}
        autoplayInterval = {5000}
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
    <Typography
        marginBottom='30px'
        fontFamily='IBM Plex Sans'
        fontWeight='200'
        color={curTheme.palette.mode === 'light' ?
        '#3E5060' : 'rgb(178, 186, 194)'}
        >
            Net-zero is a scientific concept whose objective is to keep the global average temperatures
within a certain limit by applying constraints on the amount of carbon dioxide that can be
present in earth's atmosphere at any given point of time.
        </Typography>

        <Typography
        marginBottom='30px'
        fontFamily='IBM Plex Sans'
        fontWeight='200'
        color={curTheme.palette.mode === 'light' ?
        '#3E5060' : 'rgb(178, 186, 194)'}
        >
            Net-zero for a particular country is a state in which a country’s excess carbon dioxide emissions
are removed from atmosphere by carbon absorption or sequestration
        </Typography>

        <Typography
        marginBottom='30px'
        fontFamily='IBM Plex Sans'
        fontWeight='200'
        color={curTheme.palette.mode === 'light' ?
        '#3E5060' : 'rgb(178, 186, 194)'}
        >
            Ways to achieve carbon net-zero include cutting down on all emissions as much as we can and
removing carbon dioxide from the atmosphere by carbon sequestration and absorption
        </Typography>
        <Typography
        marginBottom='30px'
        fontFamily='IBM Plex Sans'
        fontWeight='200'
        color={curTheme.palette.mode === 'light' ?
        '#3E5060' : 'rgb(178, 186, 194)'}
        >
            Carbon net-zero can also be viewed as a framework through which global action against climate
change can be undertaken using suitable socio-economic and policy changes.
        </Typography>
        <Typography
        marginBottom='30px'
        fontFamily='IBM Plex Sans'
        fontWeight='200'
        color={curTheme.palette.mode === 'light' ?
        '#3E5060' : 'rgb(178, 186, 194)'}
        >
            Large scale deforestation has created a situation where we do not have enough trees to absorb
all the carbon dioxide that are released. Planting trees offers a simple and effective solution.
        </Typography>
        
        </Carousel>
        

        </Box>

        <Box sx = {{
            pt: 10,
            display:'inline-flex',
            // bgcolor: '#f0f0f0'
        }}>
            <Stack direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 40 }}>

    <Button onClick= {handleCloseNavMenuN}>
        <Card sx = {{
            padding: 5
        }}>
        <Stack>
            
            <NewspaperOutlinedIcon sx = {{
                fontSize: '5rem',
            }} />

<Typography textTransform='none'
fontWeight = '600'
>

News
</Typography>

      </Stack>
        </Card>

    

    </Button>

      <Button onClick= {handleCloseNavMenuR}>
        <Card sx = {{
            padding: 5
        }}>
        <Stack>
      <LibraryBooksOutlinedIcon sx = {{
                fontSize: '5rem',
              //   ml: 20,
              //   mr: 20,
            }}/>

            <Typography textTransform='none'
            fontWeight = '600'
            >

                Research
            </Typography>

      </Stack>
        </Card>
      

      </Button>
      <Button onClick= {handleCloseNavMenuP}>
        <Card sx = {{
            padding: 5
        }}>
        <Stack>
            <TwitterIcon sx = {{
                fontSize: '5rem'
            }}/>
            <Typography textTransform='none'
            fontWeight = '600'
            >
                Twitter
</Typography>
            </Stack>
        </Card>
      
      </Button>


            </Stack>
        
                 
        </Box>
        

        </Root>
        
    );

};

export default IntroBody;