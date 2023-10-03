import React from 'react';
import '../styles/style.css';

export default function About() {
  return (
    <div>
      <img className="avi" src="avi.jpg" alt="Avatar" style={{width: "400px"}} />
      <h1>About me</h1>
      <p> I am an in-training full stack software developer! I am experienced in using MERN as well as SQL based full stack applications.</p>
      <p> I believe there is always room for improvement, this portfolio is very much a work in progress!</p>
      <p> You are witnessing a barebones portfolio but as I grow it will grow with me! </p>
    </div>
  );
}