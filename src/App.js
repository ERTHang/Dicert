import React, {Component} from 'react';
import './App.css';

import Header from './Header'
import Main from './Page'

class App extends Component{


  render(){
    return(
      <div className = "App">
        <Header />  
        <Main />
      </div>
    );
  }
}

export default App;
