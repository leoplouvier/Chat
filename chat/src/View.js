import React, { Component } from 'react';
import './Chat.css'
import Message from './Message.js'
import axios from 'axios'


class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AllData:[],
            NbMessages:0,
            AllMessages:[]
        }
         this.update=this.update.bind(this)

    }

    componentWillMount(){
        this.update()
    }

    update(){
        axios.get('http://localhost:51442/api/Messages')
            .then(response => this.setState({ AllData: response.data.messages, NbMessages: response.data.messages.length, AllMessages:[] }))

        for(var i=0;i<this.state.NbMessages;i++)
        {
            this.state.AllMessages.push(
                <Message key={i} img={this.state.AllData[i].avatarSrc} 
                    name={this.state.AllData[i].userName} message={this.state.AllData[i].content} date={this.state.AllData[i].date} />)
        }


    }

    render() {
        this.update()


        return (

            <div className='viewMessage' >
                    {this.state.AllMessages}
            </div>

        );
    }



}

export default View