import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import "@fontsource/plus-jakarta-sans/700.css";

import { PaletteMode } from '@mui/material';


import { red, green, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Height } from '@mui/icons-material';


const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
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


    return (
        <Box sx = {{
            // display: 'flex',
            bgcolor:'primary.light',
            alignSelf: 'center',
            minheight: '100%'
            // height: 'flex'
            // marginBottom: '20px'
        }}>
        <>
        <Root>
        <Box
            bgcolor='primary.dark'
            // height='500px'
            // alignContent='center'
            // paddingBottom='100%'
            >
        <Typography
        alignSelf='center'
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
        </Box>
        </Root>
        </>
        </Box>
    );

};

export default IntroBody;