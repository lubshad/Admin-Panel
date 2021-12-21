import React from 'react'
import "./topbar.scss"
import { Language, Notifications, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbar-container">
                <h2 className="app-logo">Admin Panel</h2>
                <div className="topbar-actions">
                    <div className="topbar-action-button">
                        <Notifications className="topbar-action-button-icon"></Notifications>
                        <span className="badge">1</span>
                    </div>
                    <div className="topbar-action-button">
                        <Language className="topbar-action-button-icon"></Language>
                        <span className="badge">1</span>
                    </div>
                    <div className="topbar-action-button">
                        <Settings className="topbar-action-button-icon"></Settings>
                        <span className="badge">1</span>
                    </div>
                    <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="profile-image" />
                </div>
            </div>
        </div>
    )
}
