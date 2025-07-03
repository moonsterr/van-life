import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/vans/Vans';
import VanDetail from './pages/vans/vanDeatail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/dashboard';
import Review from './pages/Host/reviews';
import Income from './pages/Host/income';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import VanDetailLayout from './components/VanDetailLayout';
import Photos from './components/detailNav/photos';
import Details from './components/detailNav/details';
import Pricing from './components/detailNav/pricing';
import NotFound from './pages/404page';
import Login from './pages/login';
import Signup from './pages/singup';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />

          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="vans" element={<Vans />}></Route>
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
            <Route path="vans" element={<HostVans />}></Route>
            <Route path="vans/:id" element={<VanDetailLayout />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
