import React, { Component } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line
} from 'recharts'

class Charts extends Component {
    constructor() {
        super()
        this.state = {
            search: 'country'
        }
    }

    topEmployees() {
        let arr = []
        let hottest = {}
        let owners = this.props.users.map(u => u.owner)
        for (let o of owners) {
            let num = this.props.users.filter(u => u.owner === o && u.sold === true)

            hottest[o] = { name: o, sold: num.length }

        }

        for (let i in hottest) {
            arr.push(hottest[i])
        }
        arr.sort(function (a, b) { return b.sold - a.sold })

        return arr.splice(0, 3)

    }

    salesByCountry = () => {
        let countries = []
        let hottestCountries = {}
        let clients = this.props.users.map(c => c.country)
        for (let c of clients) {
            let num = this.props.users.filter(d => d.country === c && d.sold === true)
            if (c !== undefined && c !== null) {
                hottestCountries[c] = { name: c, sold: num.length }
            }
        }

        for (let i in hottestCountries) {
            countries.push(hottestCountries[i])
        }

        return countries
    }




    render() {
        return (
            <div>
                <h3> Top Employees </h3>
                <BarChart
                    width={500}
                    height={300}
                    data={this.topEmployees()}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sold" fill="#82ca9d" />
                </BarChart>
            
                <h3>Sales By Country</h3>
                <BarChart
                    width={1000}
                    height={300}
                    data={this.salesByCountry()}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sold" fill="red" />
                </BarChart>
            </div>

        )
    }
}

export default Charts