

import React from 'react'
import "./new_members.scss"
import {DefaultSpacerVertical} from "../../../../components/default_spacer/DefaultSpacer"
import NewMember from './new_member/new_member'

export default function NewMembers() {
    return (
        <div className='new-members'>
            <div className="new-members-container">
                <h3 className="title">New Members</h3>
                <NewMember></NewMember>
                <NewMember></NewMember>
                <NewMember></NewMember>
                <NewMember></NewMember>
            </div>
        </div>
    )
}
