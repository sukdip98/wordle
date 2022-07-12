import React,{useState} from 'react'
import { boardDefault } from '../Words'
import Letter from './Letter'

const Board = () => {
    // const [board,setBoard]=useState(boardDefault)
  return (
    <div className='board'>
        <div className='row'>
        <Letter pos={0} attemtVal={0}/>
        <Letter pos={1} attemtVal={0}/>
        <Letter pos={2} attemtVal={0}/>
        <Letter pos={3} attemtVal={0}/>
        <Letter pos={4} attemtVal={0}/>
        </div>
        <div className='row'>
        <Letter pos={0} attemtVal={1}/>
        <Letter pos={1} attemtVal={1}/>
        <Letter pos={2} attemtVal={1}/>
        <Letter pos={3} attemtVal={1}/>
        <Letter pos={4} attemtVal={1}/>
        </div>
        <div className='row'>
        <Letter pos={0} attemtVal={2}/>
        <Letter pos={1} attemtVal={2}/>
        <Letter pos={2} attemtVal={2}/>
        <Letter pos={3} attemtVal={2}/>
        <Letter pos={4} attemtVal={2}/>
        </div>
        <div className='row'>
        <Letter pos={0} attemtVal={3}/>
        <Letter pos={1} attemtVal={3}/>
        <Letter pos={2} attemtVal={3}/>
        <Letter pos={3} attemtVal={3}/>
        <Letter pos={4} attemtVal={3}/>
        </div>
        <div className='row'>
        <Letter pos={0} attemtVal={4}/>
        <Letter pos={1} attemtVal={4}/>
        <Letter pos={2} attemtVal={4}/>
        <Letter pos={3} attemtVal={4}/>
        <Letter pos={4} attemtVal={4}/>
        </div>
        <div className='row'>
        <Letter pos={0} attemtVal={5}/>
        <Letter pos={1} attemtVal={5}/>
        <Letter pos={2} attemtVal={5}/>
        <Letter pos={3} attemtVal={5}/>
        <Letter pos={4} attemtVal={5}/>
        </div>

    </div>
  )
}

export default Board