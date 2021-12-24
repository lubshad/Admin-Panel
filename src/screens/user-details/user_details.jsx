import React from 'react'
import { DefaultSpacerHorizontal } from '../../components/default_spacer/DefaultSpacer'
import UserItem from '../../components/user/user'
import "./user_detals.scss"


export default function UserDetails() {
    return (
        <div className='user-details'>
            <div className="top-section">
                <h2 className="title">Edit User</h2>
                <button className="create-button">Create</button>
            </div>
            <div className="middle-section">
                <div className="user-details">
                    <UserItem></UserItem>
                </div>
                <DefaultSpacerHorizontal></DefaultSpacerHorizontal>
                <div className="edit-section">Edit Section</div>
            </div>
        </div>
    )
}
