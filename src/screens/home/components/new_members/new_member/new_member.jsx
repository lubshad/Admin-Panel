import React from 'react'
import "./new_member.scss"
import {Visibility} from "@mui/icons-material"


export default function NewMember() {
    return (
        <div className="new-member">
            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="profile-pick" />
            <div className="name-and-designation">
                <h4 className="user">Anna Keller</h4>
                <span className="designation">Software Engineer</span>
            </div>
            <button className="display-button">
                <Visibility></Visibility>
                <span>Display</span>
            </button>
        </div>
    )
}
