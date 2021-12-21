import { Analytics, GraphicEq, Home } from '@mui/icons-material'
import React from 'react'
import MenuItem from './components/MenuItem'
import "./sidebar.scss"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-container">
                <div className="menu-section">
                    <caption className="menu-section-title">Dashboard</caption>
                    <MenuItem Icon = {Home} name ={"Home"}></MenuItem>
                    <MenuItem Icon = {Analytics} name ={"Analytics"}></MenuItem>
                    <MenuItem Icon = {GraphicEq} name ={"Sales"}></MenuItem>
                </div>
            </div>
        </div>
    )
}
