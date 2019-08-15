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
    update = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value

        })
    }
    cancel = () => {
        this.props.cancel()
    }
    popUpdate = () => {
        let user = { ...this.props.user }
        user.name = this.state.name + ' ' + this.state.lastname
        user.country = this.state.country
        this.props.updateClient(user, this.props.user.name)
    }
    render() {
        return (
            <div id='popup' className='input'>
                <button className='x' onClick={this.cancel} >x</button>
                name: <input name='name' type='text' value={this.state.name} onChange={this.update}></input>
                last name: <input name='lastname' type='text' onChange={this.update} value={this.state.lastname}></input>
                country: <input name='country' type='text' onChange={this.update} value={this.state.country}></input>
                <button onClick={this.popUpdate}>update</button>   
            </div>
        )
    }
}

export default Popup