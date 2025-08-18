import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import LoginPage from "./LoginPage";
import { RouterProvider} from "react-router-dom";
import SignUp from "./SignUp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <LoginPage/>
        },
        {
            path:"/browse",
            element: <Browse/>
        },
        {
            path: "/newUser/SignUp",
            element: <SignUp/>
        }
        
    ])

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email, displayName} = user;                  // User is signed in, see docs for a list of available properties // https://firebase.google.com/docs/reference/js/auth.user
                dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            } else {
                dispatch(removeUser());     
            }
});
    },[])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;