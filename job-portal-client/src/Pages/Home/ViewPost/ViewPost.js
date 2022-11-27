import React from 'react';
import { Typography, Grid } from '@mui/material';
import useStyles from "../../../Styles/Styles";
import { useState, useEffect } from 'react';
import ViewPostCard from './ViewPostCard';


const ViewPost = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div className={classes.viewPost}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Typography className={classes.viewPostCard} variant="h3" align="center" gutterBottom>
                        View Posts
                    </Typography>
                       
                </Grid>
            </Grid>
            <Grid container spacing={2}>
               {
                    posts.map(post => <ViewPostCard key={post._id} post={post}></ViewPostCard>)
               }
            </Grid>
            
        </div>
    );
};

export default ViewPost;