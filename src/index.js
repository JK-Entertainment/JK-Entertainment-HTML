import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Impressum from './views/impressum'
import Home from './views/home'
import Team from './views/team'
import Preise from './views/preise'
import Info from './views/info'
import Kontakt from './views/kontakt'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Impressum} exact path="/impressum" />
        <Route component={Home} exact path="/" />
        <Route component={Team} exact path="/team" />
        <Route component={Preise} exact path="/preise" />
        <Route component={Info} exact path="/info" />
        <Route component={Kontakt} exact path="/kontakt" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
