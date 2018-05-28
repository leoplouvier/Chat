import React from 'react';
import './Message.css'

const Message = ({img,name,message,date}) => {
    return(
            <div className='columnRow'>
                <div className='avatarContainer'><img src={img} alt="avatar" className='avatar' /></div>
                <div className='txtMessage'>
                    <div className='name'>{name}</div>
                    <div className='messageContainer'>{message}</div>
                    <div className="time">{date}</div>
                </div>
            </div>
    )
}

export default Message