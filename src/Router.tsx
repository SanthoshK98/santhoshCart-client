import { Routes, Route } from "react-router-dom";
import { AdminLogin } from "./components/AdminLogin";
import { Cart } from "./components/Cart";
import Display from "./components/Display";
import Category from "./components/Category";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { MyOrders } from "./components/MyOrders";
import { PrivateComponent } from "./components/PrivateComponent";
import { SignUp } from "./components/SignUp";
import Products from "./components/Products";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateComponent />}>
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Route>
        <Route path="/" element={<Display/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/products/:category" element={<Category/>}/>
        <Route path="/category/:product" element={<Products/>}/>
      </Routes>
    </>
  );
};
