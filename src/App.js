import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

function App() {




  return (
    <div className="background-image">
    <div  className="App">
      <nav class="navbar navbar-light bg-light justify-content-center">
       <h1 className="navbar-brand">Want To Free Sex With Me</h1>
  
    </nav>
      <div className="style-bg">
      <h2 className="p-4 text-white">Enter Information And Verify Email To Contact</h2>
      <Tooltip title="My Detail Here" placement="right">
            <Button className="bg-success text-white button-style">Click Here</Button>
          </Tooltip>
      </div>
    </div>
    </div>
  );
}

export default App;
