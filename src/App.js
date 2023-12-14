import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import RestroMenu from "./components/RestroMenu";
//import Grocery from "./components/Grocery";

const AppLayout = () => {

    return (
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    )
} 

const Grocery = lazy(() => import("./components/Grocery"));

const Approuter = createBrowserRouter([

    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/About",
                element: <About/>
            },
            {
                path: "/Contact",
                element: <Contact/>
            },

            {
                path: "/restaurants/:ressId",
                element: <RestroMenu/>
            },
            {
                path: "/Grocery",
                element: <Suspense fallback ={<h1>Please Wait page loading...</h1>}><Grocery/></Suspense>
            }

        ],
        errorElement: <Error/>

    }

]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={Approuter}/>)
