import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import HostDetail from '../pages/Host/HostDetail';
export default function VanDetailLayout() {
  const [vanData, setVanData] = React.useState(null);
  console.log('vandata', vanData);
  return (
    <div className="host-van-detail">
      <Link className="idkLink" to="/host/vans">
        Get Back To Vans
      </Link>
      <div className="host-van-detail-card">
        <HostDetail setVanData={setVanData} />
        <Outlet context={{ vanData }} />
      </div>
    </div>
  );
}
