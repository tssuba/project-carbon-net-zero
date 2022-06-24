import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Container, minHeight } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Avatar, Typography } from '@mui/material';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { MonthPicker } from '@mui/x-date-pickers/MonthPicker';
import { YearPicker } from '@mui/x-date-pickers/YearPicker';
import { Height } from '@mui/icons-material';

import TwitterIcon from '@mui/icons-material/Twitter';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const IntroFeatures = () => {

    const [date, setDate] = React.useState<Date | null>(new Date());

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
        // overflow: 'hidden'
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
                //   alignItems="center"
                  justifyContent="center"
                sx = {{
                    // maxWidth: '360px',
                    pt: 4,
                }}
                >
                    <Grid item xs={4} sm={4} md={6} sx = {{
                    }}>
                        <Stack spacing={5} sx = {{
                            [curTheme.breakpoints.up('md')]: {maxWidth: '360px'}}}>
                    <Card sx = {{
                        borderRadius: '10px',
                        // maxWidth: '360px',
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        // selfAlign: 'center',
                        backgroundImage: '-webkit-linear-gradient(left top, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
                        // justifySelf: 'center',

                        minHeight: '250px'
                    }}>
                        <Box sx = {{
                                display: 'flex',
                                alignItems: 'center',
                            }}>


                                <ScheduleIcon sx = {{
                                    mr: 2,
                                    color: '#fff',
                                    fontSize: 'medium'
                                    }} /> 
                                    <Typography color='#fff'
                                    sx = {{ fontSize: '',
                                fontWeight: '400'}}
                                    >
                                    {' June 23rd ' }
                                    </Typography>
                                </Box>
                                <Box>                                   
                                <NewspaperRoundedIcon
                                fontSize='large'
                                sx = {{
                                    mt: 2,
                                    // bgcolor: '#fff',
                                    color: '#fff',
                                    borderRadius: '7px'
                                }} />
                                <Box sx = {{
                                    display: 'flex',
                                    mb: 2
                                }}>
                                <Typography sx = {{
                                    fontFamily: 'IBM Plex Sans',
                                    color: '#fff',
                                    fontWeight: '600',
                                    fontSize: 'large',
                                    // width: '100%'
                                }}>
                                IGI Delhi becomes India{'’'}s 
                                first airport to run entirely on solar and hydro energy
                                </Typography> 
                                
                                </Box>
                                <Stack direction='row' spacing={2}>
                                <Avatar variant="rounded" src="https://logo.clearbit.com/timesnownews.com?size=128" />
                                {/* <img src = 'https://logo.clearbit.com/timesnownews.com?size=' width={48}/> */}
                                <Stack>
                                <Typography fontSize='small' sx = {{
                                    color: 'grey.300'
                                }}>
                                    Published by
                                </Typography>
                                <Typography fontSize='small' fontWeight='600' sx = {{
                                    color: '#fff'
                                }}>
                                    The Times of India
                                </Typography>
                                </Stack>
                                
                                </Stack>
                                <Box>

                                </Box>
                                

                        </Box>
                    </Card>
                    <Card sx={{ 
                        display: 'flex',
                        width: '100%', 
                        border: 1, borderColor: 'divider', borderRadius: '5%' }}>
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        width: '100%',
                    bgcolor: 'background.default' }}>
                        <CardContent 
                        sx={{ flex: '1 0 auto' }}
                        >
                        <Typography component="div" variant="body1" paddingBottom={1}
                        fontFamily = 'IBM Plex Sans'
                        fontWeight= '600'
                        >
                        Tackling Climate Change with Machine Learning
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div"
                        fontFamily = 'IBM Plex Sans'
                        fontSize = 'small'
                        fontWeight = '600'
                        paddingBottom={1}
                        >
                        ACM Computing Surveys
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div"
                        fontFamily = 'IBM Plex Sans'
                        fontSize = 'small'
                        >
                        Via Springer
                        </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 128, bgcolor: 'background.paper' }}
                        src="https://www.seekpng.com/png/full/357-3578833_springer-logo-springer-sciencebusiness-media.png"
                        alt="Live from space album cover"
                    />
                    </Card>
                    <Box sx = {{
                        // [curTheme.breakpoints.down('md')]: {minWidth: '100%'},
                        // bgcolor: 'rgba(0,0,0,0.5)',
                        [curTheme.breakpoints.down('md')]: {
                        // bgcolor: '#000',
                        // pl: '12%',
                        // pr: '50%',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        mx: 'auto'

                    }
                    }}>
                    <TwitterTweetEmbed tweetId='1539913505641480198' />
                    </Box>
                    </Stack>
                    </Grid>
                    
                    <Grid item xs={4} sm={4} md={6} justifyItems= 'center'>
                    <Stack spacing={5}>

                        <Box sx = {{
                            bgcolor: 'background.default',
                            height: '300px',
                            // width: '350px',
                            border: 1,
                            borderRadius: '5%',
                            borderColor: 'divider',
                            [curTheme.breakpoints.down('md')]: { 
                                display: 'none'
                            }
                        }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <CalendarPicker date={date} onChange={(newDate) => setDate(date)} />
                        </LocalizationProvider>

                        </Box>

                        <Card sx = {{
                        borderRadius: '10px',
                        // minWidth: '360px',
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundImage: '-webkit-linear-gradient(left top, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
                        // justifySelf: 'center',

                        minHeight: '250px'
                    }}>
                        <Box sx = {{
                                display: 'flex',
                                alignItems: 'center',
                            }}>


                                    <Typography color='#fff'
                                    sx = {{ fontSize: '',
                                fontWeight: '400', mb: 4}}
                                    > <ScheduleIcon sx = {{
                                        pt: 0.8,
                                        color: '#fff',
                                        fontSize: 'medium'
                                        }} /> 
                                    {'   June 24th ' }
                                    </Typography>
                                </Box>
                                <Box sx = {{
                                    justifySelf: 'center',
                                    mx: 'auto'
                                }}>                                   
                                <Stack direction='row' spacing={2}>
                                <TwitterIcon fontSize='large' sx = {{ color: '#fff'}} />
                                <Stack>
                                <Typography fontSize='small' sx = {{
                                    color: 'grey.300'
                                }}>
                                    Tweets Since
                                </Typography>
                                <Typography fontSize='small' fontWeight='600' sx = {{
                                    color: '#fff'
                                }}>
                                    Last Week
                                </Typography>
                                </Stack>
                                
                                </Stack>
                                <Stack direction='row'>
                                <ShowChartIcon
                                fontSize='large'
                                sx = {{
                                    mt: 2,
                                    // bgcolor: '#fff',
                                    color: '#fff',
                                    borderRadius: '7px'
                                }} />
                                <Typography sx = {{
                                    mt: 3,
                                    ml: 3,
                                    color: '#fff'
                                }}>1248</Typography>
                                </Stack>
                                

                        </Box>
                    </Card>
                    <Card sx = {{
                        borderRadius: '10px',
                        // minWidth: '360px',
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'background.default',
                        backgroundImage: 'none',
                        border: 1,
                        borderColor: 'divider',
                        // justifySelf: 'center',

                        minHeight: '250px'
                    }}></Card>
                    </Stack>
                    </Grid>
                    
                </Grid>
                {/* <Card sx = {{
                        borderRadius: '10px',
                        minWidth: '360px',
                        mt: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundImage: '-webkit-linear-gradient(left top, rgb(255, 255, 255), rgb(200, 200, 200) 120%)',
                        // justifySelf: 'center',

                        minHeight: '250px'
                    }}></Card> */}
            </Box>
            
        </Container>
        // </Box>
    )
}

export default IntroFeatures;