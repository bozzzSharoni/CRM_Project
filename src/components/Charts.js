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
            </div>

        )
    }
}

export default Charts