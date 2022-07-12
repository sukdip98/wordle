import React, { useContext } from 'react'
import { AppContext } from '../App';
import { BoardC, BoardState } from '../boardContext'

const Key = ({keyVal,bigKey}) => {
    const { board,setBoard,currAttempt,
        setCurrAttempt }=useContext(AppContext);
    const selectLetter=()=>{
      if(keyVal==="ENTER"){
     if(currAttempt.letter!=5)return;
     setCurrAttempt({...currAttempt,attempt:currAttempt.attempt+1,letter:0})
      }
      else if(keyVal==="DELETE"){
        if(currAttempt.letter===0)return;
        const newBoard=[...board];
        newBoard[currAttempt.attempt][currAttempt.letter-1]="";
        setBoard(newBoard);
        setCurrAttempt({...currAttempt,letter:currAttempt.letter-1})
      }
      else{
        if(currAttempt.letter>4){
          alert("Press Enter")
          return;
        }
        const newBoard=[...board];
        newBoard[currAttempt.attempt][currAttempt.letter]=keyVal;
        setBoard(newBoard);
        setCurrAttempt({...currAttempt,letter:currAttempt.letter+1})
      }
     
    };
  return (
    <div className='key' id={bigKey&&"big"} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key