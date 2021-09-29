import React from 'react';
import './filter.css';

const filter = (props) => (
        <button className="filter" style={props.selected ? {backgroundColor: "#4f1515"} : void(0)} onClick={() => props.onFilterClick(props.filterName)}>{props.filterName}</button>
);

export default filter;
