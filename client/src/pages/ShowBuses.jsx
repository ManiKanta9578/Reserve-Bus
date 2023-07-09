import "../Styles/AvailableBus.css";
import Filter from "../components/ShowBuses/Filter";
import Trips from "../components/ShowBuses/Trips";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AvailableBus = (props) => {
  return (
    <>
      <NavBar />
      <div className="flex m-2">
        <div className="hidden md:block">
          <Filter />
        </div>
        <div className="w-full">
          <Trips />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AvailableBus;
