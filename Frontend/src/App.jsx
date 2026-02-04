import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import FeatureSection from "./Pages/FeatureSection";
import Capabilities from "./Pages/Capabilities";
import Steps from "./Pages/Steps";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Pages/Login";
import Support from "./Pages/Support";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfServices";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import { ToastContainer } from "react-toastify";

function HomePage() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <FeatureSection />
      <Capabilities />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<Steps />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsOfService/>}/>
         <Route path="/about" element={<About/>}/>
        <Route element={<Layout/>}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
