/* Component that displays generic information about SpaceX */

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
        if(this.state.generalInformation) {
            let infos = this.state.generalInformation;
            return (
                <div className="information-container" id="information-container">
                    <div className=""><b >CEO: </b> {infos.ceo}</div>
                    <div className=""><b >COO: </b> {infos.coo}</div>
                    <div className=""><b >CTO: </b> {infos.cto}</div>
                    <div className=""><b >Number of employees: </b> {infos.employees}</div>
                    <div className=""><b >Founded: </b> {infos.founded}</div>
                    <div className=""><b >Founder: </b> {infos.founder}</div>
                    <div className=""><b >Address: </b> {infos.headquarters.address}</div>
                    <div className=""><b >City: </b> {infos.headquarters.city}</div>
                    <div className=""><b >State: </b> {infos.headquarters.state}</div>
                    <div className=""><b >Summary: </b> {infos.summary}</div>
                    <div className=""><b >Vehicles: </b> {infos.vehicles}</div>
                </div>      

            )
        }
    }

    render() {
        return (
            <>
                <MiddlePanel>
                    <p className="title" id="title">General information</p>
                    {this.onRenderGeneralInformation()}
                </MiddlePanel>
            </>
        )
    };
}


