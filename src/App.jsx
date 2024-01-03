import {Route,Routes} from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar";
import Home from './pages/Home'
import About from "./pages/About";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Login from "./pages/Login";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
