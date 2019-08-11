import React, { Component } from 'react'
import Popup from './Popup'


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            whatToSearch: '',
            category: 'name',
            count: 9,
            pageNumber: 1

        }

    }
    

    checkSold(sold) {
        if (sold) {
            return <i class="material-icons">check</i>
        }
        else {
            return <i class="material-icons">clear</i>
        }
    }

    search = (searchBarValue) => {
        const name = searchBarValue.target.name
        const value = searchBarValue.target.value
        this.setState({
            [name]: value,
            count: 9
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

        if (pageNumber <= 0 || count <= 9) {
            this.setState({
                pageNumber: 1,
                count: 9
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
        let clients = this.props.users.slice(this.state.count - 9, this.state.count)
        console.log(clients)
        return (
            <div className="Clients">

                <div className="Search">
                    <input placeholder="Search" onChange={this.search} value={this.state.whatToSearch}></input>
                    <select className='waves-effect waves-teal btn-flat btn-small'>
                        <option value="name">Name</option>
                        <option value="country">Country</option>
                    </select>
                    <button className="right hide-on-med-and-down waves-effect waves-light btn" onClick={this.backPage}>Back</button>
                    <button className="right hide-on-med-and-down waves-effect waves-light btn" onClick={this.nextPage}>Next</button>
                    <span className="left hide-on-med-and-down flow-text">Page Number: {this.state.pageNumber}</span>

                </div>
                <div className="Table">
                    <table className="centered">
                        <tr className="#1de9b6 teal accent-3">
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Country</th>
                            <th>First Contact</th>
                            <th>Email</th>
                            <th>Sold</th>
                            <th>Owner</th>

                        </tr>
                        
                        {clients.map(c =>
                            <tr className="#a7ffeb teal accent-1">
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
