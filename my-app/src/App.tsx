import { BrowserRouter, Routes, Route } from "react-router-dom";

import './scss/app.scss';
import Home from './pages/Home';
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />

      </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
