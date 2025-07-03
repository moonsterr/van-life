import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../../api';
export default function Vans() {
  const [vanInfo, setVanInfo] = React.useState([]);
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    async function getVanInfo() {
      setLoading(true);
      try {
        const data = await getVans();
        setVanInfo(data);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    }

    getVanInfo();
  }, []);

  const vans = vanInfo
    .filter((van) => (typeFilter ? van.type === typeFilter : van))
    .map((van) => {
      return (
        <div className="van-card" data-id={van.id} key={van.id}>
          <Link to={van.id} state={{ search: searchParams.toString() }}>
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
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>An error occured, try again later</h1>;
  }
  return (
    <main className="vanHero">
      <div className="van-heading">
        <h1>Explore our van options</h1>
        <div className="options">
          {typeFilter !== 'simple' && (
            <Link
              to="?type=simple"
              className={`van-filter ${
                typeFilter === 'simple' ? 'selected' : ''
              }`}
            >
              Simple
            </Link>
          )}
          {typeFilter !== 'luxury' && (
            <Link
              to="?type=luxury"
              className={`van-filter ${
                typeFilter === 'luxury' ? 'selected' : ''
              }`}
            >
              Luxury
            </Link>
          )}
          {typeFilter !== 'rugged' && (
            <Link
              to="?type=rugged"
              className={`van-filter ${
                typeFilter === 'rugged' ? 'selected' : ''
              }`}
            >
              Rugged
            </Link>
          )}
          {typeFilter && (
            <Link to="" className="van-filter">
              All
            </Link>
          )}
        </div>
      </div>
      <div className="van-cards-container">{vans}</div>
    </main>
  );
}
