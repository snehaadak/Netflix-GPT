import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import LoginPage from "./LoginPage";
import { RouterProvider} from "react-router-dom";
import SignUp from "./SignUp";


const Body = () => {

   

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


    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;