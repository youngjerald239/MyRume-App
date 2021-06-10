import React from "react"
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"

function Sidebar() {
   return <div className="sidebar">
       <SidebarRow title='pages'/>
       <SidebarRow title='friends'/>
       <SidebarRow />
       <SidebarRow />
       <SidebarRow />
   </div>
        
}


export default Sidebar
