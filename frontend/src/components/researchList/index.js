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

import axios from "axios";
import {useState, useEffect} from "react";
import { fontSize } from '@mui/system';

export default function ResearchList() {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get("http://api.localhost/research")

    setPosts(data)
  }
  return (
    <Box sx = {{
      maxWidth: 600,
      minWidth: 300
    }}>
      <Paper variant='outlined' sx = {{}}>
        <Typography sx = {{
          pt: 2,
          pl: 2,
          fontWeight: 600,
          fontSize: 18,
        }}>Relevant Research</Typography>
        <Typography 
        // component="span"
        // variant="subtitle2"
        sx = {{
          pt: 0,
          pl: 2,
          // fontWeight: 600,
          fontSize: 12,
        }}
        >Upcoming and published research from different journals</Typography>
        <Divider/>
        <List sx={{ 
          width: '100%',
          maxWidth: 600,
          maxHeight: 350,
          overflow: 'auto',
          bgcolor: 'background.paper' }}>
            {posts.map(post => (
              <div key = {post.id}>
              <ListItem alignItems="flex-start">
              <ListItemText
                primary={<React.Fragment>
                  <Typography sx = {{
                    fontWeight: 550,
                    fontSize: 14,
                    pb: 1
                  }}>
                    {post.title}
                  </Typography>
                </React.Fragment>}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      // color="text.primary"
                    >
                      {post.published_date}
                    </Typography>
                    {" | "}{post.publisher}
                  </React.Fragment>
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