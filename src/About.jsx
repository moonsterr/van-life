import aboutImg from './assets/about-hero.png';

export default function About() {
  return (
    <main className="aboutHero">
      <div className="about-img">
        <img src={aboutImg} alt="Van image" />
      </div>
      <div className="under-img">
        <h1>Dont squeeze into a sedan when you could relax in a van.</h1>
        <div className="about-text">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-modal">
          <h2>Your destination is waiting</h2>
          <h2>Your van is ready</h2>
          <button className="about-modal-btn">Explore our vans</button>
        </div>
      </div>
    </main>
  );
}
