import React, { Component } from 'react';
import MiddlePanel from '../../MiddlePanel/middlePanel';
import Navigation from '../../Navigation/navigation';
import * as GLOBAL_CONSTANTS from '../../../GlobalConstants';
import CrewMember from './CrewMember/crewMember';
import './crew.css';

export default class crew extends Component {   

    constructor(props) {
        super(props);       
        this.state = { 
            crewData: null
        }
        this.onCrewDataFetch = this.onCrewDataFetch.bind(this);
        this.onRenderCrewMembers = this.onRenderCrewMembers.bind(this);
    }

    componentDidMount() {
        this.onCrewDataFetch();
    }

    // Method to fetch crew information working at the company (SpaceX)
    async onCrewDataFetch() {
        try {
            const response = await fetch(GLOBAL_CONSTANTS.CREW_DATA_PATH, {
                method: GLOBAL_CONSTANTS.METHODS.GET,
                headers: GLOBAL_CONSTANTS.HEADERS,
            })
            const data = await response.json();
            console.log(data)
            this.setState({
                crewData: data
            })
        } catch (e) {
            console.log("Error while fetching the crew information...")
        }
    }
    
    // Method to render the list of all crew members
    onRenderCrewMembers () {
        let resultView;
        if (this.state.crewData) {
            resultView = this.state.crewData.map((member,index) => {
                return <CrewMember key={index} memberInformation={member}/>
            })
        }
        return resultView;
    }

    render() {
        return (
            <>
                <Navigation/>
                <MiddlePanel>
                    <p className="title">Members of the crew {this.state.crewData ? ":" +this.state.crewData.length : void(0)}</p>
                    <div className="members-grid">
                        {this.onRenderCrewMembers()}
                    </div>
                </MiddlePanel>
            </>
        )
    };
}


