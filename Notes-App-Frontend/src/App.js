import React from 'react';
import './App.css';
import { NewNoteModal } from './components/NoteModal';
import { NotesTable } from './components/NotesTable';

const App = () => {
  return (
    <div className="App">
      <h3>Notes App</h3>
     
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <div style={{ textAlign: 'right' }}>
          <NewNoteModal />
        </div>
        <NotesTable />
        <form target="_blank">
    <button class="btn btn-primary" formaction="https://localhost:5001/notes">View JSON</button>
</form>
    
      </div>
    </div>
  );
}

export default App;
