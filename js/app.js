import React from 'react'
import Landing from './landing'
import Search from './search'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

const App = () =>
  <HashRouter>
    <div className='app'>
      <Switch>
        <Route path='/search' component={Search} />
        <Route path='/' component={Landing} />
      </Switch>
    </div>
  </HashRouter>

render(React.createElement(App), document.getElementById('app'))
