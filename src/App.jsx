import { useState } from 'react'
import CommentBox from './containers/CommentBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello team : </h1>
      <CommentBox/>
    </>
  )
}

export default App
