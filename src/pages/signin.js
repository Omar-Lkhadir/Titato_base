import * as React from 'react'
import { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from 'gatsby-link';


// Step 2: Define your component
const SigninPage = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Comparaison des informations de connexion avec celles stockées localement (exemple simplifié)
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword'); // En production, évitez de stocker les mots de passe de cette manière !

    if (email === storedEmail && password === storedPassword) {
      // Les informations de connexion sont correctes, redirection vers la page Home
      navigate('/home');
    } else {
      setErrorMessage('Email or password is incorrect');
    }
  };


  return (
    <main className="f">
         <div className=" flex  ">
            <a href="/signin">
            <StaticImage className="m-3" alt="errour " src="../images/LOGO.png"/></a>
        </div>


        <div class="w-[500px] h-[400px] p-10  mt-0 translate-x-96 translate-y-5 ml-32  text-black rounded-r-lg  bg-[#9cf345]">
   

  <div class="w-full max-w-md mx-auto">
    <div class="flex flex-col justify-center items-center ">
      <h1 class="text-4xl font-bold  text-black font-['Qatar2022']">Login to your account</h1>
      <p class="text-lg  text-black font-['Qatar2022']">Don’t have an ccount? <a href="/index">Sign up</a></p>

      

      <form onSubmit={handleSubmit}>
      <div  className="font-normal font-['Poppins'] ">
          <label htmlFor="email">Email address</label> <br />
          <input type="text" name="email" class="rounded border-2 w-96"   value={email}
              onChange={(e) => setEmail(e.target.value)}
              required></input>
      </div>

      <div className="font-normal font-['Poppins']">
          <label htmlFor="password">password</label> <br />
          <input type="password" name="password" class="rounded border-2 w-96"     value={password}
              onChange={(e) => setPassword(e.target.value)}
              required></input>
      </div> <br />

      <button className="bg-white hover:bg-black hover:text-white hover:border-lime-50 text-black font-bold py-2 px-4  font-['Qatar2022'] rounded-full w-96 " type="submit">
      Sign In
    </button>
    </form>

    {errorMessage && <p className="text-red-500">{errorMessage}</p>}


    <div class="flex flex-col justify-center items-center">
      <p class="  text-black font-['Qatar2022'] text-lg">Or, Sign in with <a href="" class="font-semibold">Google</a> or <a href="" class="font-semibold">Facebook</a>   </p></div>
    
      
    </div>
    </div>
    
    
        
    
  </div>


    
    
    </main>
  )
}
export default SigninPage

export const Head = () => <title>signin Page</title>
