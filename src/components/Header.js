import React from 'react';
import { Link } from 'react-router-dom' 

export default function Header() {
  return (
    <div className="App-header">
      <span>Paisley Paws Avenue</span>
      <Link to="/about" className="aboutLink">About</Link>
    </div>
  );
}
