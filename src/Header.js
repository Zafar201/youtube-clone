import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import './Header.css' 
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
               <MenuIcon/>
               <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube"/>
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search"/>
                <SearchIcon className="hader__inputButton"/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon"/>
                <NotificationIcon className="header__icon"/>
                <Avatar src="https://avatars3.githubusercontent.com/u/68781759?s=60&v=4"/>
            </div>
        </div>
    )
}

export default Header
