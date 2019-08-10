import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Clients from './components/Clients'
import Actions from './components/Actions'
import Analytics from './components/Analytics'


class App extends Component {
  constructor() {
    super()
    this.state = {
      clientList: []
    }
  }
  componentWillMount = async () => {
    let client = await axios.get('http://localhost:8080/clients')
    await this.setState({ clientList: client.data })
  }

  addClient = async (client) => {
    await axios.post('http://localhost:8080/actions', client)
    this.componentWillMount()
  }

  updateClient = async (key, value, id) => {
    let update = { [key]: value }
    await axios.put(`http://localhost:8080/actions/${id}`, update)
  }   

  render() {
    const clientList = this.state.clientList
    const state = this.state
    return (
      <Router>
        <div className="App">
          <div id="links">
            
            <span><Link to="/clients">Clients</Link></span>
            <span><Link to="/actions">Actions</Link></span>
            <span><Link to="/analytics">Analytics</Link></span>
          </div>
          
          <Route path="/clients" exact render={() => <Clients users={clientList} />} />
          <Route path="/actions" exact render={() => <Actions users={clientList} addClient={this.addClient} updateClient={this.updateClient} />} />
          <Route path="/analytics" exact render={() => <Analytics users={clientList} />} />
          
        </div>
      </Router>
    );
  }
}

export default App;
