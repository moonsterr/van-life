import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function VanDetail() {
  const { id } = useParams();
  const [vanInfo, setVanInfo] = React.useState(null);

  React.useEffect(() => {
    async function getVan() {
      const res = await fetch(`/api/vans/${id}`);
      const data = await res.json();
      setVanInfo(data.vans);
    }
    getVan();
  }, [id]);
  return (
    <div className="van-detail-container">
      {vanInfo ? (
        <div className="van-detail">
          <Link to="/vans"> Get back to Vans</Link>
          <img src={vanInfo.imageUrl} />
          <i className={`van-type ${vanInfo.type} selected`}>{vanInfo.type}</i>
          <h2>{vanInfo.name}</h2>
          <p className="van-price">
            <span>${vanInfo.price}</span>/day
          </p>
          <p>{vanInfo.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
