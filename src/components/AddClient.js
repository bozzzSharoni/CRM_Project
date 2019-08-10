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
            <div>
                <h2>ADD CLIENT</h2>
                First Name <input type="text" onChange={this.nameVal} />
                <br />
                Surname <input type="text" onChange={this.surNameVal} />
                <br />
                Country <input type="text" onChange={this.countryVal} />
                <br />
                Owner <input type="text" onChange={this.ownerVal} />
                <br />
                <button onClick={this.addClient}>Add New Client</button>
            </div>
        )
    }
}
export default AddClient