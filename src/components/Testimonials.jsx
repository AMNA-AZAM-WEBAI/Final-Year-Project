import "../styles/testimonial.css";
const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Trusted by students worldwide</h2>

      <div className="testimonial-grid">
        <div className="testimonial">
          <p>“Helped me fix my pronunciation.”</p>
          <span>Ahmad K.</span>
        </div>

        <div className="testimonial">
          <p>“Very helpful for beginners.”</p>
          <span>Sarah M.</span>
        </div>

        <div className="testimonial">
          <p>“Excellent progress tracking.”</p>
          <span>Omar Y.</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
