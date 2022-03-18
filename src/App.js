
import React,{useEffect, useState}from 'react';
import "./index.css";
import Card from './Card';



function App() {

  const[cards,setCards]=useState([]);
  const [choiceOne,setChoiceOne]=useState(null);
  const [choiceTwo,setChoiceTwo]=useState(null);
  const [resetGame,setResetGame]=useState(0)



    const cardImages  =[
    {"img": "/Images/grancanaria.jpg",matched:false},
    {"img": "/Images/lanzarote.jpg",matched:false},
    {"img": "/Images/mexico.jpg",matched:false},
    {"img": "/Images/poland.jpg",matched:false},
    {"img": "/Images/portugal.jpg",matched:false},
    {"img": "/Images/rome.jpg",matched:false},
    {"img": "/Images/scotland.jpg",matched:false},
    {"img": "/Images/tenerife.jpg",matched:false}, 
    
    ]
    
 

const shuffleCards = ()=>{

  const shuffledCards = [...cardImages,...cardImages]
.sort(()=> Math.random() - 0.5)
.map((card)=>({...card,id:Math.random()}))
setCards(shuffledCards)
setResetGame(0)
}


const handleChoice = (card)=>{
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

useEffect(()=>{
  if(choiceOne && choiceTwo){
    if(choiceOne.img ===choiceTwo.img){
    setCards(prevCards => {
      return prevCards.map(card =>{
        if(card.img === choiceOne.img){
return{...card, matched:true}
        }else{
          return card
        }
      })
    })
    reset()
    }else{
      setTimeout(()=> reset(), 1000)
    }
  }
},[choiceOne,choiceTwo]);


const reset =()=>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setResetGame(prevTurns => prevTurns + 1)
}


useEffect(()=>{
  shuffleCards()

},[])


    return (
     <div>
       <div className='introduction'>
    <h1>Memory Game</h1>
    <div className='btn'><button onClick={shuffleCards}>New Game</button></div>
   </div>
   <div className='images'>

{cards.map(card => (
  <Card
  card={card}
  key={card.id}
  handleChoice={handleChoice}
  flipped={card === choiceOne || card=== choiceTwo || card.matched}
  
  />
))}
 </div>
 <h2>Turns:{resetGame}</h2>
</div>
 

   
  )
  
}

export default App
