import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ImportantDates from "./pages/ImportantDates";
import Committee from "./pages/Committee";
import Schedule from "./pages/Schedule";
import Venue from "./pages/Venue";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import CallForPapers from "./pages/CallForPapers";
import SiteLayout from "./components/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

export default App;
