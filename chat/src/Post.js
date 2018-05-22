import React, { Component } from 'react';
import './Chat.css'
import axios from 'axios'

class Post extends Component {
    constructor(props) {
        super(props)
        this.submitMessage = this.submitMessage.bind(this)
        this.handleKeypress = this.handleKeypress.bind(this)
    }

    submitMessage(e) {


        if (this.refs.txtInput.value === '') {
            alert("Le message que vous essayez d'envoyer est vide")
        }
        else {

            axios.post('http://localhost:51442/api/Messages', {
                content: this.refs.txtInput.value,
                userName: "Léo",
                avatarSrc: "https://i.pinimg.com/736x/e1/c3/71/e1c371ed831a3c6b5699cce1b3c6cf0f--kitten.jpg"
               
            })
                .then(response => console.log('success')) 
                .catch(error =>console.log(error))
                

            this.refs.txtInput.value = ''
        }
    }

    handleKeypress(e) {
        const enterKeyCode = 13
        if (e.keyCode === enterKeyCode && e.shiftKey === false) {
            this.refs.txtInput.value = this.refs.txtInput.value.substring(0, this.refs.txtInput.value.length - 1)
            this.submitMessage()
        }

    }



    render() {

        return (

            <div className='postMessages' >
                <textarea ref='txtInput' className='inputText' placeholder="Ecrivez un message..." onKeyUp={this.handleKeypress}></textarea>
                <button type='submit' className='submitButton' onClick={this.submitMessage} >Envoyer</button>
                <div id="postResult"></div>
            </div>

        );
    }
}

export default Post