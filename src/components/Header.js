import React from 'react';
import Navbar from './Navbar';

export default function Header({ currentPage, handlePageChange }) {
    return (
      <header>
        <div>
          <h1>Zachariah "Casper" Go</h1>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
      </header>
    );
  }