import { AppBar, Toolbar, Typography, IconButton, Badge, MenuItem, Menu, Icon } from '@material-ui/core'
import React from 'react'
import { ShoppingCart, StorefrontIcon } from '@material-ui/icons';

import useStyles from './style';
import logo from '../../assets/images/logo.png';

const Navbar = () => {

    const classes = useStyles();

    return (
        <div>
          <AppBar position = "fixed" className={classes.appBar} color="inherit">
              <Toolbar>
                  <Typography variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alt='Antiques' height="25px" className={classes.image} />
                        Antiques
                  </Typography>
              </Toolbar>
              <div className={classes.grow}/>
              <div className={classes.Button}/>
              <IconButton aria-label='Show cart items' color='inherit'>
                  <Badge badgeContent={2} color='secondary'>
                    <ShoppingCart/>
                  </Badge>
              </IconButton>
          </AppBar>  
        </div>
    )
}

export default Navbar;
