import React from 'react';

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
    <div
      className="bg-indigo-900 h-1.5 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

export default ProgressBar;
