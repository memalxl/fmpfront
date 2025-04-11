import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

import Img1 from '../assets/signup2.3.png';
import Img2 from '../assets/signup1.3.png';
import Img3 from '../assets/signup2.png';

const SignUpStepFour = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(position !== '');
  }, [position]);

  const handleContinue = () => {
    if (!isValid) return;
    sessionStorage.setItem('signupStep4', JSON.stringify({ position }));
    navigate('/signup/complete'); // финальный путь
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />

        <div className="max-w-4xl mx-auto px-6 pt-8 pb-16">
          {/* Top nav */}
          <div className="flex justify-between items-center mb-4">
            <BackButton />
            <button className="text-sm font-semibold text-gray-800">Save And Exit</button>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 rounded-full bg-gray-200 mb-6 relative overflow-hidden">
            <div className="h-1 rounded-full bg-[#1B1444]" style={{ width: '100%' }}></div>
          </div>

          {/* Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">What Offer Are You Looking For?</h1>
            <p className="text-gray-500 text-sm">
              This Helps us match you to relevant offers.
            </p>
          </div>

          {/* Select */}
          <div className="mb-1">
            <label className="text-sm font-semibold block mb-1">Desired Offer Title</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select your desired title</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="UX Designer">UX Designer</option>
              <option value="QA Tester">QA Tester</option>
              <option value="HR Specialist">HR Specialist</option>
              <option value="Marketing Analyst">Marketing Analyst</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Add Up to ten offer titles</p>
          </div>

          {/* Button */}
          <button
            onClick={handleContinue}
            disabled={!isValid}
            className={`mt-6 px-6 py-2 rounded-full text-white font-semibold ${
              isValid ? 'bg-sky-500 hover:bg-sky-600' : 'bg-sky-200 cursor-not-allowed'
            }`}
          >
            Continue
          </button>

          {/* Illustrations */}
          <div className="mt-12 flex justify-end gap-3 pr-4 flex-wrap">
            <img src={Img1} alt="Step Illustration 1" className="w-28 sm:w-36 object-contain" />
            <img src={Img2} alt="Step Illustration 2" className="w-28 sm:w-36 object-contain" />
            <img src={Img3} alt="Step Illustration 3" className="w-28 sm:w-36 object-contain" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUpStepFour;
