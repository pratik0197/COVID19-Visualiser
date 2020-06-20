import React, { Component } from 'react'
import AxiosComponent from '../../axios-component'
import CoronaDisplay from '../../components/CoronaDisplay/CoronaDisplay'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import Toolbar from '../../components/Toolbar/Toolbar'
import Plot from '../../components/Plot/Plot'

class Layout extends Component{
    
    state = {
        cases : null,
        countryList : null
    }
    
    componentDidMount(){
        // console.log(this.props)
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

    individualCountrySelector = (id)=>{
        this.props.history.push(`/plots/${id}`)
    }
    render(){
        let cases = null
        if(this.state.cases){
            cases = <CoronaDisplay cases = {this.state.cases} click={this.individualCountrySelector} />
            
        }
        
        return(
            
            <div>
                <Toolbar/>
                <SearchBar change={this.onInputChangeHandler}/>
                <Switch>
                    <Route path='/' exact component={()=>cases}/>
                    <Route path='/plots/:id' exact component={Plot}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Layout)