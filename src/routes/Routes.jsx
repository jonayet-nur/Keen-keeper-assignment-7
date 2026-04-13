import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepages from "../Pages/Homepage/Homepages";
import Error from "../Pages/Error";
import Friendpage from "../Pages/Friendpage/Friendpage";

 export const router = createBrowserRouter([
    {
        path:"/",
        Component:Mainlayout,
        children:[
            {index:true ,Component:Homepages},
            {path:"/friend" ,Component:Friendpage}
        ],

        errorElement:<Error></Error>
    }
])