import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

import axiosInstance from "../../utils/AxiosAPI";

interface NewsArticleType {
    id: number;
    link: string;
    title: string;
    publisher: string;
    published_date: string;
}

export default function NewsList() {
    const [newsArticles, setNewsArticles] = useState<Array<NewsArticleType>>([]);

    const getNewsArticles = async () => {
        const { data } = await axiosInstance.get("/news");
        setNewsArticles(data);
    };

    useEffect(() => {
        getNewsArticles();
    }, []);

    return (
        <Box
            sx={{
                maxWidth: 600,
                minWidth: 300,
            }}
        >
            <Paper variant="outlined">
                <Typography
                    sx={{
                        pt: 2,
                        pl: 2,
                        fontWeight: 600,
                        fontSize: 18,
                    }}
                >
                    Published News Articles
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{
                        pt: 0,
                        pl: 2,
                        fontSize: 12,
                    }}
                >
                    Popular news articles published that discuss topics relevant to achieving Carbon Net-Zero
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
                    {newsArticles.map((newsArticle) => (
                        <div key={newsArticle.id}>
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
                                            {newsArticle.title}
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
                                                {newsArticle.published_date}
                                            </Typography>
                                            {" | "}
                                            {newsArticle.publisher}
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
