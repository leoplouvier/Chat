import React, { Component } from 'react';
import './Chat.css'
import axios from 'axios'
import Message from './Message.js'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AllData: [],
            NbMessages: 0,
            AllMessages: []
        }
        this.submitMessage = this.submitMessage.bind(this)
        this.handleKeypress = this.handleKeypress.bind(this)
        this.update = this.update.bind(this)
    }

    componentWillMount() {
        this.update()
    }
    componentWillUpdate() {
        this.update()
    }

    submitMessage(e) {
        if (this.refs.txtInput.value === '') {
            alert("Le message que vous essayez d'envoyer est vide")
        }
        else {
            axios.post('http://localhost:56090/api/Messages', {
                content: this.refs.txtInput.value,
                userName: this.props.userName,
                avatarSrc: this.props.avatar
            })
                .then(response => console.log('success'))
                .catch(error => console.log(error))

            this.refs.txtInput.value = ''
        }
        this.update()
    }

    handleKeypress(e) {
        const enterKeyCode = 13
        if (e.keyCode === enterKeyCode && e.shiftKey === false) {
            this.refs.txtInput.value = this.refs.txtInput.value.substring(0, this.refs.txtInput.value.length - 1)
            this.submitMessage()
        }
    }

    async update() {
        var result = await axios.get('http://localhost:56090/api/Messages')
        this.setState({ AllMessages: result.data.messages })
    }

    render() {
        return (
            <div>
                <div className='viewMessage' >
                    {this.state.AllMessages.map(m =>
                        <div key={m.id}>
                            <Message img={m.avatarSrc} name={m.userName} message={m.content} date={m.date} />
                            <div className="spaceBetween"></div>
                        </div>)}
                </div>
                <div className='postMessages' >
                    <textarea ref='txtInput' className='inputText' placeholder="Ecrivez un message..." onKeyUp={this.handleKeypress}></textarea>
                    <button type='submit' className='submitButton' onClick={this.submitMessage} >Envoyer</button>
                    <div id="postResult"></div>
                </div>
            </div>
        );
    }
}

export default Post