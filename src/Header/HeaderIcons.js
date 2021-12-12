import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderIncons.css"

function HeaderIcons({Icon,title,avatar}) {
    return (
        <div className="headerIncons">
            {Icon && <Icon className="headerIcons__icon"/>}
            {avatar && (
            <Avatar className="headerIcons__icon" src={avatar}/>)}
            <h3 className="headerIcons__title">{title}</h3>
        </div>
    )
}

export default HeaderIcons
