import React from "react"; 
import Sidebar from "./components/sidebar/Sidebar";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Rootlayout from "./components/rootlayout/Rootlayout";
import Banner from "./pages/homepage/banner/Banner";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
       <Route path="/banner" element={<Banner/>}/>
    </Route>
  )
);
function App() {
  return(<RouterProvider router={router} />);
}

export default App;
