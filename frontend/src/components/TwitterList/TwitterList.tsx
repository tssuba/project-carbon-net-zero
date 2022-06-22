import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { TwitterTweetEmbed } from "react-twitter-embed";

import axiosInstance from "../../utils/AxiosAPI";

interface TwitterPostType {
    id: number;
    tweetId: string;
}

export default function TweetsList() {
    const [twitterPosts, setTwitterPosts] = useState<Array<TwitterPostType>>([]);

    const getTwitterPosts = async () => {
        const { data } = await axiosInstance.get("/tweets");

        setTwitterPosts(data);
    };

    useEffect(() => {
        getTwitterPosts();
    }, []);

    return (
        <Box
            sx={
                {
                    //   maxWidth: 600,
                    //   minWidth: 300,
                    // maxHeight: 600
                }
            }
        >
            <Paper
                variant="outlined"
                sx={{
                    justifyContent: "flex-center",
                    justifyItems: "flex-center",
                }}
            >
                <Stack
                    direction="column"
                    spacing={2}
                    style={{
                        maxWidth: 1200,
                        maxHeight: 600,
                        overflow: "auto",
                    }}
                >
                    {twitterPosts.map((twitterPost) => (
                        <div key={twitterPost.id}>
                            <Box
                                sx={{
                                    // width:1000,
                                    maxHeight: 500,
                                }}
                            >
                                <TwitterTweetEmbed tweetId={twitterPost.tweetId} />
                            </Box>
                        </div>
                    ))}
                </Stack>
            </Paper>
        </Box>
    );
}
