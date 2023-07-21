import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FindJob from "./pages/FindJob";
import CompanyApplication from "./pages/CompanyApplication";
import CompanyReviews from "./pages/CompanyReviews";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FindJob />} />
          <Route path="/companyApplication" element={<CompanyApplication />} />
          <Route path="/companyReviews" element={<CompanyReviews />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
