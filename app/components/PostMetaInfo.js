import React from 'react'
import PropTypes from 'prop-types'



export default function PostMetaInfo ({ by, time, id, descendants}){
  return (
    <div>
      <span>by {by}</span>
      <span>on {time}</span>
      {typeof descendants === 'number' && (
        <span>
          with {descendants} comments
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