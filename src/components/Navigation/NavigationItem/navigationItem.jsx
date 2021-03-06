/* Reusable component that contains a single navigation item */


import React from 'react';
import './navigationItem.css';

const navigationItem = (props) => (
        <div className="NavigationItem">
            <a  href={props.link}
                onClick={() => props.clicked()}
                id={props.children}
                className={props.active? "active" : null}>
                {props.children}
            </a>
        </div>
);

export default navigationItem;
