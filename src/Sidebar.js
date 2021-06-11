
import React from "react"
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutline"
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import {useStateValue} from "./StateProvider"

function Sidebar() {
    const [{user}, dispatch] = useStateValue()

   return (
   <div className="sidebar">
       <SidebarRow src={user.photoURL} title={user.displayName}/>
       <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
       <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
       <SidebarRow Icon={PeopleOutlinedIcon} title="Friends"/>
       <SidebarRow Icon={ChatOutlinedIcon} title="Messenger"/>
       <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
       <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
       <SidebarRow Icon={ExpandMoreRoundedIcon} title="Marketplace"/>
   </div>
   );      
}


export default Sidebar
