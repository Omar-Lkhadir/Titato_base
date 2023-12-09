import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <main className="pop ">

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
      
      
      <div class="text-center -mt-14  ">
    <a href="/about" class="mx-4 text-[#9cf345] text-3xl ">About</a>
    <a href="/team" class="mx-4 text-[#9cf345] text-3xl font-Montserrat ">Team</a>
    <a href="/FAQ" class="mx-4 text-[#9cf345] text-3xl font-Montserrat ">FAQ</a>
  </div>

      <h1 class="text-white text-center text-4xl font-serif pt-20 "><span class="text-[#9cf345] ">D</span>éfinition du <span class="text-[#9cf345] ">T</span>ic <span class="text-[#9cf345] ">T</span>ac <span class="text-[#9cf345] ">T</span>oe</h1>
        <p class="text-white text-center text-xl font-serif ml-5  pt-20 pl-20 pr-20">Le Tic Tac Toe, également connu sous le nom de Morpion, est un jeu de société classique pour deux joueurs.
         Il se joue sur une grille 3x3 et l'objectif est d'aligner trois de ses symboles (X ou O) horizontalement, verticalement ou en diagonale avant son adversaire.</p>
         <div className="fixed  top-40 right-3 w-40">
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      src="../images/1.png"
    />
  </div>
  <div className="fixed  top-40 left-3 w-40">
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      src="../images/15.png"
    />
  </div>

         <h1 class="text-white text-center text-4xl font-serif pt-20"><span class="text-[#9cf345] ">H</span>istorique du <span class="text-[#9cf345] ">T</span>ic <span class="text-[#9cf345] ">T</span >ac <span class="text-[#9cf345] ">T</span >oe</h1>
        <p class="text-white text-xl text-center font-serif ml-5 pt-8 pl-20 pr-20">Le Tic Tac Toe est l'un des jeux de société les plus anciens au monde, avec des racines qui remontent à l'Égypte antique.
         Il a évolué au fil du temps et est devenu populaire dans le monde entier, notamment sous sa forme moderne jouée sur papier et crayon.</p>
        
        <p class="text-white text-xl font-serif ml-5 pt-20 pl-20 pr-20">Le Tic Tac Toe est souvent utilisé comme un jeu pédagogique pour enseigner la logique et la stratégie aux enfants, mais il peut également être joué par des adultes comme un jeu de réflexion rapide. 
            Il a été numérisé et est maintenant largement disponible en tant que jeu en ligne et sur les plateformes mobiles, ce qui permet aux joueurs de s'affronter à travers le monde.</p>

        <p class="text-white text-xl font-serif ml-5 pt-20 pl-20 pr-20">Le jeu a également inspiré de nombreuses variantes et adaptations, tout en conservant son noyau de base simple et amusant.
             C'est un jeu intemporel qui continue de divertir les joueurs de toutes les générations.</p>

    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage