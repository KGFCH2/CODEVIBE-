import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                color: "#ffffff",
                border: "none",
                outline: "none",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(29, 78, 216, 0.4)",
                transition: "opacity 0.3s ease, transform 0.3s ease, background 0.3s ease",
                opacity: showButton ? 1 : 0,
                transform: showButton ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
                pointerEvents: showButton ? "all" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                zIndex: 9999,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.08)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(29, 78, 216, 0.6)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = showButton ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(29, 78, 216, 0.4)";
            }}
        >
            ↑
        </button>
    );
};

export default ScrollToTop;