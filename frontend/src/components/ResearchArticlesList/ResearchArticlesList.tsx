import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

import axiosInstance from "../../utils/AxiosAPI";

interface ResearchArticleType {
    id: number;

    doi: string;
    title: string;

    publisher: string;
    published_date: string;
}

export default function ResearchArticlesList() {
    const [researchArticles, setResearchArticles] = useState<Array<ResearchArticleType>>([]);

    const getResearchArticles = async () => {
        const { data } = await axiosInstance.get("/research");

        setResearchArticles(data);
    };

    useEffect(() => {
        getResearchArticles();
    }, []);

    return (
        <Box
            sx={{
                maxWidth: 600,
                minWidth: 300,
            }}
        >
            <Paper variant="outlined" sx={{}}>
                <Typography
                    sx={{
                        pt: 2,
                        pl: 2,
                        fontWeight: 600,
                        fontSize: 18,
                    }}
                >
                    Relevant Research
                </Typography>
                <Typography
                    sx={{
                        pt: 0,
                        pl: 2,
                        fontSize: 12,
                    }}
                >
                    Upcoming and published research from different journals
                </Typography>
                <Divider />
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 600,
                        maxHeight: 350,
                        overflow: "auto",
                        bgcolor: "background.paper",
                    }}
                >
                    {researchArticles.map((researchArticle) => (
                        <div key={researchArticle.id}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        <Typography
                                            sx={{
                                                fontWeight: 550,
                                                fontSize: 14,
                                                pb: 1,
                                            }}
                                        >
                                            {researchArticle.title}
                                        </Typography>
                                    }
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="body2"
                                                // color="text.primary"
                                            >
                                                {researchArticle.published_date}
                                            </Typography>
                                            {" | "}
                                            {researchArticle.publisher}
                                        </>
                                    }
                                />
                            </ListItem>
                            <Divider component="li" />
                        </div>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}
