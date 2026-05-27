import React from 'react'

const Target = () => {
  const items = [
    {
      title: "Simple & Beginner-Friendly",
      desc: "Step-by-step interactive lessons built for developers at any level of coding journey.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      title: "Practice Quizzes",
      desc: "Instant quiz assessments to validate your understanding and lock in key concepts.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4M21 12a9 9 0 11-9-9"/>
        </svg>
      )
    },
    {
      title: "Verifiable Certificates",
      desc: "Gain a customized, high-quality completion certificate after mastering all course exercises.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="lesson" style={{ padding: "40px 20px" }}>
      <section className="goal" style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#ffffff", marginBottom: "30px", background: "linear-gradient(90deg, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          What You Will Get
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginTop: "40px" }}>
          {items.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: "rgba(17, 24, 39, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                padding: "30px 24px",
                textAlign: "left",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(59, 130, 246, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.2)";
              }}
            >
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6", marginBottom: "20px" }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#ffffff", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#9ca3af", lineHeight: "1.6" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Target