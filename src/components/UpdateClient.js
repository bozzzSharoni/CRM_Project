import React, { Component } from 'react'

class UpdatedClient extends Component {
    constructor() {
        super()
        this.state = {
            clientName: '',
            ownerName: '',
            emailType: ''
        }
    }

    clientNameVal = (name) => {
        let input = name.target.value
        this.setState({ clientName: input })

    }

    ownerNameVal = (owner) => {
        let input = owner.target.value
        this.setState({ ownerName: input })
    }

    emailTypeVal = (email) => {
        let input = email.target.value
        this.setState({ emailType: input })
    }

    transferButton = () => {
        for (let u of this.props.users) {
            if (this.state.clientName === u.name) {
                this.props.updateClient('owner', this.state.ownerName, u._id)
            }

        }

    }
    sendEmail = () => {
        for (let u of this.props.users) {
            if (this.state.clientName === u.name) {
                this.props.updateClient('emailType', this.state.emailType, u._id)
            }
        }
    }
    
    declareSale = () => {
         for(let u of this.props.users){
             if(this.state.clientName === u.name){
                 this.props.updateClient('sold', true, u._id)
             }
         }
    }

    render() {
        return (
            <div>
                <h2>UPDATE</h2>
                <span>Client: </span>
                <input type="text" list="data" placeholder="Client Name" onChange={this.clientNameVal}></input>
                <datalist id="data">
                    {this.props.users.map(u => {
                        return <option value={u.name} />
                    })}
                </datalist>
                <br></br>
                <span>Transfer ownership to: </span>
                <select onChange={this.ownerNameVal}>
                    <option value={null}>Owner</option>
                    {this.props.users.map(u => {
                        return <option value={u.owner} >{u.owner}</option>
                    })}
                </select>
                <button onClick={this.transferButton}>Trasnfer</button>
                <br></br>
                <span>Send email: </span>
                <select onChange={this.emailTypeVal}>
                    <option value={null}>Email type</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>

                </select>
                <button onClick={this.sendEmail}>Send</button>
                <br></br>
                <span>Declare sale!</span>
                <button onClick={this.declareSale}>Declare</button>
            </div>
        )
    }
}

export default UpdatedClient