import React, { Component } from 'react';
class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            country: "",
            owner: ""
        }
    }
    nameVal = (name) => {
        let input = name.target.value
        this.setState({ name: input })
    }
    surNameVal = (name) => {
        let input = name.target.value
        this.setState({ surname: input })
    }
    countryVal = (country) => {
        let input = country.target.value
        this.setState({ country: input })
    }
    ownerVal = (owner) => {
        let input = owner.target.value
        this.setState({ owner: input })
    }
    addClient = () => {
        if (this.state.name !== "" && this.state.surname !== "" && this.state.country !== "" && this.state.owner !== "") {
            let client = {
                name: this.state.name + " " + this.state.surname,
                country: this.state.country,
                firstContact: new Date(),
                emailType: null,
                owner: this.state.owner
            }
            this.props.addClient(client)


        }
        else { alert("Please Fill-In The Blanks") }
    }
    render() {
        return (
            <div className='left-align'>
                <h4 className='align-center'>ADD CLIENT</h4>
                <div className='input-field inline'>
                <input type="text" onChange={this.nameVal} placeholder="First Name"/>
                <br />
                <input type="text" onChange={this.surNameVal} placeholder="Surname"/>
                <br />
                <input type="text" onChange={this.countryVal} placeholder="Country"/>
                <br />
                <input type="text" onChange={this.ownerVal} placeholder="Owner"/>
                <br />
                <button className='btn waves-effect waves-light' onClick={this.addClient}>Add New Client
                <i class="material-icons right">send</i>
                </button>
                </div>
            </div>
        )
    }
}
export default AddClient