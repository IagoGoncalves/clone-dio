
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Feed from './pages/feed'
import Register from "./pages/Register";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/feed" element={<Feed />}/>
      </Routes>
    </Router>
  );
}

export default App;
