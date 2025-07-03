import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
export default function HostDetail({ setVanData }) {
  const { id } = useParams();
  const [vanInfo, setVanInfo] = React.useState(null);
  React.useEffect(() => {
    async function getVan() {
      const res = await fetch(`/api/host/vans/${id}`);
      const data = await res.json();
      // console.log(data.vans[0]);
      setVanInfo(data.vans[0]);
      setVanData(data.vans[0]);
      // console.log(vanInfo.imageUrl);
    }
    getVan();
  }, [id]);
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };
  return (
    <>
      {vanInfo && (
        <>
          <div className="detail-heading">
            <div className="detail-heading-img">
              <img src={vanInfo.imageUrl} alt="Picture of the van" />
            </div>
            <div className="detail-heading-text">
              <div className={`van-type ${vanInfo.type}`}>{vanInfo.type}</div>
              <h1>{vanInfo.name}</h1>
              <h2>
                <span className="pricingvan">{`$${vanInfo.price}`}</span>/day
              </h2>
            </div>
          </div>
          <nav className="details-nav-links">
            <NavLink
              to=""
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </NavLink>
          </nav>
        </>
      )}
      {!vanInfo && <h1>...Loading</h1>}
    </>
  );
}
