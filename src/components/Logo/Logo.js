import React from 'react';

import BurgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={BurgerLogo} alt="Burger_builder"/>
    </div>    
);
 
export default logo;