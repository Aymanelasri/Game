
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Livre from "./Livre.jsx";
import Edit from "./Edit.js";

export default function AppRouter() {
    return (
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Livre />} />
             <Route path="/edit/:id" element={<Edit />} />
          </Routes>
       </BrowserRouter>
    );
}