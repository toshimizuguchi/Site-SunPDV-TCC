import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './Components/styles/App.css'; // estilização da pagina css
import App from './App.jsx';
import PagSobr from './Components/PagSobr.jsx';
import PagDown from './Components/PagDown.jsx';
import DpsInstall from './Components/DpsInstall.jsx';
import Register from './Components/Register.jsx';
import PrivacyPolicy from './Components/PrivacyPolitics.jsx';
import TermsOfService from './Components/TermsOfService.jsx';
import LicensePage from './Components/LicensePage.jsx';





createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Sobre-Nos" element={<PagSobr />} />
      <Route path="/Download" element={<PagDown />} />
      <Route path="/obrigado" element={<DpsInstall />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/privacidade" element={<PrivacyPolicy />} />
      <Route path="/termos" element={<TermsOfService />} />
      <Route path="/licenca" element={<LicensePage />} />

    </Routes>
  </BrowserRouter>
);
