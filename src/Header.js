import React, { Component } from 'react'
import "./Header.css"
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import HouseIcon from '@material-ui/icons/House';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsTwoToneIcon from '@material-ui/icons/SubscriptionsTwoTone';
import StoreTwoToneIcon from '@material-ui/icons/StoreTwoTone';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"


function Header() {
    return (<div className="header">
                <div className="header__left">
                <img src="https://i.imgur.com/Udc7veD.jpg" alt=""/>
                <div className="header__input">
                    <YoutubeSearchedForIcon/>
                    <input placeholder='SEARCH RUMES' type="text"/>
                    </div>
                </div>
                <div className="header__center">
                    <div className="header__option
                    header__option--active">
                        <HouseIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                        <FlagIcon fontSize="large"/>
                        </div>
                        <div className="header__option">
                        <SubscriptionsTwoToneIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                        <StoreTwoToneIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SupervisorAccountRoundedIcon fontSize="large" color="blue"/> 
                    </div>
                </div>

                <div className="header__right">
                    <div className="header__info">
                        <Avatar />
                        <h4>NewUser</h4>
                    </div>
                    <div className="header__icon">
                        <IconButton>
                            <AddIcon color="blue"/>
                        </IconButton>
                        <IconButton>
                            <ForumIcon/>
                        </IconButton>
                        <IconButton>
                            <NotificationsActiveIcon/>
                        </IconButton>
                        <IconButton>
                            <ExpandMoreIcon/>
                        </IconButton>
                    </div>
                </div>
           </div>
    );
}

export default Header
