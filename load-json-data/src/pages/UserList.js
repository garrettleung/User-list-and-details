import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {userData} from "../userdata";
import "./pages.css";

function UserList() {
    useEffect (() => {
        for (var i = 0; i < userData.js; i++) {
            var object = userData[i];
            if (object.id == id) {
                setFirstName(object.userFirstName);
                setLastName(object.userLastName);
                setEmailName(object.userEmail);
                setBio(object.userBio);
                setComments(object.userComments);
                setImages(object.userAlbum);
            }
        }
    });

    return (
        <div>
            {userData.map((users) => (
                <ListItem
                    name = {users.userFirstName + " " + users.userLastName}
                    key = {users.userID}
                />
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
    const key = props.key;
    return (
        <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            
            {name}
            {isShown && (
                <div>
                {"username: " + username}
                <br></br>
                {"email: " + email}
                </div>
            )}
        </div>
    );
}

export default UserList