import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Post from './components/Post'

class App extends React.Component {
  render() {
    return (
      <div>
        <Post />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)