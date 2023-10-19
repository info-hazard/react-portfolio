import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <div className="d-flex flex-column">
      <div className="col-md-12 ">
        <p className="display-4 mb-4 text-center text-black">Portfolio</p>
      </div>
      <div className="d-flex flex-row justify-content-around mb-4 mx-4">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
          <h2>FundBetter</h2>
            <a
              href="https://github.com/anud22/MVCProject"
              data-toggle="tooltip"
              data-placement="top"
              title="Fundbetter"
            >
              <img
                src="fundbetter.png"
                alt="Fundraiser Project"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
          <h2>Event Locator</h2>
            <a
              href="https://info-hazard.github.io/Event-Locator-Tool/"
              data-placement="top"
              title="Event Locator Tool"
            >
              <img
                src="event.png"
                alt="eventlocation tool"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
          <h2>J.A.T.E</h2>
            <a
              href="https://pwa-perfection12345-e4879f069d8f.herokuapp.com/"
              data-toggle="tooltip"
              data-placement="top"
              title="PWA Perfection"
            >
              <img
                src="jate.png"
                alt="text editor project"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around mb-4 mx-4">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "400px", width: "500px" }}>
            <h2>Workday Scheduler</h2>
            <a
              href="https://info-hazard.github.io/My-Workday-Calendar/"
              data-placement="top"
              title="Workday Scheduler"
            >
              <img
                src="workday.png"
                alt="work scheduler"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "400px", width: "500px" }}>
          <h2>Expressive Note Taker</h2>
            <a href="https://expressive-note-taker-24315-4b070bda390b.herokuapp.com/"    data-placement="top"
              title="Note Taker">
              <img
                src="note.png"
                alt="note taker"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
          <h2>Weather Dashboard</h2>
            <a
              href="https://info-hazard.github.io/weather-dash/"
              data-toggle="tooltip"
              data-placement="top"
              title="Weather Dashboard"
            >
              <img
                src="weather.png"
                alt="Weather Dashboard"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-4 align-items-center justify-content-center">
          <div style={{ height: "500px", width: "500px" }}>
          <h2>This or That!</h2>
            <a
              href="https://this-or-that-5dce821d9570.herokuapp.com/"
              data-toggle="tooltip"
              data-placement="top"
              title="This or That"
            >
              <img
                src="thisorthat.png"
                alt="Survey Project"
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}