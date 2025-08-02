import React from 'react';
import './CohortCard.css';

const CohortCard = ({ cohort }) => {
  const statusColors = {
    Scheduled: 'blue',
    Ongoing: 'green',
  };

  return (
    <div className="card">
      <h3 style={{ color: statusColors[cohort.status] || 'black' }}>
        {cohort.name}
      </h3>
      <p><strong>Started On</strong><br />{cohort.startDate}</p>
      <p><strong>Current Status</strong><br />{cohort.status}</p>
      <p><strong>Coach</strong><br />{cohort.coach}</p>
      <p><strong>Trainer</strong><br />{cohort.trainer}</p>
    </div>
  );
};

export default CohortCard;
