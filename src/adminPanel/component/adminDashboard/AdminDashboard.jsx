import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
 import bgImage from "../../../assets/images/service.png"; 
import SummaryCards from './Summarycard';
import RecentComplaints from './RecentComplaints';

const AdminDashboard = () => {
  return (
    <div
      className="d-flex flex-md-row vh-100 overflow-hidden"
      style={{
        backgroundColor: "#0d6efd",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "fit",
        backgroundRepeat: "repeat",
        backgroundPosition: "center center"
      }}
    >
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column overflow-auto ">
        <Header />
        <main
          className="flex-grow-1 overflow-auto p-3 opacity-75"
          style={{ backgroundColor: "#144481" }}
        >
            <SummaryCards/>
            <RecentComplaints/>
         
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard
