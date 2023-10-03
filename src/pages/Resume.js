import React from 'react';

export default function Resume() {
  return (
    <div className="d-flex flex-column custom-text">
      <div className="d-flex my-4 col-md-4 justify-content-center text-white">
        <span className="mx-2">Resume Still In Progress!!! Download Available Soon</span>
      </div>
      <div className="text-black">
        <div className="d-flex col-md-4 justify-content-center mx-5">
          <p> Front-end Proficiencies: </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
          </ul>
        </div>
        <div className="text-black">
          <div className="d-flex col-md-4 justify-content-center mx-5">
            <p> Back-end Proficiencies: </p>
            <ul>
              <li>APIs</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL Server, Sequelize</li>
              <li>MongoDB, Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}