import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Cpmments/Comments';




const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
    color:'orange'
  },
  pos: {
    marginBottom: 12,
    color:'black'
  },
  comment:{
      color:'blue'
  }
});

const PostDetails = (props) => {
  
    const {postid} = useParams()
    const [post,setPost] = useState([])
    const [comment,setComment] = useState([])
    
    

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postid}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setPost(data))
       
    },[])
    
    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/comments?postId=${postid}`
      fetch(url)
      .then(res => res.json())
      .then(data =>setComment(data) )

  },[])

  

 


  
    
  

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Post Details explore here 
           
          </Typography>
          User Id : {post.id}
          <br />
          <br />
          Post Title :
          <Typography variant="h5" component="h2">
             
             {post.title}
             <br />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          <br />
            Post Description :
          </Typography>
          <Typography variant="body2" component="p">
           {post.body}
            <br />
            <br />

            
            <br />
           
          </Typography>
          
          <Typography className={classes.comment} variant="h6" component="h2">
             
          {'All Comments here'}
            
          </Typography>
          {
               comment.map(post=> <Comments  comment={post}></Comments>)
            }
          
            
        </CardContent>
        
      </Card>
    
    );
};

export default PostDetails;