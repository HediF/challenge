import React, { Component } from 'react';
import NavigationItem from './NavigationItem/navigationItem';
import * as GLOBAL_CONSTANTS from '../../GlobalConstants';
import './navigation.css';
import {ic_menu} from 'react-icons-kit/md/ic_menu';
import { Icon } from 'react-icons-kit';
import Sidebar from './Sidebar/sidebar';

const ITEMS = {
    HISTORY: "History",
    CREW: "Crew",
    FLIGHTS: "Flights",
    HOMEPAGE: "Homepage"
}
const navigationItems = [ITEMS.HISTORY,ITEMS.CREW, ITEMS.FLIGHTS];
const navigationItemsSidebar = [ITEMS.HOMEPAGE,ITEMS.HISTORY,ITEMS.CREW, ITEMS.FLIGHTS];

export default class navigation extends Component {   

    constructor(props) {
        super(props);       
        this.state = { 
            sidebarDisplay: false
        }
        this.isTabActive = this.isTabActive.bind(this);
        this.onToggleSidebar = this.onToggleSidebar.bind(this);
    }

    // Method to redirect to a specific tab onClick
    redirectToRespectivePage(selectedTab){
        switch(selectedTab){
            case ITEMS.HISTORY:
                window.location.href = GLOBAL_CONSTANTS.HISTORY_ENDPOINT;
                break;
            case ITEMS.CREW:
                window.location.href = GLOBAL_CONSTANTS.CREW_ENDPOINT;
                break;
            case ITEMS.FLIGHTS:
                window.location.href = GLOBAL_CONSTANTS.FLIGHTS_ENDPOINT;
                break;
            default:
                window.location.href = GLOBAL_CONSTANTS.LANDING_PAGE_ENDPOINT;
        }
    }

    // Method to check whether a tab is currently active
    isTabActive(tabName) {
        return tabName.toLowerCase() === window.location.pathname.substring(1);
    }

    // Method to toggle the display of the sidebar for smaller size windows
    onToggleSidebar() {
        let display = this.state.sidebarDisplay;
        this.setState({
            sidebarDisplay: !display
        })
    }

    render() {
        return (
            <>
            <div className="NavigationContainer">   
                <p className="Spacex-logo" onClick={() => this.redirectToRespectivePage('')}>SpaceX</p>    
                <div className="NavigationItemsContainer">
                    {navigationItems.map((item,index) => (
                        <NavigationItem clicked={() => this.redirectToRespectivePage(item)} key={index} active={this.isTabActive(item)}>{item}</NavigationItem>
                    ))}
                </div>    
                <Icon  className='menu-navigation' onClick={this.onToggleSidebar} size={'100%'} icon={ic_menu}/>   
            </div>
            <Sidebar display={this.state.sidebarDisplay} undisplaySidebar={() => this.setState({sidebarDisplay:false})} onItemSelection={(selected => this.redirectToRespectivePage(selected))} items ={navigationItemsSidebar}/>  
            </>
        )
    };
}


