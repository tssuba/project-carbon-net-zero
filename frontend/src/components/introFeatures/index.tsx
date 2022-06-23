import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Container, minHeight } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';

const IntroFeatures = () => {

    const curTheme = useTheme();

    const darkerBg = (curTheme.palette.mode === 'light' ?
    '#F3F6F9' : 'background.paper');

    return (
        <Container 
            sx = {{
                display: 'flex',
          [curTheme.breakpoints.up('md')]: {
            minWidth: '1000px',
            minHeight: '100%',

            alignItems: 'flex-start',
          },

          [curTheme.breakpoints.down('md')]: {
          },
        bgcolor: darkerBg,
    }}
        >
            <Box sx = {{
                // bgcolor: 'rgba(0,0,0,0.3)',
                // display: 'flex',
                // mx: 'auto',
                [curTheme.breakpoints.down('md')]: {
                    // justifyItems: 'center',
                    // alignItems: 'center',
                    // mx: 'auto'

                  },

            }}>

                <Grid container columns={{ xs: 4, sm: 4, md: 12 }}
                  spacing={4}
                //   direction="column"
                  alignItems="center"
                  justifyContent="center"
                sx = {{
                    // mx: 'auto',
                    pt: 4,
                }}
                >
                    <Grid item xs={4} sm={4} md={6}>
                        <Stack spacing={10}>
                    <Card sx = {{
                        borderRadius: '10px',
                        minWidth: '360px',
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundImage: '-webkit-linear-gradient(left top, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
                        // justifySelf: 'center',

                        minHeight: '250px'
                    }}></Card>
                    <Box bgcolor='#000'
                    minHeight = '250px'
                    minWidth = '250px'
                    >
                        
                    </Box>
                    </Stack>
                    </Grid>
                    
                    <Grid item xs={4} sm={4} md={6}>
                    <Stack spacing={10}>
                    <Box bgcolor='#000'
                    minHeight = '250px'
                    minWidth = '250px'
                    >
                        
                    </Box>

                    <Card sx = {{
                        borderRadius: '10px',
                        minWidth: '360px',
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundImage: '-webkit-linear-gradient(left top, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
                        // justifySelf: 'center',

                        minHeight: '250px'
                    }}></Card>
                    </Stack>
                    </Grid>
                    
                </Grid>
                <Card sx = {{
                        borderRadius: '10px',
                        minWidth: '360px',
                        mt: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundImage: '-webkit-linear-gradient(left top, rgb(255, 255, 255), rgb(200, 200, 200) 120%)',
                        // justifySelf: 'center',

                        minHeight: '250px'
                    }}></Card>
            </Box>
            
        </Container>
        // </Box>
    )
}

export default IntroFeatures;