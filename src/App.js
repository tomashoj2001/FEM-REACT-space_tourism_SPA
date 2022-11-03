import Navbar from "./components/Navbar";
import logo from "./starter-code/assets/shared/logo.svg"
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  return (
    <>
      <header>
        <Link className="after" to="/" end>
          <img className="logo" src={logo} alt="logo"/>          
        </Link>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;