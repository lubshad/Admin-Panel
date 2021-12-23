import { Analytics, Feedback, GraphicEq, Home, Mail, Message, Money, Person, Report, Store } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { DefaultSpacerVertical } from '../default_spacer/DefaultSpacer'
import MenuItem from './components/MenuItem'
import styled from 'styled-components';
import "./sidebar.scss"

export default function Sidebar() {


    const StyledLink = styled(Link)`
        text-decoration: none;

        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
        }`;

        
    return (
        <div className='sidebar'>
            <div className="sidebar-container">
                <div className="menu-section">
                    <caption className="menu-section-title">Dashboard</caption>
                    <StyledLink to="/">
                        <MenuItem Icon={Home} name={"Home"}></MenuItem>
                    </StyledLink>
                    <MenuItem Icon={Analytics} name={"Analytics"}></MenuItem>
                    <MenuItem Icon={GraphicEq} name={"Sales"}></MenuItem>
                </div>
                <div className="menu-section">
                    <caption className="menu-section-title">Quick Menu</caption>
                    <StyledLink to="/users">
                        <MenuItem Icon={Person} name={"Users"}></MenuItem>
                    </StyledLink>
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
