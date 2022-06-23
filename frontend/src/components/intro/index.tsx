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

const IntroBody = () => {

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
                {' '}Primer
            </span>
        </Typography >
        <Typography
        marginBottom='30px'
        fontFamily='IBM Plex Sans'
        fontWeight='200'
        color={curTheme.palette.mode === 'light' ?
        '#3E5060' : 'rgb(178, 186, 194)'}
        >
        MUI offers a comprehensive suite of UI tools to help 
        you ship new features faster. Start with Material UI, 
        our fully-loaded component library, or bring your own 
        design system to our production-ready components.
        </Typography>
        <Box alignSelf='center'>
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

        </Box>
        </Root>
    );

};

export default IntroBody;