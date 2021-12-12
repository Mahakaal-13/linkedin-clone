import { Avatar } from '@mui/material'
import React from 'react'
import "./SideBar.css"

function SideBar() {

    let recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>   
        </div>
    )


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.dccomics.com/sites/default/files/field/image/BatmanLogo_blog_5f3eca9ca60ab4.01819021.jpg" alt="" />
                <Avatar className="sidebar__avatar" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/11/Batman-First-Suit-Vigilante-Featured.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5" />
                <h2>BatMan</h2>
                <h4>darkKnight@wayne.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed You</p>
                    <p className="sidebar__statNumber">
                        2,568
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Posts</p>
                    <p className="sidebar__statNumber">
                        5,455
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                
                {recentItem('react.js')}
                {recentItem('bruceWayne')}
                {recentItem('joker')}
                {recentItem('scarecrow')}
                {recentItem('harleyQuin')}
            </div>
        </div>
    )
}

export default SideBar
