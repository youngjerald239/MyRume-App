import React, {useState} from 'react'
import "./MessageSender.css"
import {Avatar} from "@material-ui/core"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import {useStateValue} from "./StateProvider"
import db from "./firebase"
import firebase from "firebase"


function MessageSender() {
    const [{user}, dispatch] = useStateValue()
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] =  useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // Some db info
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                    <Avatar src ={user.photoURL}/>
                    <form>
                        <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input" 
                        type="text" 
                        placeholder={`Thoughts from your Rume, ${user.displayName}?`}/>
                        <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (optional)" />
                        <button onClick={handleSubmit} type="submit">
                            Hidden submit
                        </button>
                    </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "rgb(152,45,75)"}}/>
                    <h3>Live Video</h3>
                    </div>
                    <div className="messageSender__option">
                        <PhotoLibraryIcon style={{color: "purple"}}/>
                        <h3>Photo/Video</h3>
                        </div>

                        <div className="messageSender__option">
                        <InsertEmoticonIcon style={{color: "red"}}/>
                        <h3>Feeling/Activity</h3>
                        </div>
                    </div>
                </div>
            
        
    )
}

export default MessageSender
