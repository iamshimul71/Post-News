import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
 
});

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Home" />
          <Tab label="News Post" />

          <Link href="/home"><Tab label="ALL Post" /></Link>
          <Tab label="Log In" />
        </Tabs>
      </Paper>
    );
};

export default Header;