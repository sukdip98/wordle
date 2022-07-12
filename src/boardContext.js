import React, { createContext, useContext} from 'react'
import { boardDefault, initialState } from './Words';
import { useState } from 'react';
export const BoardC=createContext();
const BoardContext = ({children}) => {
    const [board,setBoard]=useState(boardDefault);
    console.log(board)
    const [curAttempt,setCurAttempt]=useState(0);
    const [pos,setPos]=useState(0);
  return (
    <BoardC.Provider value={{board,setBoard,curAttempt,setCurAttempt,pos,setPos}}>
        {children}
    </BoardC.Provider>
  )
}

export default BoardContext;
export const BoardState=()=>{
    return useContext(BoardC);
}