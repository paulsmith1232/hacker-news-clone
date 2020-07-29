import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Posts from './components/Posts'
import Nav from './components/Nav'

const Post = React.lazy(() => import('./components/Post'))

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' render={() => <Posts type='top'/>} />
          <Route path='/new' render={() => <Posts type='new'/>} />
          <Route path='/post' component={Post} />
        </div>
      </Router>      
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)