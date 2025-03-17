import React from 'react';

function BeatList({ beats }) {
  return (
    <div>
      <h2>Your Beats</h2>
      <ul>
        {beats.map((beat, index) => (
          <li key={index}>{beat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BeatList;