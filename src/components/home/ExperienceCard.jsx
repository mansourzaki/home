import React from 'react';

import {
  Col,
} from "react-bootstrap";


const ExperienceCard = ({ data }) => {
  return (
    <Col lg={6} md={12} className="mb-4">
      <div className="experience-card text-center p-4 shadow-sm bg-white rounded">
        <img src={data.companylogo} alt="Company Logo" className="mb-3" style={{ height: '80px', width: '80px', objectFit: 'contain' }} />
        <h5 className="mb-1">{data.role}</h5>
        <p className="text-muted">{data.date}</p>
      </div>
    </Col>
  );
};

export default ExperienceCard;