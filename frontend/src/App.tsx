import React, { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import CssBaseline from "@mui/material/CssBaseline";

import HomeIcon from "@mui/icons-material/Home";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import TweetsList from "./components/TwitterList";
import JournalsList from "./components/ResearchArticlesList";

import IITMLogo from "./utils/IITMLogo";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F5F5F5",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: "black",
}));

const theme = createTheme();

const themebutton = createTheme({
    palette: {
        primary: {
            main: "#fdfdfd",
        },
        secondary: {
            light: "#fdfdfd",
            main: "#fdfdfd",
            contrastText: "#8D9797",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

function App() {
    const [tabIdx, setTabIdx] = useState<number>(0);

    const handleTabIdxChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIdx(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: "#F5F5F5",
                    pt: 2,
                    pb: 6,
                }}
            >
                <Container>
                    <ThemeProvider theme={themebutton}>
                        <ButtonGroup disableElevation variant="contained" color="secondary" sx={{ boxShadow: 1 }}>
                            <Button
                                size="large"
                                startIcon={<HomeIcon />}
                                style={{
                                    minHeight: 42,
                                }}
                            />
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
                                sx={{
                                    pt: 3,
                                }}
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                Carbon Net-Zero Primer
                            </Typography>
                            <Typography variant="subtitle2" align="left" color="black" paragraph>
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography
                                variant="subtitle2"
                                align="right"
                                color="text.secondary"
                                paragraph
                                sx={{ pt: 3, pr: 3 }}
                            >
                                Made in IITM
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <img src={IITMLogo} alt="IIT Madras Logo" width={60} />
                        </Grid>
                    </Grid>
                    <Stack direction="row" spacing={2}>
                        <Grid item xs={2}>
                            <Item
                                variant="outlined"
                                elevation={0}
                                sx={{
                                    maxWidth: 75,
                                }}
                            >
                                Elsevier
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item
                                variant="outlined"
                                elevation={0}
                                sx={{
                                    maxWidth: 75,
                                }}
                            >
                                Springer
                            </Item>
                        </Grid>
                    </Stack>
                    <Tabs
                        aria-label="navigation tabs"
                        value={tabIdx}
                        onChange={handleTabIdxChange}
                        sx={{ pt: 2, pb: 3 }}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Overview" />
                        <Tab label="Briefing" />
                        <Tab label="Papers" />
                        <Tab label="News" />
                        <Tab label="People" />
                    </Tabs>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 2 }}
                        columns={{ xs: 6, sm: 6, md: 12 }}
                        sx={{
                            pb: 4,
                        }}
                    >
                        <Grid item xs={6}>
                            <NewsList />
                        </Grid>
                        <Grid item xs={6}>
                            <JournalsList />
                        </Grid>
                    </Grid>
                    <TweetsList />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
