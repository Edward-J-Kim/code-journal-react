import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import { useState } from 'react';
import RenderEntry from './Components/RenderEntry';

function App() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [clicked, setClicked] = useState(false);

  function handleFormOnSubmit(e) {
    e.preventDefault();
    setClicked(true);
  }
  return (
    <div className="header-container">
      <Header />
      {clicked ? (
        <RenderEntry url={url} title={title} notes={notes} />
      ) : (
        <Form
          setTitle={setTitle}
          setUrl={setUrl}
          setNotes={setNotes}
          url={url}
          handleFormOnSubmit={handleFormOnSubmit}
        />
      )}
    </div>
  );
}

export default App;
