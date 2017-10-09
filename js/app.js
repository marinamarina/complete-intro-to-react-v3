import React from 'react'
import { render } from 'react-dom' 

const App = () => (
  <h1>Hey</h1>
)

render(React.createElement(App), document.getElementById('app'))
