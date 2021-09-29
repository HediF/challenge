import React from 'react';
import './middlePanel.css'

const middlePanel = (props) => (
        <div className="middlePanel">
                {props.children}
        </div>
);

export default middlePanel;
