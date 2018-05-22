import React, { Component } from 'react';
import './Chat.css'
import Post from './Post';
import View from './View';

class Chat extends Component {

  render() {

    console.log()

    return (
      <div className="App">
        <div className="header-container">
          <header className="header">
            <h1 className="App-title">Best Chat EVER</h1>
          </header>
        </div>
        <div className='viewMessage' >  
         <View/> 
        </div>
        <Post />
      </div>
    );
  }
}

export default Chat;