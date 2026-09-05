import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FleetPage from "./pages/FleetPage";
import ServicesPage from "./pages/ServicesPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import CorporatePage from "./pages/CorporatePage";
import LocationsPage from "./pages/LocationsPage";
import AboutPage from "./pages/AboutPage";
import BookRide from "./pages/BookRide";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book-ride" element={<BookRide />} />
      </Route>
    </Routes>
  );
}