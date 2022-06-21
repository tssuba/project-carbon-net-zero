import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TwitterTweetEmbed } from 'react-twitter-embed'
import Stack from '@mui/material/Stack';

import axios from "axios";
import {useState, useEffect} from "react";
import { fontSize } from '@mui/system';

export default function TweetsList() {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get("http://api.localhost/tweets")

    setPosts(data)
  }
  return (
    <Box sx = {{
    //   maxWidth: 600,
    //   minWidth: 300,
    // maxHeight: 600
        }}>
      <Paper variant='outlined' sx = {{ 
        justifyContent: "flex-center",
        justifyItems: "flex-center"
      }}>
        <Stack direction="column" spacing={2} style={{
            maxWidth:1200,
            maxHeight: 600,
            overflow:"auto",
        }}>
            {posts.map(post => (
                <div key = {post.id}>
                    <Box sx = {{
                        // width:1000,
                        maxHeight:500
                    }}>
                    <TwitterTweetEmbed tweetId={post.tweetId} />
                    </Box>
                </div>

            ))}
        </Stack>
      </Paper>
    </Box>
  );
}