import React from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import { fetchItem, fetchPosts, fetchComments  } from '../utils/api'
import Loading from './Loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class Post extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      post: null,
      loadingPost: true,
      comments: null,
      loadingComments: true,
      error: null
    }
  }
  componentDidMount() {
    const  { id } = queryString.parse(this.props.location.search)

    fetchItem(id)
      .then((post) => {
        this.setState({ post, loadingPost: false })

        console.log(post)
        return fetchComments(post.kids || [])
        
      })
      .then((comments) => this.setState({
        comments,
        loadingComments: false
      }))
      .catch(({ message }) => this.setState({
        error: message,
        loadingPost: false,
        loadingComments: false
      }))
  }
  render() {
    const { post, loadingPost, comments, loadingComments, error } = this.state

    if (error) {
      return <p className='center-text error'>{error}</p>
    }

    return (
      <React.Fragment>
        {loadingPost === true
          ? <Loading text='Fetching post' />
          : <React.Fragment>
              Word
            </React.Fragment>}
       
      </React.Fragment>
    )
  }
}
