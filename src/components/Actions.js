import React, { Component } from 'react'
import AddClient from './AddClient';
import UpdateClient from './UpdateClient'


class Actions extends Component {
    constructor() {
        super()

    }


    render() {
        return (

            <div className="Actions">
                <div className="Update">
                    <UpdateClient users={this.props.users} updateClient={this.props.updateClient}/>
                </div>
                <div className="Add">
                    <AddClient addClient={this.props.addClient} />
                </div>
            </div>
        )
    }
}

export default Actions
