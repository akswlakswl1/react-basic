import logo from './logo.svg';
import { Children, use, useState } from 'react';
import './App.css';
import Box from "./component/Box";

const choice = {
  rock:{
    name:"Rock",
    img:"https://t3.ftcdn.net/jpg/01/23/14/80/360_F_123148069_wkgBuIsIROXbyLVWq7YNhJWPcxlamPeZ.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://m.ideascience.co.kr/web/product/big/201808/95f07cfda34c528acd09d6379051189e.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGO3Q9noqa1HQjMUVXmc0_2Sz06GcG23wtA&s"
  }
}
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult] = useState("");
  const play = (userChoice)=>{
    // console.log(userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  }

  const judgement = (user, computer) =>{
    console.log(user,computer);
    if (user.name === computer.name){
      return "tie";
    }
    else{
      if(user.name === 'Rock'){
        return computer.name === 'Scissors'? "win" : "lose";
      }
      else if(user.name === 'Scissors'){
        return computer.name === 'Paper'? "win" : "lose";
      }
      else{
        return computer.name === 'Rock'? "win" : "lose";
      }
    }
  }

  const randomChoice =() =>{
    let itemArray = Object.keys(choice);
    let randomIndex = Math.floor(Math.random() * itemArray.length);
    let key = itemArray[randomIndex];
    return choice[key];
    
  }

  const computerResult = result === "win" ? "lose" : result === "lose" ? "win" : result;

  return (
    <div className="App">
      <div className='main'>
        <Box title="you" item={userSelect} result={result}/>
        <Box title="computer" item={computerSelect} result={computerResult}/>
      </div>
      <div className='main'>
        <button onClick={()=>{play("scissors")}}>가위</button>
        <button onClick={()=>{play("rock")}}>바위</button>
        <button onClick={()=>{play("paper")}}>보</button> 
      </div>
    </div>

  );
}

export default App;
