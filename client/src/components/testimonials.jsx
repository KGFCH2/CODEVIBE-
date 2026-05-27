import React from "react";

const testimonials = [
  {
    name: "Student A",
    role: "Frontend Learner",
    feedback:
      "This platform helped me understand React basics easily and practice coding without any setup.",
  },
  {
    name: "Student B",
    role: "Beginner Programmer",
    feedback:
      "Great structured learning experience for beginners. The lessons are simple and interactive.",
  },
  {
    name: "Student C",
    role: "Web Development Student",
    feedback:
      "I really liked the instant feedback system and progress tracking dashboard.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#ffffff", marginBottom: "10px" }}>What Learners Say</h2>
      <p className="testimonial-subtitle" style={{ color: "#9ca3af", marginBottom: "40px", fontSize: "1.1rem" }}>
        Feedback from learners using CodeVibe to improve their coding skills.
      </p>

      <div className="testimonial-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
        {testimonials.map((item, index) => (
          <div 
            className="testimonial-card" 
            key={index}
            style={{
              background: "rgba(30, 41, 59, 0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "35px 25px",
              textAlign: "left",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              cursor: "default"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(59, 130, 246, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
            }}
          >
            <div className="quote-icon" style={{ fontSize: "2rem", color: "#3b82f6", marginBottom: "15px" }}>💬</div>

            <p className="testimonial-feedback" style={{ color: "#d1d5db", fontSize: "0.95rem", lineHeight: "1.6", fontStyle: "italic", marginBottom: "20px" }}>
              "{item.feedback}"
            </p>

            <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#ffffff", marginBottom: "4px" }}>{item.name}</h3>
            <span style={{ fontSize: "0.85rem", color: "#9ca3af", fontWeight: "500" }}>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Testimonials;