import React, { Component } from 'react';
import './Message.css'
import './avatar.jpeg'


class Message extends Component {

    render() {
        return (
            <div className='columnRow'>
                <div className='avatarContainer'><img src={this.props.Img} alt='Avatar' className='avatar' /></div>
                <div className='txtMessage'>
                    <div className='name'>{this.props.Name}</div>
                    <div className='messageContainer'>{this.props.Message}</div>
                    <div className="time">{new Date().toLocaleTimeString()}</div>
                </div>
            </div>

        )
    }
}

export default Message