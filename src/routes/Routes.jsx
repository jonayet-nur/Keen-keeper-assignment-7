import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepages from "../Pages/Homepage/Homepages";
import Error from "../Pages/Error";
import Friendpage from "../Pages/Friendpage/Friendpage";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";

 export const router = createBrowserRouter([
    {
        path:"/",
        Component:Mainlayout,
        children:[
            {index:true ,Component:Homepages},
            {path:"/friend" ,Component:Friendpage},
            {path:"/frienddetails/:id", Component:FriendDetails,
                loader:()=>fetch('/friendData.json')

            }
        ],

        errorElement:<Error></Error>
    }
])