import React, { Component } from 'react'
import AxiosComponent from '../../axios-component'
import CoronaDisplay from '../../components/CoronaDisplay/CoronaDisplay'
import SearchBar from '../../components/SearchBar/SearchBar'
class Layout extends Component{
    
    state = {
        cases : null,
        countryList : null
    }
    
    componentDidMount(){
        // console.log('Hello')
        AxiosComponent.get('/summary').then(
            response =>{
                // const INCountries = response.data.Countries.filter(country=>country.Country.search(/\b/)!==-1)
                this.setState({
                    cases: response.data.Countries,
                    countryList : response.data.Countries
                })
                
            }
        )
    }
    onInputChangeHandler = (event)=> {
        const searchedCountries = this.state.countryList.filter(country=>country.Country.search(new RegExp(`\\b${event.target.value}`,'i'))!==-1)
        this.setState({
            cases : searchedCountries
        })
    }

    render(){
        let cases = null
        if(this.state.cases)
            cases = <CoronaDisplay cases = {this.state.cases}/>
        return(
            
            <div>
                <SearchBar change={this.onInputChangeHandler}/>
                {cases}
            </div>
        )
    }
}

export default Layout