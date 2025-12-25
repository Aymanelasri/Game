import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agence from './Agence';
import Layout from './Layout';
import Details from './Details';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Agence />} /> 
                    <Route path="voyages/:id" element={<Details/>} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
}