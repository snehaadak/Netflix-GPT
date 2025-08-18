import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, User_ICON } from "../utils/constants";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error")
        });
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
                  navigate("/");
                }              
              }
        });
        return () => unsubscribe(); 
    },[dispatch, navigate])


  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-8 py-4 z-10 flex justify-between">
      <img
        className="w-40"
        src= {LOGO}
        alt="Logo"
      />
      
      {user && (
        <div className="ml-auto font-semibold z-10 mt-2 mr-10 flex text-white">
            <span className="mx-auto my-auto">
              <p>{user?.displayName}</p>
            </span>
            <img className="mr-2 w-11 h-11 rounded-sm"
              src= {User_ICON}
              alt ="User Icon"></img>
            <button className="ml-5"
              onClick={handleSignOut}>Sign Out</button>
            </div>)}
    </div>
  );
};

export default Header;