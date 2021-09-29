import React from 'react';
import './sidebar.css';

const sidebar = (props) => (
        <>
            <div className="sidebar" style={props.display ? void(0) : {display:'none'}}>
                {props.items.map((item,index) => {
                    return <div className="sidebar-item" onClick={() => props.onItemSelection(item)} key={index}>{item}</div>
                })}
            </div>
            <div className="backdrop" style={props.display ? void(0) : {display:'none'}} onClick={() => props.undisplaySidebar()}></div>
        </>
);

export default sidebar;
