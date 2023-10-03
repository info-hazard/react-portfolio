import React from 'react';
import Navbar from './Navbar';

export default function Header({ currentPage, handlePageChange }) {
    return (
      <header>
        <div>
          <h1>name</h1>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
      </header>
    );
  }