import React, { Component } from 'react';
import './Message.css'
import './avatar.jpeg'


class Message extends Component {

    render() {
        return (
            <div className='ColumnRow'>
                <div className='imgDiv'><img src={this.props.Img} alt='Avatar' className='img' /></div>
                <div className='txtMessage'>
                    <div className='Name'>{this.props.Name}</div>
                    <div className='Message'>{this.props.Message}</div>
                    <div className="Time">{new Date().toLocaleTimeString()}</div>
                </div>
            </div>

        )
    }
}

export default Message