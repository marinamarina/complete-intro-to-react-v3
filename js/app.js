const MyTitle = function(props) {
  return React.createElement('div', null, 
    React.createElement('h1', {style: {color: props.color}}, props.title)
  )
}
const MyFirstComponent = function () {
  return React.createElement('div', null, 
    [React.createElement(MyTitle, {title: 'Helloo', key: 1, color: 'red' }),
    React.createElement(MyTitle, {title: 'Good bye', key: 2, color: 'orange' })]
  )
}

ReactDOM.render(
  React.createElement(MyFirstComponent), 
  document.getElementById('app')
)
