import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import Container from './Container';
import Button from './Button';



class Dashboard extends React.Component{
    render(){//return a view ie virtual DOM
        return(
                <div className="wrapper-container">
                	<NavLink to="/tasklist"><Container /> </NavLink>
                    <NavLink to ="/tasklist"><Container /></NavLink>
                    <NavLink to ="/tasklist"><Container /></NavLink>
                    <NavLink to ="/tasklist"><Container /></NavLink>

			      	<Button />
			      </div>
        
        )
    }
}

export default Dashboard;