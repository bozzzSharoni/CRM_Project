import React, { Component } from 'react'

class Popup extends Component {
    constructor() {
        super()

    }

    render() {
        return <div>
          <span>Name: </span>
          <input></input>
          <span>Surname: </span>
          <input></input>
          <span>Country: </span>
          <input></input>
        </div>
    }
}



export default Popup