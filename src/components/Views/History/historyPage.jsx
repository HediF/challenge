/* Component to display a view of historical events of SpaceX */

import React, { Component } from 'react';
import MiddlePanel from '../../MiddlePanel/middlePanel';
import * as GLOBAL_CONSTANTS from '../../../GlobalConstants';
import HistoryItem from './HistoryItem/historyItem';
import './historyPage.css';

export default class historyPage extends Component {   

    constructor(props) {
        super(props);       
        this.state = { 
            historyData: null
        }
        this.onRenderHistoryItems = this.onRenderHistoryItems.bind(this);
    }

    componentDidMount() {
        this.onHistoryDataFetch();
    }

    // Method to fetch history information about the company (SpaceX)
    async onHistoryDataFetch() {
        try {
            const response = await fetch(GLOBAL_CONSTANTS.HISTORY_DATA_PATH, {
                method: GLOBAL_CONSTANTS.METHODS.GET,
                headers: GLOBAL_CONSTANTS.HEADERS,
            })
            const data = await response.json();
            this.setState({
                historyData: data
            })
        } catch (e) {
            console.log("Error while fetching history information...")
        }
    }

    // Method to render all the historical events that happened at SpaceX
    onRenderHistoryItems () {
        let resultView;
        if (this.state.historyData) {
            resultView = this.state.historyData.map((item,index) => {
                return <HistoryItem key={index} historyItemInfos={item}/>
            })
        }
        return resultView;
    }
    
    render() {
        return (
            <>
                <MiddlePanel>
                    <p className="title">All the historical events of SpaceX</p>
                    <div className="history-grid">
                        {this.onRenderHistoryItems()}
                    </div>
                </MiddlePanel>
            </>
        )
    };
}


