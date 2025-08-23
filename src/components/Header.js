import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, User_ICON } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)

  const  handleGPTSearchCLick = () => {
    dispatch(toggleGPTSearchView());
  }


    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error")
        });
    }

    const langChange = (e) => {
      dispatch(changeLang(e.target.value))
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email, displayName} = user;                  // User is signed in, see docs for a list of available properties // https://firebase.google.com/docs/reference/js/auth.user
                dispatch(addUser({uid: uid, email: email, displayName: displayName}))
                navigate("/browse")
            } else {
                dispatch(removeUser());
                if (window.location.pathname === "/browse") {
                  navigate("/") || navigate("/GPT/Search")
                }              
              }
        });
        return () => unsubscribe(); 
    },[dispatch, navigate])


  return (
    <div className=" absolute w-full bg-gradient-to-b from-black px-8 py-4 z-10 flex justify-between">
      <img
        className="w-40"
        src= {LOGO}
        alt="Logo"
      />
      
      {user && (
        <div className="ml-auto font-semibold z-10 mt-2 mr-10 flex text-white">

            <span className="mx-auto my-auto mr-5 ">
              <p>{user?.displayName}</p>
            </span>

          {showGPTSearch && (
            <div className="bg-gray-700 mr-5 rounded-xl p-2">
              🌐
            <select className="bg-gray-700" onChange={langChange}>
              {SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
            </select>
            </div>
          )}

            <button className="p-2 mr-5 w-32 rounded-xl bg-gray-700"
              onClick={handleGPTSearchCLick}>
                {showGPTSearch ? "Home" : "GPT Search"}</button>

            <img className="mr-4 5-11 h-11 rounded-sm"
              src= {User_ICON}
              alt ="User Icon"></img>

            <button className=""
              onClick={handleSignOut}>Sign Out</button>
            </div>)}
    </div>
  );
};

export default Header;