import React, { Component } from 'react'
import CanvasJSReact from '../../Assets/canvasjs.react'
import AxiosComponent from '../../axios-component'
const CanvasJS= CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart
class Plot extends Component{

    state = {
        cases:null ,
        country: null
    }

    componentDidMount(){
        AxiosComponent.get(`https://api.covid19api.com/total/dayone/country/${this.props.match.params.id}`)
        .then(countryCases=>{
            // console.log(countryCases.data)
            this.setState({
                cases: countryCases.data.map(countryCase=>{
                    return {
                        death: countryCase.Deaths,
                        active: countryCase.Active,
                        confirmed: countryCase.Confirmed,
                        recovered : countryCase.Recovered,
                        date : countryCase.Date
                    }
                })
            ,   
            country: (countryCases.data[0]?  countryCases.data[0].Country: null)})
        })
    }

    render(){
        let chart = <p>Loading...</p>
        if(this.state.cases){
            if(!this.state.country){
                chart = <p>The Chinese Government has not disclosed any details. #CKMKB</p>
                
            }
            else{
            const dataPointsDeath = this.state.cases.map(indiCase=>({y:indiCase.death,label:indiCase.date}))
            const dataPointsActive = this.state.cases.map(indiCase=>({y:indiCase.active,label:indiCase.date}))
            const dataPointsRecovered = this.state.cases.map(indiCase=>({y:indiCase.recovered,label:indiCase.date}))
            const dataPointsConfirmed = this.state.cases.map(indiCase=>({y:indiCase.confirmed,label:indiCase.date}))
            const options = {
                animationEnabled: true,	
                title:{
                    text: `Chart of COVID19 Cases in ${this.state.country}`
                },
                axisY : {
                    title: "Number of Cases",
                    includeZero: false
                },
                toolTip: {
                    shared: true
                },
                data: [{
                    type: "spline",
                    name: "Deaths",
                    showInLegend: true,
                    dataPoints: dataPointsDeath
                },
                {
                    type: "spline",
                    name: "Active",
                    showInLegend: true,
                    dataPoints: dataPointsActive
                },
                {
                    type: "spline",
                    name: "Recovered",
                    showInLegend: true,
                    dataPoints: dataPointsRecovered
                },{
                    type: "spline",
                    name: "Confirmed",
                    showInLegend: true,
                    dataPoints: dataPointsConfirmed
                }
                ]
            }
            chart =  <CanvasJSChart options={options}/>}
}
        return (
            <div>
                {chart}
            </div>
        )
    }
}


export default Plot