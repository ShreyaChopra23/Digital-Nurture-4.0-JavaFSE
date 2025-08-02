import React from "react";
import "./App.css";

const CohortCard = ({ code, track, startedOn, status, coach, trainer, color }) => {
  return (
    <div className="cohort-card">
      <h3 style={{ color }}>{code} - {track}</h3>
      <p><strong>Started On</strong><br />{startedOn}</p>
      <p><strong>Current Status</strong><br />{status}</p>
      <p><strong>Coach</strong><br />{coach}</p>
      <p><strong>Trainer</strong><br />{trainer}</p>
    </div>
  );
};

function App() {
  const cohorts = [
    {
      code: "INTADMDF10",
      track: ".NET FSD",
      startedOn: "22-Feb-2022",
      status: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose",
      color: "blue"
    },
    {
      code: "ADM21JF014",
      track: "Java FSD",
      startedOn: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith",
      color: "green"
    },
    {
      code: "CDBJF21025",
      track: "Java FSD",
      startedOn: "24-Dec-2021",
      status: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe",
      color: "green"
    }
  ];

  return (
    <div className="App">
      <h1>Cohorts Details</h1>
      <div className="card-container">
        {cohorts.map((cohort, index) => (
          <CohortCard key={index} {...cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;



