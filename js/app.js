import React from 'react'
import { render } from 'react-dom' 

const App = () => (
  <div className='app'>
    <div className='landing'>
      <h1>search app</h1>
      <input type="text" placeholder="Search"/>
      <a href="/">or Browse all</a>
    </div>
  </div>
)

render(React.createElement(App), document.getElementById('app'))
