import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import {userData} from "../userdata";
//import {CollapseComments} from "./CollapseComments.js";
import "./pages.css";

class CollapsePosts extends React.Component {
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
                    <div className="header">
                        <div onClick={(e) => this.toggle(e)} className = "post">
                            {this.props.head}
                        </div>

                        {this.state.open ? (userData[0].userComments[this.props.index].map((comment, key) => (
                        <div className="comment">
                        <Comment
                            comment = {comment}
                            key = {key}
                        /> 
                        </div>
                        ))): null}
                        
                    </div>
                    
                </div>
            );
    
        }
    }


    function Comment(props) {
        const comment = props.comment;
        const key = props.key;
        return (
            <div className = "comment">
                {comment}
            </div>
        );
    }

function Users(props) {
    const FirstName = userData[0].userFirstName;
    const LastName = userData[0].userLastName;
    const Email = userData[0].userEmail;
    const Bio = userData[0].userBio;
    const posts = userData[0].userPosts;
    const images = userData[0].userAlbums;
    // const [FirstName, setFirstName] = useState();
    // const [LastName, setLastName] = useState();
    // const [Email, setEmailName] = useState();
    // const [Bio, setBio] = useState();
    // const [comments, setComments] = useState([]);
    // const [images, setImages] = useState([]);

    // useEffect (() => {
    //     for (var i = 0; i < userData.js; i++) {
    //         var object = userData[i];
    //         if (object.id == 0) {
    //             setFirstName(object.userFirstName);
    //             setLastName(object.userLastName);
    //             setEmailName(object.userEmail);
    //             setBio(object.userBio);
    //             setComments(object.userComments);
    //             setImages(object.userAlbum);
    //         }
    //     }
    // });
    

    return (
        <div>
            <div className="Name">{FirstName + " " + LastName}</div>
            <div className="Email">{Email}</div>
            <div className="Bio">{Bio}</div>
            {(userData[0].userPosts.map((posts, index) => (
                        <div>
                        <CollapsePosts
                            content = {userData[0].userComments}
                            index = {index}
                            head = {posts}
                        />
                        </div>
                )
            ))}
            {/* <CollapseComments
                head = "Album"
                content = {images}
            /> */}
        </div>
    )
}

export default Users