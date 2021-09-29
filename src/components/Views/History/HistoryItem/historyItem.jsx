import React from 'react';
import './historyItem.css';

const historyItem = (props) => (
        <div className="history-card-container">
                <p className="history-item-date">{props.historyItemInfos.event_date_utc}</p>
                <p className="history-item-title">{props.historyItemInfos.title}</p>
                <p className="history-item-description">{props.historyItemInfos.details}</p>
                <a href={props.historyItemInfos.links.article} className="link"><b  className="row-name">Link: </b>{props.historyItemInfos.links.article}</a>
        </div>
);

export default historyItem;
