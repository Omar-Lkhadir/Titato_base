import * as React from 'react'

import { StaticImage } from "gatsby-plugin-image"

const FAQPage = () => {
    return (
      <main class="con">
        
        <a href="/home">
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/LO.png"
        
      /></a>

      <div className="absolute top-2 right-3">
      <a href="https://youtu.be/ft30zcMlFao?si=mcgMp8EXMRK7Zn78">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/so.png"
      /></a>
      </div>
      <div class="text-center -mt-14  ">
    <a href="/about" class="mx-4 text-black text-3xl  font-Montserrat ">About</a>
    <a href="/team" class="mx-4 text-black text-3xl font-Montserrat">Team</a>
    <a href="/FAQ" class="mx-4 text-black text-3xl font-Montserrat ">FAQ</a>
  </div>
  
  <div class="text-center mt-20 font-bold text-4xl">
  <p>FREQUENTLY ASKED</p>
      <p>questions</p>
  </div>
  <div class="text-center  text-xl mt-7 font-Regular">
  <p>This is the frequently asked questions page to make it easy for most </p>
  <p>of our users and make things clear for them</p>
  </div>
  <div className="absolute top-6 right-0 w-96 ">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/tex.png"
      />
      </div>
  <div class="font-bold text-3xl mt-10 ml-10">
    <p>Q1: How do I play Tic Tac Toe on your website?</p>
  </div>
  <div class="font-Regular text-xl mt-6 ml-10 mr-20">
    <p>A: Playing Tic Tac Toe on our website is easy! Simply visit the game page, and you can start a new game by clicking the "1 Vs 1" or "Vs Computer" buttons. To make a move, click on the square where you want to place your X or O. The game will automatically alternate between X and O turns. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins!</p>
  </div>
  <div class="font-bold text-3xl mt-10 ml-10">
    <p>Q2: Can I play Tic Tac Toe with a friend on your website?</p>
  </div>
  <div class="font-Regular text-xl mt-6 ml-10 mr-20">
    <p>A: Currently, our website supports single-player mode only. However, we are actively working on introducing a two-player feature in the future, allowing you to enjoy the game with friends. Stay tuned for updates!!</p>
  </div>
  <div className="absolute top-100 transform -translate-y-2/1 left-0 w-96  ">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/15.png"
      />
      </div>
  <div class="font-bold text-3xl text-right pr-10">
    <p>Q3: What happens if the game ends in a tie?</p>
  </div>
  <div class="font-Regular text-xl mt-6 pl-80 pr-5 ">
    <p>A: If all the squares on the board are filled, and neither player has achieved three in a row, the game is declared a tie. In Tic Tac Toe, this is commonly known as a "draw" or "cat's game." If this happens, you can simply start a new game and try again!</p>
  </div>
  <div class="font-bold text-3xl text-right pr-10">
    <p>Q4: Is there a way to reset the game if I want to start over?</p>
  </div>
  <div class="font-Regular text-xl mt-6 pl-80 pr-5">
    <p>A: Yes, there is! To start a new game and reset the board, simply click the "New Game" button. This will clear the current board and allow you to begin a fresh round of Tic Tac Toe. It's a great way to rematch or start a new game with a different opponent.
</p>
  </div>

      </main >
      
  
  
  
    )
  }
  
  export const Head = () => <title>FAQ Page</title>
  
  export default FAQPage