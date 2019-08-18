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
  componentDidMount = async () => {
    let client = await axios.get('http://localhost:8080/clients')
    await this.setState({ clientList: client.data })
  }

  addClient = async (client) => {
    await axios.post('http://localhost:8080/actions', client)
    this.componentDidMount()
  }

  updateClient = async (key, value, name) => {
    let update = { [key]: value }
    await axios.put(`http://localhost:8080/actions/${name}`, update)
  }

  render() {
    const clientList = this.state.clientList
    const state = this.state
    return (
      <Router>
        <div className="App">
          <div class="navbar-fixed">
            <nav>
              <div class="nav-wrapper teal lighten-1">
                <a href="#" class="brand-logo">CRM</a>
                <div className="right hide-on-med-and-down">
                  <span className="waves-effect waves-light btn teal lighten-2 z-depth-2"><Link to="/clients" >Clients </Link></span>
                  <span className='waves-effect waves-light btn teal lighten-2 z-depth-2'><Link to="/actions"> Actions </Link></span>
                  <span className='waves-effect waves-light btn teal lighten-2 z-depth-2'><Link to="/analytics"> Analytics </Link></span>
                </div>
              </div>
            </nav>
          </div>

          <Route path="/clients" exact render={() => <Clients users={clientList} updateClient={this.updateClient} />} />
          <Route path="/actions" exact render={() => <Actions users={clientList} addClient={this.addClient} updateClient={this.updateClient} />} />
          <Route path="/analytics" exact render={() => <Analytics users={clientList} />} />

        </div>
      </Router>
    );
  }
}

export default App;
