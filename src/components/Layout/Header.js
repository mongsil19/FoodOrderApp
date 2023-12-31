import React, {Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage}/>
        </div>
    </Fragment>
}
export default Header;