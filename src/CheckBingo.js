import React  from 'react';



const CheckBingo = function(props){
    if ((props.n1 === props.n2 && props.n2 === props.n3 ) && props.n1 !== null){
        return true;
    }else if ((props.n4 === props.n5 && props.n5 === props.n6 ) && props.n4 !== null){
        return true;
    }else if ((props.n7 === props.n8 && props.n8 === props.n9 ) && props.n7 !== null){
        return true;
    }else if ((props.n1 === props.n4 && props.n4 === props.n7 ) && props.n1 !== null){
        return true;
    }else if ((props.n2 === props.n5 && props.n5 === props.n8 ) && props.n2 !== null){
        return true;
    }else if ((props.n3 === props.n6 && props.n6 === props.n9 ) && props.n3 !== null){
        return true;
    }else if ((props.n1 === props.n5 && props.n5 === props.n9 ) && props.n1 !== null){
        return true;
    }else if ((props.n3 === props.n5 && props.n5 === props.n7 ) && props.n3 !== null){
        return true;
    }else{return false}
} 
    
const CheckTies = function(props){
        if (props.n1 !== null && props.n2 !== null && props.n3 !== null && props.n4 !== null && props.n5 !== null && props.n6 !== null && props.n7 !== null && props.n8 !== null && props.n9 !== null ){
            return true;
        }
    }
        
        


export {CheckBingo , CheckTies}












export default CheckBingo;