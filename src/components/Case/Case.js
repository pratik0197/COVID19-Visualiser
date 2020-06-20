import React from 'react'
import classes from './Case.module.css'

const Case = props => {
    
    
    return(
    <div className={classes.Case}  onClick={props.click}>
        <p>{props.country}</p>
        <p>Cases : {props.totalCases}</p>
        <p>Deaths : {props.deaths}</p>
        <p>Recovered: {props.recovered}</p>
    </div>
    )
}

export default Case