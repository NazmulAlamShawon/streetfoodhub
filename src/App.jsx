import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Login from "./pages/Login";
import OnlineOrder from "./pages/OnlineOrder";



const App = () => {
  return (
     
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/online-order" element={<OnlineOrder></OnlineOrder>} />
    </Routes>
  );
};
export default App;
