import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext,useState } from 'react';
import { boardDefault } from './Words';
import { data } from './WordsList';

export const AppContext = createContext();
function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const words=data;

  const[correctWord,setCorrectWord]=useState(words[Math.floor(Math.random()*words.length)])
  console.log(correctWord)
  const onDelete=()=>{
    if(currAttempt.letter===0)return;
    const newBoard=[...board];
    newBoard[currAttempt.attempt][currAttempt.letter-1]="";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt,letter:currAttempt.letter-1})
  }
  const onEnter=()=>{
    if(currAttempt.letter!=5)return;
    let curWord="";
     for(let i=0;i<5;i++){
      curWord+=board[currAttempt.attempt][i];
     }
      setCurrAttempt({...currAttempt,attempt:currAttempt.attempt+1,letter:0})

     
    
     if(curWord===correctWord){
      alert(`You guess the right Word in ${currAttempt.attempt+1}`);

      alert("You won the Game!!!");
     }
     else{
      if(currAttempt.attempt>4){
        alert("You lost the game!");
        alert(`Correct word is ${correctWord}`)
      }
     }

    
  }
  const onSelect=(keyVal)=>{
    if(currAttempt.letter>4){
      alert("Press Enter")
      return;
    }
    const newBoard=[...board];
    newBoard[currAttempt.attempt][currAttempt.letter]=keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt,letter:currAttempt.letter+1})
  }
  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <div className='game'>
        <AppContext.Provider value={{board,
          setBoard,
          currAttempt,
          setCurrAttempt,onDelete,onSelect,onEnter,correctWord}}>
        <Board/>
     <Keyboard/>
        </AppContext.Provider>
      
      </div>
    
    </div>
  );
}

export default App;
