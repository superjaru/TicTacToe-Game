import React , {Component} from 'react';
import './App.css';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import './FontawesomeIcons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {people : [],
      displayEach : 'NotDisplay',
    }
  }
  
  

render(){
  
  return (
    
    <div>
    <header>Tic Tac Toe Game <FontAwesomeIcon icon='gamepad' /></header>
    
    
    
    <FirstPage />
    </div>
  );
}
}

export default App;
