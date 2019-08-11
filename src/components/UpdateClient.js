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
                this.props.updateClient('owner', this.state.ownerName, u.name)
            }

        }

    }
    sendEmail = () => {
        for (let u of this.props.users) {
            if (this.state.clientName === u.name) {
                this.props.updateClient('emailType', this.state.emailType, u.name)
            }
        }
    }
    
    declareSale = () => {
         for(let u of this.props.users){
             if(this.state.clientName === u.name){
                 this.props.updateClient('sold', true, u.name)
             }
         }
    }

    render() {
        return (
            <div className='left-align'>
                <h4 className='left-align'>UPDATE</h4>
                <div className='input-field inline'>
                <input type="text" list="data" placeholder="Client Name" onChange={this.clientNameVal} ></input>
                <datalist id="data">
                    {this.props.users.map(u => {
                        return <option value={u.name} />
                    })}
                </datalist>
                </div>
                <br></br>
                <h6>Transfer ownership to: </h6>
                <div className='input-field inline'>
                <select className="browser-default col s2" onChange={this.ownerNameVal}>
                    <option value={null}>Owner</option>
                    {this.props.users.map(u => {
                        return <option value={u.owner} >{u.owner}</option>
                    })}
                </select>
                </div>
                
                <button className="btn waves-effect waves-light" onClick={this.transferButton}>Trasnfer
                <i class="material-icons right">send</i>
                </button>
                <br></br>
                <h6>Send email: </h6>
                <div className='input-field inline'>
                <select className="browser-default col s2" onChange={this.emailTypeVal}>
                    <option value={null}>Email type</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>

                </select>
                </div>
                <button className='btn waves-effect waves-light' onClick={this.sendEmail}>Send
                <i class="material-icons right">send</i>
                </button>
                <br></br>
                <h6>Declare sale!</h6>
                <button className= "btn waves-effect waves-light"onClick={this.declareSale}>Declare</button>
            </div>
        )
    }
}

export default UpdatedClient