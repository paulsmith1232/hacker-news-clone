import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'

export default class Posts extends React.Component {
  state = {
    posts: null,
    error: null,
    loading: true,
  }
  componentDidMount() {
    this.handleFetch()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.handleFetch()
    }
  }
  handleFetch () {
    this.setState({
      posts: null,
      error: null,
      loading: true
    })

    fetchMainPosts('top')
      .then((posts) => this.setState({
        posts,
        loading: false,
        error: null
      }))
      .catch(({ message }) => this.setState({
        error: message,
        loading: false
      }))
  }
  render() {
    const { posts, error, loading } = this.state

    if (loading === true) {
      return <Loading />
    }

    if (error) {
      return <p className='center-text error'>{error}</p>
    }

    return (
      <React.Fragment>
       <pre>{JSON.stringify(posts, null, 2)}</pre>
       
      </React.Fragment>
    )
  }
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}

