import React, { Component } from 'react';
import './App.css'
import Message from './Message.js'
import avatar from './avatar.jpeg'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AllMessages: [],
      NbMessages: 0
    }
    this.submitMessage = this.submitMessage.bind(this)
    this.handleKeypress = this.handleKeypress.bind(this)
  }

  submitMessage() {

    if (this.refs.txtInput.value === '') {
      alert("Le message que vous essayez d'envoyer est vide")
    }
    else {
      this.setState((prevState) => ({ NbMessages: prevState.NbMessages + 1 }))
      this.state.AllMessages.push(<Message key={this.state.NbMessages} Img={avatar} Name="Léo" Message={this.refs.txtInput.value} />)
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
      <div className="App">
        <div className="header-container">
          <header className="header">
            <h1 className="App-title">Best Chat EVER</h1>
          </header>
        </div>
        <div className='viewMessage'>
          {this.state.AllMessages}
        </div>
        <div className='postMessages'>
          <textarea ref='txtInput' className='inputText' placeholder="Ecrivez un message..." onKeyUp={this.handleKeypress}></textarea>
          <button type='submit' className='submitButton' onClick={this.submitMessage}>Envoyer</button>
        </div>
      </div>
    );
  }
}

export default App;