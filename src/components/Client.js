import React, { Component } from 'react'


class Client extends Component {
    updateClient = () => {
        this.props.updateUser(this.props.client)
    }
    render() {
        const client = this.props.client
        return (
            <tr className="#a7ffeb teal accent-1" onClick={this.updateClient}>
                <th>{client.name.split(' ', 2)[0]}</th>
                <th>{client.name.split(' ', 2)[1]}</th>
                <th>{client.country}</th>
                <th> {client.firstContact.slice(0, 10)}</th>
                <th>{client.emailType}</th>
                <th>{this.props.checkSold(client.sold)} </th>
                <th>{client.owner}</th>

            </tr>
        )
    }
}

export default Client