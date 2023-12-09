
import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useCallback } from "react";
import { navigate } from "gatsby";






function Square({ value, onSquareClick, isWinningSquare }) {
  const squareClassName = isWinningSquare ? 'bg-green-500' : 'bg-lime-400';
  

  return (
    <button
      className={` text-black text-2xl font-bold   px-0  rounded w-20  h-20 m-4   ${squareClassName}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner.symbol;
   
  } else {
    status = 'Next player  ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="h-screen  bg-lime-400 ">

      <section className=" flex justify-between ">

        <a href="/home">
          <StaticImage
              alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
              src="../images/LO.png"/>
      </a>
       
      <div className="absolute top-2 right-3">
        <a href="https://youtu.be/ft30zcMlFao?si=mcgMp8EXMRK7Zn78">
        <StaticImage
              alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
              src="../images/so.png"/> 
        </a>
      </div>


      <div class="text-center mr-80 pr-80 mt-6">
    <a href="/about" class="mx-4 text-black text-3xl font-Montserrat">About</a>
    <a href="/team" class="mx-4 text-black text-3xl font-Montserrat ">Team</a>
    <a href="/FAQ" class="mx-4 text-black text-3xl font-Montserrat ">FAQ</a>
  </div>

        
      </section>



      <div className="flex justify-center flex-row ">

        
        <StaticImage className="plan relative   left-52  " alt="errour " src="../images/plan.png"/>
        
        <div className="  relative right-44 top-3 mr-10 mt-15 ">
          <div className=" board-row grid grid-cols-3 gap-10">
            <Square
              className=""
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
              isWinningSquare={winner && winner.winningSquares.includes(0)}
            />
            <Square
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
              isWinningSquare={winner && winner.winningSquares.includes(1)}
            />
            <Square
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
              isWinningSquare={winner && winner.winningSquares.includes(2)}
            />
          </div>
          <div className="  board-row grid grid-cols-3 gap-10 ">
            <Square
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
              isWinningSquare={winner && winner.winningSquares.includes(3)}
            />
            <Square
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
              isWinningSquare={winner && winner.winningSquares.includes(4)}
            />
            <Square
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
              isWinningSquare={winner && winner.winningSquares.includes(5)}
            />
          </div>
          <div className=" board-row grid grid-cols-3 gap-10 ">
            <Square
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
              isWinningSquare={winner && winner.winningSquares.includes(6)}
            />
            <Square
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
              isWinningSquare={winner && winner.winningSquares.includes(7)}
            />
            <Square
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
              isWinningSquare={winner && winner.winningSquares.includes(8)}
            />
          </div>
        </div>
        
      </div>

      <div className="flex justify-center text-2xl font-bold text-black p-4 ml-14 mt-4 ">
        {status}
      </div>


      
      <a href="/1vs1" class=" relative left-3/4 text-3xl bottom-72 ">1 vs 1</a>
      

     

    </div>
    
      
     
  );
}

function calculateWinner(squares) {
  // ... (your calculateWinner function remains the same)

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return{
        symbol: squares[a],
        winningSquares: [a, b, c]
      }
    }
  }
  return null;
}







