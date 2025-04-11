import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

// Картинки из шагов 1 и 2, перемешаны
import Img1 from '../assets/signup2.3.png';
import Img2 from '../assets/signup1.3.png';
import Img3 from '../assets/signup2.png';

const SignUpStepThree = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    salary: '',
    period: '',
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(form.salary !== '' && form.period !== '');
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (!isValid) return;
    sessionStorage.setItem('signupStep3', JSON.stringify(form));
    navigate('/signup/position');
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
            <div className="h-1 rounded-full bg-[#1B1444]" style={{ width: '65%' }}></div>
            <div className="absolute top-0 left-0 h-1 bg-[#B6F0C2] w-full opacity-30 rounded-full"></div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold mb-2">What Is Minimum Salary You Want?</h1>
          <p className="text-gray-500 text-sm mb-6">
            We use this to match you nearby offers that approximately pay this amount or more
          </p>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div>
              <label className="text-sm font-semibold block mb-1">Minimum Salary Amount</label>
              <select
                name="salary"
                value={form.salary}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select amount</option>
                <option value="10000">10 000</option>
                <option value="20000">20 000</option>
                <option value="30000">30 000</option>
                <option value="40000">40 000</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Amount is by Soms</p>
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1">Payment Period</label>
              <select
                name="period"
                value={form.period}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select period</option>
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="hourly">Hourly</option>
              </select>
            </div>
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
            <img src={Img1} alt="Character A" className="w-28 sm:w-36 object-contain" />
            <img src={Img2} alt="Character B" className="w-28 sm:w-36 object-contain" />
            <img src={Img3} alt="Character C" className="w-28 sm:w-36 object-contain" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUpStepThree;
