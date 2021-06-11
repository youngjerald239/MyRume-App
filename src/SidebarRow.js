import React from 'react'
import "./SidebarRow.css"
import {Avatar} from "@material-ui/core"

//pass a component as a prop
function SidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
