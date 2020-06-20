import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Toolbar.module.css'
const Toolbar = props=>(
    <div className={classes.Toolbar}>
        <NavLink to='/'>HOME</NavLink>
    </div>
)

export default Toolbar