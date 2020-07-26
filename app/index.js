import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Post from './components/Post'
import Posts from './components/Posts'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Posts type='top'/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)