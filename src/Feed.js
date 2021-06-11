import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            <Post
            profilePic="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/105337597_3183482085064983_2756361960060597087_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0bIWgUgfEoQAX8Of2lO&_nc_ht=scontent-ort2-2.xx&oh=07f01c97dc0a7187bc4b08adf5faef2b&oe=60C7788D"
            message="Phew! Eveything working as intended!"
            timestamp="this is a timestamp"
            username="Jerald Young"
            image="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"
            />
            <Post
            profilePic="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/105337597_3183482085064983_2756361960060597087_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0bIWgUgfEoQAX8Of2lO&_nc_ht=scontent-ort2-2.xx&oh=07f01c97dc0a7187bc4b08adf5faef2b&oe=60C7788D"
            message="Yup, Still works!"
            timestamp="this is a timestamp"
            username="Jerald Young"
            image=""
            />
            <Post/>
            <Post/>
            
        </div>
    )
}

export default Feed
