import { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const LoginPage = () => {

//SignIn to SignUp Toggle  
  // const [isSignInForm,setisSigninForm] = useState(true)

  // const toggleSignIn =  () => {
  //   setisSigninForm(!isSignInForm)
  // }

  

//Validation Feature
  const [errorMessage, seterrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  
  const handleValidation = () => {
    const message = checkValidData(email.current.value,password.current.value)
    seterrorMessage(message)

    if(message) return;

// Sign In Logic

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    seterrorMessage("No Registered Account, Please create a account")
  });
    
  }

  return (
    <div>
      <Header />
        <div className="absolute">
            <img className=""
                src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
                alt="Background"/>
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div>
            <form onClick = {(e)=>e.preventDefault()}
              className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
                <h1 className=" py-4 font-bold text-3xl"> Sign In </h1>
  
                <input 
                ref={email}
                type="text" 
                placeholder="Email Address" 
                className="p-4 my-4 w-full bg-gray-700 rounded-md"
                />

                <input 
                ref={password}
                type="password" 
                placeholder="Password" 
                className="p-4 my-4 w-full bg-gray-700 rounded-md"
                />

                <p className="text-red-500 text-lg">{errorMessage}</p>

                <button 
                className="p-2 my-6 w-full bg-red-700 font-bold rounded-md" onClick={handleValidation}>
                  Sign Up
                </button>
                <p className="my-2 mt-5">New User? <b className="ml-2"><Link to="/newUser/SignUp">Sign Up Now</Link></b></p>
                
            </form>
        </div>
    </div>
  );
};

export default LoginPage;