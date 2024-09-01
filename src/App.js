import React from 'react';
import './App.css';
import Todo from './components/Todo';
import {Routes,Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;