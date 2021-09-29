/* Container for the middlepanel that will contain the views used for this project */

import React from 'react';
import './middlePanel.css'

const middlePanel = (props) => (
        <div className="middlePanel">
                {props.children}
        </div>
);

export default middlePanel;
