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
import Category from "./pages/homepage/category/Category";
import Subcategory from "./pages/homepage/subcategory/Subcategory";
import Flashsale from "./pages/homepage/flashsale/Flashsale";
import BestSelling from "./pages/homepage/bestselling/BestSelling";
import Product from "./pages/product/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
       <Route path="/banner" element={<Banner/>}/>
       <Route path="/category" element={<Category/>}/>
       <Route path="/subcategory" element={<Subcategory/>}/>
       <Route path="/flashsale" element={<Flashsale/>}/>
       <Route path="/bestselling" element={<BestSelling/>}/>
       <Route path="/products" element={<Product/>}/>
    </Route>
  )
);
function App() {
  return(<RouterProvider router={router} />);
}

export default App;
