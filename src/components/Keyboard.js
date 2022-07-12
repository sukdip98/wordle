import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';
import Key from './Key';

const Keyboard = () => {
    const key1=["Q","W","E","E","R","T","Y","U","I","O","P"];
    const key2=["A","S","D","F","G","H","J","K","L"];
    const key3=["Z","X","C","V","B","N","M"];
    const{onDelete,onEnter,onSelect,currAttempt}=useContext(AppContext);
    const handleKeyDown=(event)=>{
    if(event.key==="Enter"){
    onEnter();
 }
 else if(event.key==="Backspace"){
     onDelete();
    }
    else if(event.key>="a" && event.key<="z"){
        onSelect(event.key.toUpperCase());
    }
    else{
        return;
    }
}
useEffect(()=>{
    window.addEventListener("keydown",handleKeyDown);
    return ()=>window.removeEventListener("keydown",handleKeyDown);
    },[handleKeyDown]);
  return (
    <div className='keyboard' >

    <div className='line1'>{
        key1.map((key,i)=>{
            return <Key key={i} keyVal={key}/>
        })
    }</div>
    <div className='line2'>
    {
        key2.map((key,i)=>{
            return <Key key={i} keyVal={key}/>
        })
    }
    </div>
    <div className='line3'>
        <Key keyVal={"ENTER"} bigKey/>
    {
        key3.map((key,i)=>{
            return <Key key={i} keyVal={key}/>
        })
    }
            <Key keyVal={"DELETE"} bigKey/>

    </div>

    </div>
  )
}

export default Keyboard