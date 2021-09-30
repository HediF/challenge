/* 
    Class component to display all the launches of SpaceX and information about the launchpad used for the 
    flight with the possibility of filtering the flights based on whether or not they have been successful
*/

import React, { Component } from 'react';
import MiddlePanel from '../../MiddlePanel/middlePanel';
import * as GLOBAL_CONSTANTS from '../../../GlobalConstants';
import './flights.css';
import Filter from './Filters/filter';


// Filters
const FILTERS_ENUM = {
    SUCCESSFUL_FLIGHTS: "Successful flights",
    FAILED_FLIGHTS: "Failed flights"
}
const FILTERS = [FILTERS_ENUM.SUCCESSFUL_FLIGHTS, FILTERS_ENUM.FAILED_FLIGHTS]

export default class flights extends Component {

    constructor(props) {
        super(props);
        this.state = {
            launches: null,
            launchepads: null,
            selectedFilter: '',
            displayedLaunchpads: []
        }
    }

    componentDidMount() {
        this.onLaunchesFetch();
        this.onLaunchepadsFetch();
    }

    // Method to fetch launches information
    async onLaunchesFetch() {
        try {
            const response = await fetch(GLOBAL_CONSTANTS.LAUNCHES_PATH, {
                method: GLOBAL_CONSTANTS.METHODS.GET,
                headers: GLOBAL_CONSTANTS.HEADERS,
            })
            const data = await response.json();
            console.log(data)
            this.setState({
                launches: data
            })
        } catch (e) {
            console.log("Error while fetching launches information...")
        }
    }

    // Method to fetch launchpads information
    async onLaunchepadsFetch() {
        try {
            const response = await fetch(GLOBAL_CONSTANTS.LAUNCHPADS_DATA_PATH, {
                method: GLOBAL_CONSTANTS.METHODS.GET,
                headers: GLOBAL_CONSTANTS.HEADERS,
            })
            const data = await response.json();
            console.log(data)
            this.setState({
                launchepads: data
            })
        } catch (e) {
            console.log("Error while fetching launchpads information...")
        }
    }

    // return flights based on filter selection
    returnFlights() {
      let flights;
      switch(this.state.selectedFilter){
        case FILTERS_ENUM.SUCCESSFUL_FLIGHTS:
            flights =  this.state.launches
            .filter((element) => {
                return element.success
            }).map((launch,index) => {
                return this.returnElement(index,launch,Boolean(launch.success));
            });
        break;
        case FILTERS_ENUM.FAILED_FLIGHTS:
            flights =  this.state.launches
            .filter((element) => {
                return !element.success
            }).map((launch,index) => {
                return this.returnElement(index,launch,Boolean(launch.success));
            });
        break;
        default:
            flights =  this.state.launches.map((launch,index) => {
                return this.returnElement(index,launch,Boolean(launch.success));
            });    
      }
      return flights;
    }

    // return flight and launchpad used informations inside a jsx element
    returnElement (index,launch,success) {
        let launchpadInfos = this.state.launchepads ? this.state.launchepads.filter(entity => entity.id === launch.launchpad) : void(0);
        return (
            <div className="launch-item" key={index}>
                <img className="launchpad-image" alt="launchpad" src={launchpadInfos[0].images.large}/>
                <div className="launch-item-name">{launch.name}</div>
                <div>Flight number: {launch.flight_number}</div>
                <div className="launch-item-details">Description: {launch.details ? launch.details : "No details available"}</div>
                <div className="launch-item-details">Success: {success.toString()}</div>
                <div className="launch-item-details">Launchpad full name: {launchpadInfos[0].full_name}</div>
                <div className="launch-item-details">Launchpad details: {launchpadInfos[0].details}</div>
            </div>
        )
    }

    render() {
        return (
            <>
                <MiddlePanel>
                    <div className="filters-container">
                        {FILTERS.map((item, index) => {
                            return <Filter
                                onFilterClick={(filter) => this.state.selectedFilter === filter ? this.setState({ selectedFilter: '' }) : this.setState({ selectedFilter: filter })}
                                key={index} filterName={item}
                                selected={this.state.selectedFilter === item}
                            />
                        })}
                    </div>
                    <div className="launches-container">
                        { this.state.launches && this.state.launchepads ? this.returnFlights() : "Loading..."}
                    </div>
                </MiddlePanel>
            </>
        )
    };
}


