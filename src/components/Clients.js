import React, { Component } from 'react'
import Popup from './Popup'


class Clients extends Component {
    constructor() {
        super()


    }

    checkSold(sold) {
        if (sold) {
            return 'sold'
        }
        else {
            return 'sold-not'
        }
    }

    popUp() {

    }

    render() {

        return (
            <div className="Clients">
                <div className="Search">
                    <input placeholder="Search"></input>
                    <select>
                        <option value="name">Name</option>
                        <option value="country">Country</option>
                    </select>
                </div>
                <div className="Table">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Country</th>
                            <th>First Contact</th>
                            <th>Email</th>
                            <th>Sold</th>
                            <th>Owner</th>

                        </tr>
                        {this.props.users.map(u => {
                            return <tr>
                                <th>{u.name.split(' ', 2)[0]}</th>
                                <th>{u.name.split(' ', 2)[1]}</th>
                                <th>{u.country}</th>
                                <th> {u.firstContact.slice(0, 10)}</th>
                                <th>{u.emailType}</th>
                                <th>{this.checkSold(u.sold)} </th>
                                <th>{u.owner}</th>
                            </tr>
                        })}
                    </table>
                </div>

            </div>
        )
    }
}

export default Clients
