import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowBuses from "./pages/ShowBuses";
import Info from "./pages/Info";
import HomePage from "./pages/HomePage";
import Receipt from "./pages/Receipt";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { setBusData } from "./redux/slicer";
import { useDispatch } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register";
import Payment from "./pages/Payment";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://reserve-bus-23fn.onrender.com/api/buses`);
      const data = await result.json();
      console.log(data)
      dispatch(setBusData(data));
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/showbuses" element={<ShowBuses />} />
          <Route path="/info" element={<Info />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
