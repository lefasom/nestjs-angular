import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home.jsx";
import NewUser from "../pages/newuser.jsx";
import Login from "../pages/login.jsx";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Newuser" element={<NewUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;