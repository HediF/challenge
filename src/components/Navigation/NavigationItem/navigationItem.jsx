import React from 'react';
import './navigationItem.css';

const navigationItem = (props) => (
        <div className="NavigationItem">
            <a  href={props.link}
                onClick={() => props.clicked()}
                className={props.active? "active" : null}>
                {props.children}
            </a>
        </div>
);

export default navigationItem;
