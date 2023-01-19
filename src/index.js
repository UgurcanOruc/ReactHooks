import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ]);
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    setNotes(notes.filter(notes => notes.title !== title));
  }

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>X</button>
        </div>
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add Note</button>
      </form>
    </div>
  );
}

// const App = (props) => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState(props.text);

//   const increment = () => {
//     setCount(count + 1);
//   }

//   const decrement = () => {
//     setCount(count - 1);
//   }

//   const reset = () => {
//     setCount(props.count);
//   }

//   return (
//     <div>
//       <p>The Current {text || 'count'} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// }

// App.defaultProps = {
//   count: 0,
//   text: ''
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NoteApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
