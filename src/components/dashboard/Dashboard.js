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
    handleSubmit(e) {
        const ticket = {
            seat: this.state.seat,
            name: this.state.name,
            tickets: this.state.tickets
        }
        
        let tempTotal=this.state.total.slice()
        tempTotal.push(ticket)
        console.log(tempTotal)
        this.setState({
        total: tempTotal
        })
    }
/*axios.post('/api/tickets', this.state)
          .then((response)=>{
            console.log(response.data)
        }*/

    render() {
       let ticketItems= this.state.total.map((ticket,index)=>{
           return (<p key={index}>{`Reservation for ${ticket.name} ${ticket.tickets} ${ticket.seat}`}</p>)
       })
        
        return (
            <div>
                <h1>Get Your Tickets Now! </h1>

                What is your name? <input value={this.state.name} onChange={this.handleChange} name="name" />

                How Many tikets? {this.state.tickets} <input onClick={this.addToTickets} type="button" value="+" />

                <input onClick={this.subtractTickets} type="button" value="-" />

                What seats would you like?  <input value={this.state.seat} onChange={this.handleChange} name="seat" />
                <br />
                <button onClick={this.handleSubmit}>Submit</button>
                <br />
                <div>{ticketItems}</div>
            




            </div>
        )
    }
}
export default Dashboard;