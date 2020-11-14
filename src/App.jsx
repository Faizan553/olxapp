import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './Top'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import AppRouter from './router'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <AppRouter />
   
   
    </div>
    
  
  );
}


export default App;
