import React from 'react'
import "./icon_with_text.scss"

export default function IconWithText({icon, text}) {

    const Icon = icon

    return (
        <div className='icon-with-text'>
            <Icon className='icon'></Icon>
            <span className="text">{text}</span>
        </div>
    )
}
