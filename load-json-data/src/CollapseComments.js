import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {userData} from "./userdata";
import "./pages.css";
class CollapseComments extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        open:false,
    }
    this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return(
            <div>
                <div onClick={(e) => this.toggle(e)} className="header">
                    {this.props.head}
                </div>
                {userData.map((contentEntity, index) => (
                    <div key={index}>{contentEntity}</div>
                ))}
            </div>
        );

    }
}