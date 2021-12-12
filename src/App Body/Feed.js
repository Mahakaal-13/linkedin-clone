import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"
import ImageIcon from "@mui/icons-material/Image"
import InputOptions from './InputOptions'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'
import { db } from '../services/firebase'
import { saveToDatabase } from '../services/firebase'
import { timeStamp } from '../services/firebase'


function Feed() {

    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("date","desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))
        ));
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        saveToDatabase('posts',{
            name: "Debangshu mukherjee",
            description: "React-Leaner",
            msg: input,
            imgUrl: "",
            date: timeStamp() 
        })
        setInput("")
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">btn</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>

            {posts.map(({id , data: { name ,description ,msg, imgUrl}}) => (
                <Post 
                key={id}
                name={name}
                description={description}
                msg ={msg}
                imgUrl={imgUrl}

                />
            ))}
            

        </div>
    )
}

export default Feed
