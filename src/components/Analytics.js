import React, { Component } from 'react'
import Charts from './Charts'

class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    }
    newClients = () => {
        let count = 0
        for (let u of this.props.users) {
            if (u.firstContact.slice(6, 7) - 1 === new Date().getMonth() && parseInt(u.firstContact.slice(0, 4)) === new Date().getFullYear()) {

                count++
            }
        }
        return count
    }

    emailsSent = () => {
        let count = 0
        for (let u of this.props.users) {
            if (u.emailType !== null) {
                count++
            }
        }
        return count
    }

    outstandingClients = () => {
        let count = 0
        for (let u of this.props.users) {
            if (u.sold === false) {
                count++
            }
        }
        return count
    }

    hottestCountry = () => {
        let countries = [...new Set(this.props.users.map(c => c.country))]
        let sold = 0
        let country = null
        for (let co of countries) {
            let sold2 = 0
            this.props.users.map(u => u.country === co ?
                u.sold ? sold2++ : null
                : null)
            if (sold2 > sold) {
                sold = sold2
                country = co
            }
        }
        return country
    }


    render() {
        return (
            <div className="Analytics">
                <div>
                    <h2>{this.newClients()}</h2>
                    <span>New {this.state.months[new Date().getMonth()]} Clients</span>
                    <h2>{this.emailsSent()}</h2>
                    <span>Emails Sent</span>
                    <h2>{this.outstandingClients()}</h2>
                    <span>Outstanding Clients</span>
                    <h2>{this.hottestCountry()}</h2>
                    <span>Hottest Country</span>
                </div>
                <div>
                 <Charts users={this.props.users}/>
                </div>
            </div>
        )
    }
}

export default Analytics
