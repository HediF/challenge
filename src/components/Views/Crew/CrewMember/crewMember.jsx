import React from 'react';
import './crewMember.css';

const crewMember = (props) => (
        <div className="member-card-container">
                <div className="header-container">
                        <img src={props.memberInformation.image} className="avatar" alt="logo"/>
                        <div className="member-infos-container">
                                <div><b  className="row-name">Name: </b> {props.memberInformation.name}</div>
                                <div><b  className="row-name">Agency: </b> {props.memberInformation.agency}</div>
                                <div><b  className="row-name">Status: </b> {props.memberInformation.status}</div>
                                <a href={props.memberInformation.wikipedia}><b  className="row-name">Wikipedia: </b>Click here</a>
                        </div>
                </div>
        </div>
);

export default crewMember;
