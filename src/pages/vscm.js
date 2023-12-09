import React, { useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useCallback } from "react";
import { navigate } from "gatsby";




function Square({ value, onSquareClick, isWinningSquare }) {
  const squareClassName = isWinningSquare ? 'bg-green-500' : 'bg-gray-800';
  const className = "square" + (isWinningSquare ? " winning " : "");
  return (
    <button className={" z-30 text-lime-400 text-2xl font-bold p-11   px-4  rounded w-20  h-20 m-4 bg-transparent " + className} onClick={onSquareClick}>
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
    status = "Winner: " + winner.symbol;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  useEffect(() => {
    if (!xIsNext && !winner) {
      // Simulate the robot's move after a short delay
      const timeoutId = setTimeout(() => {
        const availableSquares = squares.map((square, index) => square === null ? index : null).filter(square => square !== null);
        const robotMove = getRobotMove(squares, availableSquares, xIsNext);
        handleClick(robotMove);
      }, 1000); // Delay of 1 second
      return () => clearTimeout(timeoutId);
    }
  }, [xIsNext, squares, winner]);

  return (
    
    <div className="p">
       <a href="/home">
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/LOGO1.png"/>
        </a>


      <div className="absolute top-2 right-3">
      <a href="https://youtu.be/ft30zcMlFao?si=mcgMp8EXMRK7Zn78">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/moi.png"
      /></a>
      </div>
      
      
      <div class="text-center -mt-14 ">
    <a href="/about" class="mx-4 text-[#9cf345] text-3xl ">About</a>
    <a href="/dir/team" class="mx-4 text-[#9cf345] text-3xl font-Montserrat ">Team</a>
    <a href="/ami/FAQ" class="mx-4 text-[#9cf345] text-3xl font-Montserrat ">FAQ</a>
  </div>



    <div className="flex justify-center flex-row">

    

      
        <div className="mt-11 relative left-40 bottom-12 ">
          <div className="grid grid-cols-3 gap-4">
            <Square
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
          <div className="board-row grid grid-cols-3 gap-4">
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
          <div className="board-row grid grid-cols-3 gap-4">
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

          <StaticImage className="plan relative right-52 top-6       " alt="errour " src="../images/aa.png"/>
       
        
      
      </div> 
     
      <a href="/vscm" class="  m-3 relative bottom-64  text-white font-bold  text-3xl ">VsComputer</a>
    
       <div className="flex justify-center text-2xl font-bold text-white p-4 relative bottom-20 right-3 ">
          {status}
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  // ... (votre fonction calculateWinner reste la même)
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

function getRobotMove(squares, availableSquares, xIsNext) {
  // Recherche de mouvements gagnants pour le robot
  for (let i = 0; i < availableSquares.length; i++) {
    const copySquares = squares.slice();
    copySquares[availableSquares[i]] = xIsNext ? 'X' : 'O';
    if (calculateWinner(copySquares) === (xIsNext ? 'X' : 'O')) {
      return availableSquares[i];
    }
  }

  // Recherche de mouvements pour bloquer le joueur
  for (let i = 0; i < availableSquares.length; i++) {
    const copySquares = squares.slice();
    copySquares[availableSquares[i]] = xIsNext ? 'O' : 'X';
    if (calculateWinner(copySquares) === (xIsNext ? 'O' : 'X')) {
      return availableSquares[i];
    }
  }

  // Si aucune opportunité de victoire ou de blocage, choisissez un mouvement aléatoire
  return availableSquares[Math.floor(Math.random() * availableSquares.length)];
}