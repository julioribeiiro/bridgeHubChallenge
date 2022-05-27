import React, { useState } from 'react';
import MainPage from './pages/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InvestmentsPage from './pages/investmentsPage';
import Header from './components/header';
import SideBar from './components/sidebar';

function App() {

  const [openedSideMenu, setOpenedSideMenu] = useState(false)

  const toggleSideMenu = () => {
    setOpenedSideMenu(!openedSideMenu);
  };

  return (
    <BrowserRouter>
      <Header toggle={toggleSideMenu} />
      <SideBar isOpen={openedSideMenu} toggle={toggleSideMenu} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/investments' element={<InvestmentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
