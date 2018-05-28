import React, { Component } from 'react';
import './Chat.css'
import Post from './Post';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "Léo",
      avatar: "https://i.pinimg.com/736x/e1/c3/71/e1c371ed831a3c6b5699cce1b3c6cf0f--kitten.jpg",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ userName: this.refs.txt.value, avatar: this.refs.select.value });
  }

  render() {
    return (
      <div className="App">
        <div className="header-container">
          <header className="header">
            <h1 className="appTitle">Best Chat EVER</h1>
            <form className='inputUser'>
              <input ref='txt' type='text' className="inputUserName" value={this.state.userName} onChange={this.handleChange} />
              <select ref='select' value={this.state.avatar} onChange={this.handleChange}>
                <option value="https://i.pinimg.com/736x/e1/c3/71/e1c371ed831a3c6b5699cce1b3c6cf0f--kitten.jpg">Avatar 1</option>
                <option value="https://avatarfiles.alphacoders.com/547/54795.jpg">Avatar 2</option>
                <option value="https://pbs.twimg.com/profile_images/552618565199597568/lMgcK3xR.jpeg">Avatar 3</option>
              </select>
            </form>
          </header>
        </div>
        <Post userName={this.state.userName} avatar={this.state.avatar} />
      </div>
    );
  }
}

export default Chat;