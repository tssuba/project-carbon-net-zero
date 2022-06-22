import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import HelpIcon from "@mui/icons-material/Help";

import IITMLogo from "../../utils/IITMLogo/IITMLogo.svg";

const StyledToolbar = styled(Toolbar)(() => ({
    justifyContent: "space-between",
    "@media all": {
        minHeight: 90,
        maxWidth: 1200,
    },
}));

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

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#2563eb" }}>
                <StyledToolbar
                    sx={{
                        width: "100%",
                        mx: "auto",
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        <img src={IITMLogo} alt="IIT Madras Logo" width={60} />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                pt: 2,
                            }}
                        >
                            IITM | Carbon Net Zero
                        </Typography>
                    </Stack>
                    <ThemeProvider theme={themebutton}>
                        <Button color="primary" variant="contained" startIcon={<HelpIcon />}>
                            Help{" "}
                        </Button>
                    </ThemeProvider>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
