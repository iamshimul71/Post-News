import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '70ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  comment:{
    color:'orange'
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);



const Comments = (props) => {
  

  const {name,email,body,id} = props.comment
 
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();
 
 
  const [pic,setPic] = useState([])
  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        let img = data[2].url;
        setPic(img)

        

    } )
      
},[])
 
  
    return (
     
      <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        
    <Typography color="textPrimary">Comment  Dtata</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          <List className={classes.root}>
      <ListItem alignItems="flex-start">
      <ListItemAvatar>
      <Avatar alt="Travis Howard" src={pic} />
        </ListItemAvatar>
        <ListItemText
        
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
                {email}
              </Typography>
              <br />
              <br />

              {body}
            </React.Fragment>
          }
        />
      </ListItem>
      
  
    </List>



          </Typography>
        </AccordionDetails>
      </Accordion>
      
     
    </div>
    );
};

export default Comments;