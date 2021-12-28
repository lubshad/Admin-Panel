import React from 'react'
import { DefaultSpacerHorizontal, DefaultSpacerVertical } from '../../components/default_spacer/DefaultSpacer'
import IconWithText from '../../components/icon_with_text/icon_with_text'
import UserItem from '../../components/user/user'
import { CalendarViewDayRounded, DateRangeOutlined, LocationOn, Mail, Person, Phone, Upload } from '@mui/icons-material'

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
                    <DefaultSpacerVertical></DefaultSpacerVertical>
                    <UserItem></UserItem>
                    <DefaultSpacerVertical></DefaultSpacerVertical>
                    <span className='section-title'>Account Details</span>
                    <IconWithText icon={Person} text={"Lubshad"}></IconWithText>
                    <IconWithText icon={DateRangeOutlined} text={"13-03-1995"}></IconWithText>
                    <span className='section-title'>Contact Details</span>
                    <IconWithText icon={Phone} text={"+91 9744714697"}></IconWithText>
                    <IconWithText icon={Mail} text={"lubshad4u4@gmail.com"}></IconWithText>
                    <IconWithText icon={LocationOn} text={"Westhills | Calicut"}></IconWithText>
                </div>
                <DefaultSpacerHorizontal></DefaultSpacerHorizontal>
                <div className="edit-section">
                    <h2>Edit</h2>
                    <form className="edit-section-container">
                        <div className="section-left">
                            <label >Username</label>
                            <input type="text" placeholder='Username' />
                            <label >Full Name</label>
                            <input type="text" placeholder='Full Name' />
                            <label >Email</label>
                            <input type="email" placeholder='Email' />
                            <label >Phone</label>
                            <input type="phone" placeholder="Phone" />
                            <label >Address</label>
                            <input type="text" placeholder='Address' />
                        </div>
                        <div className="section-right">
                            <div className="section-right-container">
                                <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className='profile-pick' />
                                <Upload></Upload>
                                <button className="update-button">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
