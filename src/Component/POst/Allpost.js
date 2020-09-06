import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '75ch',
    backgroundColor: theme.palette.background.paper,
    color:'#673ab7',
    borderRight:'1px solid lightgray',
    

  },
  inline: {
    display: 'inline',
  },
  btn:{
      marginLeft:'70px',
      marginBottom:'10px'
  },
  posttitle:{
    color:'#ff0081',
}
 
}));

const Allpost = (props) => {
    const classes = useStyles();
    const {id,title,body,userId} = props.post
    return (
        <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
          {`Post: ${id}`}
          </ListItemAvatar>
          <ListItemText
          className={classes.posttitle}
             
            primary={`Post Title : ${title}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {`Post Description : ${body}`}
                  
                </Typography>
               
               
              </React.Fragment>
            }
          />
           
        </ListItem>

        <Link  href={`/post/${id}`}>  <Button className={classes.btn}  variant="contained" color="primary">
        Post Details
      </Button></Link>
       
        <Divider variant="inset" component="li" />
      </List>
     
      
    );
};

export default Allpost;