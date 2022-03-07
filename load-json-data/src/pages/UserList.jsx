import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {userData} from "../userdata";
import "./pages.css";

function UserList() {
    //const navigate = useNavigate();
    return (
        <div>
            {userData.map((users) => (
                <div>
                <ListItem
                    name = {users.userFirstName + " " + users.userLastName}
                    username = {users.userUsername}
                    email = {users.userEmail}
                    id = {users.userID}
                />
                
                </div>
                //<div>{users.FirstName + " " + users.LastName}</div>
            ))}
        </div>
    )
}

function ListItem(props) {
    const [isShown, setIsShown] = useState(false);
    const name = props.name;
    const username = props.username;
    const email = props.email;
    const id = props.id;
    //const navigate = useNavigate();
    return (
        <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            // onClick={() => {
            //     navigate("/a");
            // }} 
            className = "listEntry">
            
            <Link class="nav-link" to={id} >
            {name}
                        </Link>

            
            {isShown && (
                <div className="popup">
                    <a className="popuptext">
                    {"username: " + username}
                    <br></br>
                    {"email: " + email}
                    </a>
                </div>
            )}
        </div>
    );
}


export default UserList