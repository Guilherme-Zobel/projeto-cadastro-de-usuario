import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../components/home/Home';
import UserCrud from "../components/user/UserCrud";

const Router = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/users" element={<UserCrud />} />
    <Route path="*" element={<Home />} />
  </Routes>
  </BrowserRouter>
  )
}

export default Router;