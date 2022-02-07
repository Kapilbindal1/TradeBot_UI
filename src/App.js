import React from 'react';
import './App.css';
import HomePage from './homePage';
import UsersList from './usersView';


function App() {
  const refy = React.useRef(null);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
