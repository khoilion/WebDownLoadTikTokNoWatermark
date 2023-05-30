import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import DownloadApp from "../src/pages/downloadApp/downloadApp";
import Contacts from "./pages/contacts/contacts";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy";
import Questions from "./pages/questions/questions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/downloadApp" element={<DownloadApp />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
