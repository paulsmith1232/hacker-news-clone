import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function PostMetaInfo ({ by, time, id, descendants}){
  return (
    <div>
      <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
      <span>on {time}</span>
      {typeof descendants === 'number' && (
        <span>
          with  <Link to={`/post?id=${id}`}>{descendants}</Link> comments
        </span>
      )}
    </div>
  )
}

PostMetaInfo.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  descendents: PropTypes.number
}