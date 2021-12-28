import React from 'react'
import "./user.scss"

export default function User() {
    return (
        <div className='user'>
            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="profile-pick" />
            <div className="name-and-designation">
                <h3 className="name">Lubshad</h3>
                <span className="designation">Flutter Developer</span>
            </div>
        </div>
    )
}
