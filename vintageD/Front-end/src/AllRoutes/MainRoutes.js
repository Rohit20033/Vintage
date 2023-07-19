import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

import DownloaduiPage from "../Pages/DownloaduiPage";
import LoginPage from "../Pages/LoginPage";
import Signup from "../Pages/Signup";
import  SingleProduct from "../Pages/SingleProduct";
import AdminPage from "../Pages/AdminPage";
import { Cart } from "../Pages/Cart";
import ProfilePage from "../Pages/ProfilePage";
import AddProducts from "../Pages/AddProducts";
import PrivatePage from "../Pages/PrivatePage";
import Offers from "../Pages/Offers";
import { FansPage } from "../Pages/FansPage";
import Products from "../Pages/products";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        
          <HomePage />
      } />
      <Route
        path="/login"
        element={
          
            <LoginPage/>
         
        }/>
      <Route
        path="/signup"
        element={
            <Signup />
          
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/addproducts" element={<AddProducts />} />
      <Route path="/adminpage" element={<AdminPage />} />
      
     
      <Route path="/prod" element={
      <PrivatePage>
        <Products/>
      </PrivatePage>} />
      <Route path="/downloaduipage" element={<DownloaduiPage />}/>
      <Route path="/cart" element={
        <PrivatePage>
          <Cart />
        </PrivatePage>
      } />
      <Route path="/offers" element={<Offers />} />
      <Route path="/fanpage" element={<FansPage />} />
    </Routes>
  );
};
