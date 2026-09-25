import VenueSection from "../components/VenueSection";

export default function Venue() {
  return (
    <>

      <section className="univ-inner-hero">
        <div className="container">
          <span className="univ-sub-badge">LOCATION & CAMPUS LOGISTICS</span>
          <h1>Campus Venue & Travel Guide</h1>
          <p className="inner-hero-desc">
            Discover the campus facilities at Dr. K. M. Vasudevan Pillai Campus, New Panvel, Navi Mumbai, and get directions by air, rail, metro, or road.
          </p>
        </div>
      </section>

      <VenueSection />

    </>
  );
}
