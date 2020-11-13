import * as React from 'react'
import {useApp} from './provider'

function PostView({post, onLikeClick}) {
  const {authors, user, likes} = useApp()

  const author = authors.find(({id}) => id === post.authorId)
  const postLikes = likes.filter(({postId}) => postId === post.id)
  const userLiked = postLikes.some(l => l.ownerId === user.id)

  return (
    <article>
      <h1>{post.title}</h1>
      <div>by {author.name}</div>
      <p>{post.content}</p>
      <div>
        <button
          onClick={onLikeClick}
          title={userLiked ? 'Unlike this post' : 'Like this post'}
        >
          {userLiked ? '❤️' : '♡'} {postLikes.length}
        </button>
      </div>
    </article>
  )
}

export {PostView}
