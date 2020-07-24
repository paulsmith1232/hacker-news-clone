import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts, fetchItem } from '../utils/api'

export default class Post extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      posts: null,
      error: null
    }
  }

  isLoading() {
    return this.state.posts === null && this.state.error === null
  }
  render() {
    return (
      <React.Fragment>
        Testing
      </React.Fragment>
    )
  }
}
