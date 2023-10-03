import React from 'react';
import Navbar from './Navbar';
import '../styles/style.css'

export default function Header({ currentPage, handlePageChange }) {
    return (
      <header>
          <h1>Zachariah "Casper" Go</h1>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
    );
  }