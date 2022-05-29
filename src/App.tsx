import React, { useState } from 'react';
import MainPage from './pages/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InvestmentsPage from './pages/investmentsPage';
import Header from './components/header';
import SideBar from './components/sidebar';
import DetailsPage from './pages/detailsPage';

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
        <Route path='/details/:id' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
