import * as React from 'react'
import {useApp} from './provider'
import {Post as Class} from './post-class'
import {Post as Ref} from './post-ref'
import {Post as Default} from './post-default'

function Posts({Post, currentPost, onPostClick}) {
  const {posts} = useApp()
  return (
    <div>
      {posts.map(p => (
        <button
          key={p.id}
          onClick={() => onPostClick(p)}
          style={
            p.id === currentPost?.id
              ? {color: 'white', background: 'black'}
              : null
          }
        >
          {p.title}
        </button>
      ))}
      <div>{currentPost ? <Post post={currentPost} /> : null}</div>
    </div>
  )
}

function App() {
  const {posts} = useApp()
  const [currentPost, setCurrentPost] = React.useState(posts[0])
  return (
    <div>
      <div>
        <strong>Try this with each example:</strong>
        <ol>
          <li>Click the heart</li>
          <li>Then change the post ASAP</li>
          <li>Observe the differences</li>
        </ol>
        <div>
          <a href="https://github.com/kentcdodds/react-and-stale-closures">
            Code on GitHub
          </a>
        </div>
      </div>
      <hr />
      <h1>The Old Default (Classes)</h1>
      <Posts
        Post={Class}
        currentPost={currentPost}
        onPostClick={p => setCurrentPost(p)}
      />
      <hr />
      <h1>The New Default (Hooks)</h1>
      <Posts
        Post={Default}
        currentPost={currentPost}
        onPostClick={p => setCurrentPost(p)}
      />
      <hr />
      <h1>Simulating The Old Default with Hooks</h1>
      <Posts
        Post={Ref}
        currentPost={currentPost}
        onPostClick={p => setCurrentPost(p)}
      />
    </div>
  )
}

export default App
