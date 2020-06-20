import React, { Fragment } from 'react'
import Case from '../Case/Case'


const CoronaDisplay = props=>{
    const Cases = props.cases.map((countryCase)=>
        <Case key = {countryCase.CountryCode} 
        country = {countryCase.Country} 
        totalCases = {countryCase.TotalConfirmed}
        deaths = {countryCase.TotalDeaths}
        recovered = {countryCase.TotalRecovered}
        click = {()=> props.clicked(countryCase.CountryCode)}    
        />
    )

    return (
        <Fragment>
            {Cases}
        </Fragment>
    )
}

export default CoronaDisplay