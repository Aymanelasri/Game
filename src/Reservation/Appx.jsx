import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservation from "./Reservation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;