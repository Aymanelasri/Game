import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import All from "./All";


export default function Projets() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<All />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}