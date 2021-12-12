import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderIcons from './HeaderIcons';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
    return (
        <div className="header">
           
            <div className="header__left">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="" />
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderIcons Icon={HomeIcon} title="Home"/>
                <HeaderIcons Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderIcons Icon={BusinessCenterIcon} title ="Jobs"/>
                <HeaderIcons Icon={ChatIcon} title="Messaging" />
                <HeaderIcons Icon={NotificationsIcon} title="Notifications" />
                <HeaderIcons avatar="https://www.indiewire.com/wp-content/uploads/2021/08/Robert-Pattinson-Batman.jpeg?w=780" title ="Me"/>
            </div>
        </div>
    )
}

export default Header
