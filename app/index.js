import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Loading from './components/Loading'

const Posts = React.lazy(() => import('./components/Posts'))
const Post = React.lazy(() => import('./components/Post'))

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/' render={() => <Posts type='top'/>} />
              <Route path='/new' render={() => <Posts type='new'/>} />
              <Route path='/post' component={Post} />
            </Switch>       
          </React.Suspense>   
        </div>
      </Router>      
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)