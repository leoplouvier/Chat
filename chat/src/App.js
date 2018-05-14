import React, { Component } from 'react';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      AllMessages:[],
      NbMessages:0
    }
    this.submitMessage=this.submitMessage.bind(this)
  }

  submitMessage(e){
    this.setState((prevState)=>({NbMessages:prevState.NbMessages+1}))
    this.state.AllMessages.push(<p key={this.state.NbMessages}>{this.refs.a.value}</p>)

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my Chat</h1>
        </header>
        
          <div className='SeeMessages'>
          {this.state.AllMessages}
          </div>
          <div className='postMessages'>
              <textarea ref='a'></textarea>
              <button onClick={this.submitMessage}>Envoyer</button>
          </div>
  
      </div>
    );
  }
}


export default App;
