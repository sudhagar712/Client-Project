import React from "react";
import { FileText, Target, Timer } from "lucide-react"; 


const RealProblems = () => {
  return (
    <section className="real-problems-section">
      <div className="realproblemcolor py-5 d-flex align-items-center  ">
        <h1 className="display-1 container fw-bold ">
          Real <span className="text-warning">Problems</span>
        </h1>

        <img src="" alt="" />
      </div>

      <div className="bg-warning-subtle py-4">
        <div className="container">
          <div className="row text-center text-md-start align-items-center g-4">
            <div className="col-12 p-5 col-md-4 d-flex gap-3 align-items-start">
              <FileText size={100} className="text-primary" />
              <div>
                <p className="mt-3 fs-5 fw-bold  ">
                  Countless hours spent on drafting and researching
                </p>
              </div>
            </div>

            <div className="col-12 p-5 col-md-4 d-flex gap-3 align-items-start border-start border-end">
              <Target size={100} className="text-danger" />
              <div>
                <p className=" mt-3 fs-5 fw-bold  ">
                  Less time for strategizing & client interactions
                </p>
              </div>
            </div>

            <div className="col-12 p-5 col-md-4 d-flex gap-3 align-items-start">
              <Timer size={100} className="text-success" />
              <div>
                <p className=" mt-3 fs-5 fw-bold  ">
                  Time-consuming traditional methods leads to stress
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealProblems;
