import React from 'react'
import PropTypes from 'prop-types'
import PostMetaInfo from './PostMetaInfo'

export default function PostList ({ posts }) {
  
  return(
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id} className='post'>
            {post.title}
            <PostMetaInfo
              by={post.by}
              time={post.time}
              id={post.id}
              descendants={post.descendants}
            />
          </li>           
        )
      })}
    </ul>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}