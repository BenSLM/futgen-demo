import React from 'react';

function PlayerView() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Player Profile</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Player Information</h5>
          <p className="card-text">
            This page will display detailed information about a football player,
            including stats, biography, current club, and career highlights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayerView; 