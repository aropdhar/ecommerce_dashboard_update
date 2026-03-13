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
import ProductList from "./pages/productlist/ProductList";
import Order from "./pages/order/Order";
import SingleOrder from "./pages/singleorder/SingleOrder";
import ContactList from "./pages/contactlist/ContactList";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout/>}>
        <Route path="/" element={<Banner/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/subcategory" element={<Subcategory/>}/>
        <Route path="/flashsale" element={<Flashsale/>}/>
        <Route path="/bestselling" element={<BestSelling/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/order/:id" element={<SingleOrder/>}/>
        <Route path="/contactlist" element={<ContactList/>}/>
      </Route>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Route>
  )
);
function App() {
  return(<RouterProvider router={router} />);
}

export default App;
