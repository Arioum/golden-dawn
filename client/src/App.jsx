import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import MenuPage from "./pages/Menu/MenuPage";
import ReservationPage from "./pages/Reservation/ReservationPage";
import ContactPage from "./pages/Contact/ContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/menu' element={<MenuPage />} />
        <Route exact path='/reservation' element={<ReservationPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
