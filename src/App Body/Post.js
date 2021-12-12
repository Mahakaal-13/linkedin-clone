import { ChatOutlined, SendOutlined, ShareOutlined, ThumbsUpDownOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'

function Post({name,description,msg,imgUrl}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>

            <div className="post__body">
                <p>{msg}</p>
            </div>

            <div className="post__button">
                <InputOptions Icon={ThumbsUpDownOutlined} title="Like" color="gray"/>
                <InputOptions Icon={ChatOutlined} title="Comment" color="gray"/>
                <InputOptions Icon={ShareOutlined} title="Share" color="gray"/>
                <InputOptions Icon={SendOutlined} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Post
