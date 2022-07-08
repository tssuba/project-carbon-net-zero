import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/ibm-plex-sans";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { PaletteMode } from '@mui/material';


import { red, green, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Height } from '@mui/icons-material';
import { Container } from '@mui/system';
import Carousel from 'nuka-carousel';


const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
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

const BriefBody = () => {

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
            // bgcolor: 'secondary.light'
        }}>
        <Typography
        marginBottom='20px'
            variant='h1'
            style={styles.customizeTyporaphy}
            fontWeight='600'
            lineHeight='1.11429'
            fontSize='clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)'
        >
                Carbon Net Zero
            <span 
                style={curTheme.palette.mode === 'light' ?
                styles.spanColorLight : styles.spanColorDark
            }
                >
                {' '}Why ?
            </span>
        </Typography >
        <Box maxWidth='600px' sx = {{pb: 4}}>
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

        <Typography
        marginBottom='30px'
        fontFamily='IBM Plex Sans'
        fontWeight='200'
        color={curTheme.palette.mode === 'light' ?
        '#3E5060' : 'rgb(178, 186, 194)'}
        >
            The existing websites on net-zero carbon provide 
            general information regarding net-carbon zero. 
            However, very little is known to the common people 
            about the recent development. The carbon net-zero 
            primer is different from the other net carbon zero 
            websites as it provides all the information on the 
            recent activities related to net carbon zero. It has
             information from a variety of sources and for a 
             diverse group of people. The primer contains 
             information on the top researchers working in 
             the field and their recent contributions. The 
             primer provides the latest news regarding various 
             anthropogenic activities affecting the carbon
              balance from all around the globe. The primer displays the most popular tweets from Twitter 
              relating to carbon net-zero.

        </Typography>
        {/* <Box alignSelf='center'>
        <Button 
        variant="contained" 
        size='large'
        sx = {{
            // fontFamily: 'IBM Plex Sans',
            // fontWeight: '600',
            // fontSize: 'large',
            // bgcolor: 'primary.main',
            // textTransform: 'none'
            fontFamily: 'IBM Plex Sans',
            fontWeight: '600',
            fontSize: 'medium',
            bordercolor: 'rgb(51, 153, 255)',
            // color: 'grey.500',
            bgcolor: 'primary',
            textTransform:'none',
            mr: '10px'
        }}
        >
            Get Started {'>'}
        </Button>
        <Button 
        // style={styles.customizeButton}
        variant="outlined"
        size='large'
        sx = {{
             fontFamily: 'IBM Plex Sans',
            fontWeight: '600',
            fontSize: 'medium',
            // bordercolor: '#CDD2D7',
            // color: '#2D3843',

            // bgcolor: 'rgb(194, 224, 255)',
            textTransform:'none'
        }}
        >
            Outlined
        </Button>

        </Box> */}
        </Root>
    );

};

export default BriefBody;