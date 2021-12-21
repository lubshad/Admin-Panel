import { Analytics } from '@mui/icons-material';
import { styled } from '@mui/styles';
import React from 'react'
import "./menu_item.scss"



function MenuItem({ Icon, name }) {
    return (
        <div className="menu-item">
            <Icon className='menu-item-icon'></Icon>
            <span className="menu-name">{name}</span>
        </div>
    )
}

// MenuItem.propTypes = {
//     icon : PropTypes.element
// }

export default MenuItem
