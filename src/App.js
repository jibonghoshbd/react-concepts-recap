import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h1>Load Comments: {comments.length}</h1>
      {
        comments.map(comment => <Comment name={comment.name} email={comment.email} body={comment.body}></Comment>)
      }
    </div>

  )
}

function Comment(props) {
  return (
    <div className='comment'>
      <h1 className='comment-name'>Name: {props.name}</h1>
      <h3>Email: {props.email}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}
export default App;
