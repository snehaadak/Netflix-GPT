import { Link } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const SignUp = () =>{

    const [errorMessage, seterrorMessage] = useState(null);
  
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleValidation = () => {
    const message = checkValidData(email.current.value,password.current.value,name.current.value)
    seterrorMessage(message)
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
                <h1 className=" py-4 font-bold text-3xl">Sign Up</h1>

                <input 
                type="text"
                ref={name} 
                placeholder="Enter Full Name" 
                className="p-4 my-4 w-full text-black bg-gray-700 rounded-md"
                />

                <input 
                ref={email}
                type="text" 
                placeholder="Email Address" 
                className="p-4 my-4 w-full text-black bg-gray-700 rounded-md"
                />

                <input
                ref={password} 
                type="password" 
                placeholder=" Set Password" 
                className="p-4 my-4 w-full text-black bg-gray-700 rounded-md"
                />

                <p className="text-red-500 text-lg">{errorMessage}</p>

                <button 
                className="p-2 my-6 w-full bg-red-700 font-bold rounded-md" onClick={handleValidation}>
                    Sign Up
                </button>
                <p className="my-2 mt-5">Existing User? <b className="ml-2"><Link to="/">Login Now</Link></b></p>
            </form>
        </div>
    </div>
    )
}

export default SignUp;