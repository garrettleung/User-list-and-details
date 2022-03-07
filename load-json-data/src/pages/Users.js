import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {userData} from "./userdata";
import "./pages.css";

function UserPage() {
    const [id, setId] = useState(useParams().id);
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Email, setEmailName] = useState();
    const [Bio, setBio] = useState();
    const [comments, setComments] = useState([]);
    const [images, setImages] = useState([]);

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
            <div className="Name">{FirstName + " " + LastName}</div>
            <div className="Email">{Email}</div>
            <div className="Bio">{Bio}</div>
            <Collapse
                head = "Comments"
                content = {comments}
            />
            <Collapse
                head = "Album"
                content = {images}
            />
        </div>
    )
}

export default UserPage