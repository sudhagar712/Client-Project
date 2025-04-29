import React from "react";

const ResultsExpected = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#fff3cd" }}
    >
      <hr />
      <h1 className="display-1 container fw-bold mb-5 ">
        Results <span className="text-warning">Excepted</span>
      </h1>

      {/* First Bar */}
      <div className="mb-4 container">
        <div className="d-flex w-100" style={{ height: "80px" }}>
          <div
            className="d-flex align-items-center justify-content-center text-white fw-bold text-center px-4"
            style={{
              backgroundColor: "#012b5c",
              flex: "90%",
              fontSize: "85%"
            }}
          >
            Draft and research 90% faster. Boost productivity and accuracy.
          </div>
          <div style={{ backgroundColor: "#000", flex: "10%" }}></div>
        </div>
      </div>

      {/* Second Bar */}
      <div>
        <div className="d-flex w-100" style={{ height: "80px" }}>
          <div style={{ backgroundColor: "#012b5c", flex: "30%" }}></div>
          <div
            className="d-flex align-items-center justify-content-center text-white fw-bold text-center px-4"
            style={{
              backgroundColor: "#000",
              flex: "70%",
              fontSize: "85%"
            }}
          >
            Spend less time drafting, more time practicing. Improve efficiency &
            precision.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsExpected;
