import React, { Component } from 'react';
import axios from "axios";
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seat: '',
            name: '',
            tickets: 0,
            total: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    addToTickets = () => {
        this.setState({
            tickets:
                this.state.tickets + 1
        });
    }
    subtractTickets = () => {
        this.setState({
            tickets:
                this.state.tickets - 1
        });

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.name)
        console.log(e.target.value)
    }
    handleSubmit(e){
        axios.post('/api/tickets', this.state)
          .then((response)=>{
            console.log(response.data)
     })
        }

    render() {
        return (
            <div>
                <h1>Get Your Tickets Now! </h1>

                What is your name? <input value={this.state.name} onChange={this.handleChange} name="name" />

                How Many tikets? {this.state.tickets} <input onClick={this.addToTickets} type="button" value="+" />

                <input onClick={this.subtractTickets} type="button" value="-" />

                What seat would you like?(Row A-Z:Seat 1-10)  <input value={this.state.seat} onChange={this.handleChange} name="seat" />
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
                <br/>
                Your Tickets {this.state.total}

            

            </div>
        )
    }
}
export default Dashboard;