import React, { useContext } from 'react'
import { AppContext } from '../App';
import { BoardC, BoardState } from '../boardContext'

const Letter = ({pos,attemtVal}) => {
    const {board,setBoard,correctWord,currAttempt}=useContext(AppContext);
    // const {board,setBoard}=BoardState();
    const letter=board[attemtVal][pos];
    const correct=correctWord[pos]===letter;
    const almost=!correct&&letter!==""&&correctWord.includes(letter);
    const currentId=currAttempt.attempt>attemtVal&&(correct?"correct":almost?"almost":"error");

  return (
    <div className='letter' id={currentId}>{letter}</div>
  )
}

export default Letter