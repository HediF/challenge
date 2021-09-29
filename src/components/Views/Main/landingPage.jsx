import React, { Component } from 'react';
import MiddlePanel from '../../MiddlePanel/middlePanel';
import './landingPage.css'
import * as GLOBAL_CONSTANTS from '../../../GlobalConstants';

export default class landingPage extends Component {   

    constructor(props) {
        super(props);       
        this.state = { 
            generalInformation: null,
        }
        this.onFetchCompanyInformation = this.onFetchCompanyInformation.bind(this);
        this.onRenderGeneralInformation = this.onRenderGeneralInformation.bind(this);
    }

    componentDidMount() {
        this.onFetchCompanyInformation();
    }

    // Method to fetch general information about the company (SpaceX)
    async onFetchCompanyInformation() {
        try {
            const response = await fetch(GLOBAL_CONSTANTS.GENERAL_COMPANY_INFORMATION_PATH, {
                method: GLOBAL_CONSTANTS.METHODS.GET,
                headers: GLOBAL_CONSTANTS.HEADERS,
            })
            const data = await response.json();
            this.setState({
                generalInformation: data
            })
        } catch (e) {
            console.log("Error while fetching the general information...")
        }
    }

    // Method to display to general information regarding SpaceX from the JSON object in the state
    onRenderGeneralInformation(){
        if(this.state.generalInformation != null) {
            return (
                <div className="information-container">
                    <div className=""><b >CEO: </b> {this.state.generalInformation.ceo}</div>
                    <div className=""><b >COO: </b> {this.state.generalInformation.coo}</div>
                    <div className=""><b >CTO: </b> {this.state.generalInformation.cto}</div>
                    <div className=""><b >Number of employees: </b> {this.state.generalInformation.employees}</div>
                    <div className=""><b >Founded: </b> {this.state.generalInformation.founded}</div>
                    <div className=""><b >Founder: </b> {this.state.generalInformation.founder}</div>
                    <div className=""><b >Address: </b> {this.state.generalInformation.headquarters.address}</div>
                    <div className=""><b >City: </b> {this.state.generalInformation.headquarters.city}</div>
                    <div className=""><b >State: </b> {this.state.generalInformation.headquarters.state}</div>
                    <div className=""><b >Summary: </b> {this.state.generalInformation.summary}</div>
                    <div className=""><b >Vehicles: </b> {this.state.generalInformation.vehicles}</div>
                </div>      

            )
        }
    }

    render() {
        return (
            <>
                <MiddlePanel>
                    <p className="title">General information</p>
                    {this.onRenderGeneralInformation()}
                </MiddlePanel>
            </>
        )
    };
}


