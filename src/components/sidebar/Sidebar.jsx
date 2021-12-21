import { Analytics, Feedback, GraphicEq, Home, Mail, Message, Money, Person, Report, Store } from '@mui/icons-material'
import React from 'react'
import { DefaultSpacerVertical } from '../default_spacer/DefaultSpacer'
import MenuItem from './components/MenuItem'
import "./sidebar.scss"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-container">
                <div className="menu-section">
                    <caption className="menu-section-title">Dashboard</caption>
                    <MenuItem Icon={Home} name={"Home"}></MenuItem>
                    <MenuItem Icon={Analytics} name={"Analytics"}></MenuItem>
                    <MenuItem Icon={GraphicEq} name={"Sales"}></MenuItem>
                </div>
                <div className="menu-section">
                    <caption className="menu-section-title">Quick Menu</caption>
                    <MenuItem Icon={Person} name={"Users"}></MenuItem>
                    <MenuItem Icon={Store} name={"Products"}></MenuItem>
                    <MenuItem Icon={Money} name={"Transactions"}></MenuItem>
                    <MenuItem Icon={Analytics} name={"Reports"}></MenuItem>
                </div>
                <div className="menu-section">
                    <caption className="menu-section-title">Notifications</caption>
                    <MenuItem Icon={Mail} name={"Mail"}></MenuItem>
                    <MenuItem Icon={Feedback} name={"Feedback"}></MenuItem>
                    <MenuItem Icon={Message} name={"Messages"}></MenuItem>
                </div>
                <div className="menu-section">
                    <caption className="menu-section-title">Staff</caption>
                    <MenuItem Icon={Mail} name={"Manage"}></MenuItem>
                    <MenuItem Icon={Analytics} name={"Analytics"}></MenuItem>
                    <MenuItem Icon={Report} name={"Report"}></MenuItem>
                </div>
                <DefaultSpacerVertical></DefaultSpacerVertical>
            </div>
        </div>
    )
}
