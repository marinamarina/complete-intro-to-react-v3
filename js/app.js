import React from 'react'
import Landing from './landing'
import Search from './search'
import NotFound from './not_found'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () =>
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/search' component={Search} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>

render(React.createElement(App), document.getElementById('app'))
