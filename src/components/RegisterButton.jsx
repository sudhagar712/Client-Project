import React from "react";
import { Link as ScrollLink } from "react-scroll";

const RegisterButton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <ScrollLink
        to="contact"
        smooth={true}
        duration={300}
        offset={-50} 
        className="text-decoration-none"
      >
        <button
          className="p-4 px-5 text-white"
          style={{ backgroundColor: "#0c2c45" }}
        >
          Register For Free
        </button>
      </ScrollLink>
    </div>
  );
};

export default RegisterButton;
