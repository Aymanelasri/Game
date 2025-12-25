import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import UserPost from "./Components/UserPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/UserPost/:userId" element={<UserPost />} />
      </Routes>
    </Router>
  );
}

export default App;
