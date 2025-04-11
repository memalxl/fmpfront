import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="text-xl font-bold">&larr;</button>
  );
};

export default BackButton;
