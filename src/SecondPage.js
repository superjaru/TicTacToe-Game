import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CheckBingo , CheckTies} from './CheckBingo';


function playAgain2(state,props){
  return {n1 : null, n2 : null, n3 : null, n4 : null, n5 : null, n6 : null, n7 : null, n8 : null, n9 : null, turn : 'o', bingo : false , ties: false} 
}


class SecondPage extends Component {
    constructor(props){
      super(props);
      this.state = {n1 : null, n2 : null, n3 : null, n4 : null, n5 : null, n6 : null, n7 : null, n8 : null, n9 : null,
        turn : 'o',
        XContent : <FontAwesomeIcon id='xxx' icon='times' />,
        OContent : <FontAwesomeIcon id='circle' icon='circle' />,
        oScore : 0,
        xScore : 0 ,
        bingo : false,
        ties : false,
        test : 0,
        confirmPA : false
      }
      
    }
    
    shouldComponentUpdate(){
      // console.log("should update?")
      // console.log(this.state)
      return (!this.state.bingo)
    }
  
    
    Checkbingo = function() {
        if (CheckBingo({...this.state})){
            setTimeout(function(){
            this.setState({bingo : true})
          }.bind(this), 400);
          
          }else if (CheckTies({...this.state})){
            setTimeout(function(){
              this.setState({bingo : true , ties : true})
            }.bind(this), 400);
          }
      }
    
    updateScore = () => {
      // console.log('inside update ' + !this.state.ties)
      if(this.state.turn == 'o' && !this.state.ties){
        this.state.xScore += 1;
        
      }else if (this.state.turn == 'x' && !this.state.ties){
        this.state.oScore += 1;
        
    }
    }
    

    clear = () => {
      // console.log('clearing in function' + this)
      this.setState({n1 : null, n2 : null, n3 : null, n4 : null, n5 : null, n6 : null, n7 : null, n8 : null, n9 : null,
        turn : 'o',
        XContent :  <FontAwesomeIcon id='xxx' icon='times' />,
        OContent : <FontAwesomeIcon id='circle' icon='circle' />,
        oScore : 0,
        xScore : 0,
        bingo : false,
        ties : false,
        test : 0
      })
    }

    // playAgain = () => {
    //   console.log(this.state)
    //   this.setState({n1 : null, n2 : null, n3 : null, n4 : null, n5 : null, n6 : null, n7 : null, n8 : null, n9 : null, turn : 'o', bingo : false , ties: false} )
    // }   

    playAgain = () => {
      this.setState(playAgain2);
      
    }
    
    confirmPlayAgain =  () => {
      // console.log('confirm')
      this.setState({confirmPA : !this.state.confirmPA} , () => this.playAgain())
    }
    
    gridSelected = (event) => {
      const pos = event.target.id;
      const target = event.target;
      if (this.state.turn === 'o' && target.className === '' ){
        this.setState( {turn : 'x' , [pos] : 'oPicked' , playerNameTurn : this.props.people1 })
    }else if (this.state.turn === 'x' && target.className === '' ){
        this.setState( {turn : 'o', [pos] : 'xPicked' , playerNameTurn :  this.props.people2  })
      }
    }
  
  render(){
    
    const ShowResult2  =  () => {
      
      return(
        <div className='showResult'>
    
    <span id="result-caption">{this.state.ties ? 'Tied!!!' : 

((this.state.turn === 'o' && !this.state.ties) ? this.props.people2 + ' Won!!' : this.props.people1 + ' Won!!')}</span>
    <table id="table-result">
    <caption>ScoreBoard</caption>
      <tbody>
        <tr className="gridResult-row1">
          <td>
            Name
          </td>
          <td>
            Score
          </td>
        </tr>
        <tr className="gridResult-row2">
          <td>
            {this.props.people1}
          </td>
          <td>
           
            {(this.state.turn==='x' && !this.state.ties) ? this.state.oScore  : this.state.oScore }
          </td>
        </tr>
        <tr className="gridResult-row3">
          <td>
          {this.props.people2}
          </td>
          <td>
          {(this.state.turn==='o' && !this.state.ties) ? this.state.xScore  : this.state.xScore }
          </td>
        </tr>
      </tbody>
    </table>
    
    <button id="play-again-btn" onClick={this.confirmPlayAgain} >Play again</button>
    <br></br>
    <span id="confirm-caption">(DoubleClick to go )</span>
    

    </div>
      )
    }
    
    return (
     
      <div>
            {/* {console.log('rendering')} */}
        <table>
        <tbody >
          <tr className="grid-row1">
            <td id="n1" className={this.state.n1} onClick={this.gridSelected}>
              {(this.state.n1 === null)  ? null : (this.state.n1[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
            <td  id="n2" className={this.state.n2} onClick={this.gridSelected}>
            {(this.state.n2 === null)  ? null : (this.state.n2[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
            <td id="n3" className={this.state.n3} onClick={this.gridSelected}>
            {(this.state.n3 === null)  ? null : (this.state.n3[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
          </tr>
          <tr className="grid-row2">
            <td id="n4" className={this.state.n4} onClick={this.gridSelected}>
            {(this.state.n4 === null)  ? null : (this.state.n4[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
            <td id="n5" className={this.state.n5} onClick={this.gridSelected}>
            {(this.state.n5 === null)  ? null : (this.state.n5[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
            <td id="n6" className={this.state.n6} onClick={this.gridSelected}>
            {(this.state.n6 === null)  ? null : (this.state.n6[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
          </tr>
          <tr className="grid-row3">
            <td id="n7" className={this.state.n7} onClick={this.gridSelected}>
            {(this.state.n7 === null)  ? null : (this.state.n7[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
            <td id="n8" className={this.state.n8} onClick={this.gridSelected}>
            {(this.state.n8 === null)  ? null : (this.state.n8[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
            <td id="n9" className={this.state.n9} onClick={this.gridSelected}>
            {(this.state.n9 === null)  ? null : (this.state.n9[0] === 'o') ? this.state.OContent : this.state.XContent }
            </td>
          </tr>
          </tbody>
        </table>
        
        <span id='turn-text'>{this.state.turn === 'o' ? this.props.people1 + '\'s Turn !!' : this.props.people2 + '\'s Turn !!'}</span>
        <div onClick={this.clear}><button id='clear-btn' className="" onClick={this.props.clear}>Clear All</button></div>
         {(this.Checkbingo() || this.state.bingo)  ? this.updateScore(): null}
         
         {(this.Checkbingo() || this.state.bingo)  ? <ShowResult2 />: null}
      </div>
     
    );
  }
  }



export default SecondPage