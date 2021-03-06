import React, { Component } from 'react'
import Client from './Client'
import Popup from './Popup'


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            whatToSearch: '',
            category: 'name',
            count: 9,
            pageNumber: 1,
            updateUser: { showPopup: false, user: {} }

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

    changeCategpry = (event) => {
        this.setState({
            category: event.target.value

        })
    }

    search = (event) => {
        this.setState({
            whatToSearch: event.target.value
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

    popupUpdateUser = async (user) => {
        let update = { ...this.state.updateUser }
        update.showPopup = true
        update.user = user
        await this.setState({
            updateUser: update
        })
    }

    popupCancel = () => {
        let update = { ...this.state.updateUser }
        update.showPopup = false
        this.setState({
            updateUser: update
        })
    }



    render() {
        let clients = this.props.users.slice(this.state.count - 9, this.state.count)
        return (
            <div className="Clients">

                <div className="Search">
                {this.state.updateUser.showPopup ? <Popup updateClient={this.props.updateClient} cancel={this.popupCancel} user={this.state.updateUser.user} /> : null}
                    <input placeholder="Search" type='text' onChange={this.search} value={this.state.whatToSearch}></input>
                    <select className="browser-default col s2" type='select-one' onChange={this.changeCategpry}>
                        <option value="name">Name</option>
                        <option value="country">Country</option>
                        <option value="owner">Owner</option>
                    </select>
                    <button className="right hide-on-med-and-down waves-effect waves-light btn" onClick={this.nextPage}>Next</button>
                    <button className="right hide-on-med-and-down waves-effect waves-light btn" onClick={this.backPage}>Back</button>
                    <span className="left hide-on-med-and-down flow-text">Page Number: {this.state.pageNumber}</span>

                </div>
                <div className="Table">
                    <table className="centered">
                        <tr className="#1de9b6 teal accent-3" >
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Country</th>
                            <th>First Contact</th>
                            <th>Email</th>
                            <th>Sold</th>
                            <th>Owner</th>

                        </tr>
                        {clients.filter(l => l[this.state.category].toLowerCase().includes(this.state.whatToSearch) || l[this.state.category].includes(this.state.whatToSearch)).map(c => <Client checkSold={this.checkSold} updateUser={this.popupUpdateUser} client={c} />)}
                    </table>
                </div>
            </div >
        )
    }
}

export default Clients
