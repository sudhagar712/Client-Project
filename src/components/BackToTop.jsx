// components/BackToTop.jsx
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ArrowUpCircleFill } from "react-bootstrap-icons"; // Optional: Bootstrap icon

const BackToTop = () => {
  const [show, setShow] = useState(false);

  // Show button when scrolled more than 300px
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <Button
        variant="warning"
        onClick={scrollToTop}
        className="position-fixed bottom-0 end-0 m-4 rounded-circle shadow"
        style={{ width: "50px", height: "50px", zIndex: 9999 }}
      >
        <ArrowUpCircleFill size={24} />
      </Button>
    )
  );
};

export default BackToTop;
