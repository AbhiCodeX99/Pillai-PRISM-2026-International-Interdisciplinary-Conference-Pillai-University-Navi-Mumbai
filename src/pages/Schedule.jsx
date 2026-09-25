import ScheduleSection from "../components/ScheduleSection";

export default function Schedule() {
  return (
    <>

      <section className="univ-inner-hero">
        <div className="container">
          <span className="univ-sub-badge">PROGRAM ITINERARY</span>
          <h1>Conference Day Schedule</h1>
          <p className="inner-hero-desc">
            Explore the comprehensive timeline for 19 December 2026, including inaugural addresses, plenary keynotes, parallel paper tracks, and the valedictory award ceremony.
          </p>
        </div>
      </section>

      <ScheduleSection />

    </>
  );
}
