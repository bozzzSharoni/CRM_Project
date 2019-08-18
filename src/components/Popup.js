import React, { Component } from 'react'


class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.user.name.split(' ', 2)[0],
            lastname: this.props.user.name.split(' ', 2)[1],
            country: this.props.user.country
        }
    }
    updateInfo = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value

        })
    }
    cancelButton = () => {
        this.props.cancel()
    }
    updateButton = () => {
        let user = { ...this.props.user }
        user.name = this.state.name + ' ' + this.state.lastname
        user.country = this.state.country
        if (this.state.name && this.state.lastname !== '') {
            this.props.updateClient('name', user.name, this.props.user.name)

        }
        if (this.state.country !== '') {
            this.props.updateClient('country', user.country, this.props.user.name)

        }

    }
    render() {
        return (
            <div id='popup' className='input'>
                <button className='x' onClick={this.cancelButton} >x</button>
                Name: <input name='name' type='text' value={this.state.name} onChange={this.updateInfo}></input>
                Surname: <input name='lastname' type='text' onChange={this.updateInfo} value={this.state.lastname}></input>
                Country: <input name='country' type='text' onChange={this.updateInfo} value={this.state.country}></input>
                <button onClick={this.updateButton}>Update</button>
            </div>
        )
    }
}

export default Popup