import React, { Component } from 'react'
import Popup from './Popup'


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            whatToSearch: '',
            category: 'name',
            count: 0,
            pageNumber: 1

        }

    }

    checkSold(sold) {
        if (sold) {
            return 'sold'
        }
        else {
            return 'sold-not'
        }
    }

    search = (searchBarValue) => {
        const name = searchBarValue.target.name
        const value = searchBarValue.target.value
        this.setState({
            [name]: value,
            count: 0
        })
    }

    nextPage = () => {
        let pageNumber = this.state.pageNumber
        let count = this.state.count
        count += 10
        pageNumber += 1
        this.setState({
            count: count,
            pageNumber: pageNumber

        })
    }

    backPage = () => {
        let pageNumber = this.state.pageNumber
        let count = this.state.count

        if (pageNumber <= 0 || count <= 0) {
            this.setState({
                pageNumber: 1,
                count: 0
            })
            alert('You are on the first page already!')
        }
        else {
            count -= 10
            pageNumber--
        }
        this.setState({
            count: count,
            pageNumber: pageNumber
        })
    }

    popUp() {

    }

    render() {

        return (
            <div className="Clients">

                <div className="Search">
                    <input placeholder="Search" onChange={this.search} value={this.state.whatToSearch}></input>
                    <select>
                        <option value="name">Name</option>
                        <option value="country">Country</option>
                    </select>
                    <button onClick={this.backPage}>Back</button>
                    <button onClick={this.nextPage}>Next</button>
                    <span>Page Number: {this.state.pageNumber}</span>

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
                        {this.props.users.map(c =>
                            <tr>
                                <th>{c.name.split(' ', 2)[0]}</th>
                                <th>{c.name.split(' ', 2)[1]}</th>
                                <th>{c.country}</th>
                                <th> {c.firstContact.slice(0, 10)}</th>
                                <th>{c.emailType}</th>
                                <th>{this.checkSold(c.sold)} </th>
                                <th>{c.owner}</th>
                            </tr>
                        )}
                    </table>
                </div>

            </div >
        )
    }
}

export default Clients
