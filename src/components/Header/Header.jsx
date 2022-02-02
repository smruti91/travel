import React from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';

const Header = () => {
   const classes = useStyles();
  return (
     <AppBar position="static"> 
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Adviser
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore New Places
            </Typography>
            {/* <Autocomplete> */}
              <div  className={classes.search}>
                <div className={classes.searchText}>
                   <SearchIcon style={{marginTop: '.5rem'}} />
                </div>
                <InputBase placeholder= "search..." classes= {{root: classes.input}} />
              </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
     </AppBar>
  );
};

export default Header;
