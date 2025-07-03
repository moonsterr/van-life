import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="homeHero">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <div className="info">
        <p>Add adventure to your life by joining the #vanlife.</p>
        <p>Rent the perfect van to make your roadtrip perfect.</p>
      </div>
      <Link to="vans" className="homeBtn">
        Find your van
      </Link>
    </main>
  );
}
