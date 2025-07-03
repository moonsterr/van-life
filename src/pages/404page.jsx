import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="container-404">
      <h1 className="errh1">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to=".." relative="path" className="errbtn">
        Return to Vanlife
      </Link>
    </div>
  );
}
