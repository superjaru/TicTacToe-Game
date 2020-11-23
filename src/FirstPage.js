import React ,{Component} from 'react';
import './App.css';
import SecondPage from './SecondPage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class FirstPage extends Component {
    constructor(props){
      super(props);
      this.state = {people1 : [],
        people2 : [],
        display1st : 'Display',
        display2nd : 'NotDisplay'
      }
    }
    
    clear = () => {
      document.querySelector('#player1').value = '';
      document.querySelector('#player2').value = '';
      this.setState({display1st : 'Display' , display2nd : 'NotDisplay'})
    }
    
    movePage = () => {
      
      if (document.querySelector('#player1').value !== '' && document.querySelector('#player2').value !== '' ){
        this.setState({people1 : document.querySelector('#player1').value, people2 : document.querySelector('#player2').value , display1st : 'NotDisplay', display2nd : 'Display'})
    }else{alert("Please Fill Players' Name!")}
  }
  
  render(){
    // console.log(this.state.people1);
    // console.log(typeof(this.state.people2));
    return (
      <div>
      <div className={this.state.display1st}>
      <h4>กรุณากรอกชื่อผู้เล่น</h4>
      <FontAwesomeIcon id='user1' icon='user' /><input className='input-name' id='player1' type='text' placeholder='ผู้เล่นคนที่ 1 (O)' autoFocus></input>
      <FontAwesomeIcon id='user2' icon='user' /><input className='input-name' id='player2' type='text' placeholder='ผู้เล่นคนที่ 2 (X)'></input>
      
      
      <button id='start-button' onClick={this.movePage}><span id='startbtn'>เริ่มเล่น</span></button>
      
      </div>
      <div className={this.state.display2nd}>
      
      
      <SecondPage people1={this.state.people1}  people2={this.state.people2} display1st={this.state.display1st} display2nd={this.state.display2nd} clear={this.clear}/>
      </div>
      </div>
    );
  }
  }



export default FirstPage