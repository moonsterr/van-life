import React from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {
  const [vanInfo, setVanInfo] = React.useState([]);
  // console.log(vanInfo)
  React.useEffect(() => {
    async function getVanInfo() {
      try {
        const res = await fetch('/api/vans');
        const data = await res.json();
        setVanInfo(data.vans); // Adjust depending on your JSON structure
        console.log(data.vans[0]);
      } catch (err) {
        console.log(err);
      }
    }

    getVanInfo();
  }, []);

  const vans = vanInfo.map((van) => {
    return (
      <div className="van-card" data-id={van.id} key={van.id}>
        <Link to={`/vans/${van.id}`}>
          <div className="van-image-holder">
            <img src={van.imageUrl} alt="picgture of the van" />
          </div>
        </Link>
        <div className="van-info">
          <h2>{van.name}</h2>
          <h2>{van.price}$</h2>
        </div>
        <div className={`van-type ${van.type}`}>
          {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
        </div>
      </div>
    );
  });
  return (
    <main className="vanHero">
      <div className="van-heading">
        <h1>Explore our van options</h1>
        <div className="options">
          <button className="van-filter">Simple</button>
          <button className="van-filter">Luxury</button>
          <button className="van-filter">Rugged</button>
        </div>
      </div>
      <div className="van-cards-container">{vans}</div>
    </main>
  );
}
