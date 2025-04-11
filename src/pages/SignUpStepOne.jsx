import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer'; // ✅ добавлен футер
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

import Illustration1 from '../assets/signup1.png';
import Illustration2 from '../assets/signup1.2.png';
import Illustration3 from '../assets/signup1.3.png';

const SignUpStepOne = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+\d{10,14}$/;

    setIsValid(
      form.name.length >= 2 &&
      form.lastName.length >= 2 &&
      emailRegex.test(form.email) &&
      phoneRegex.test(form.phone)
    );
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (!isValid) return;
    sessionStorage.setItem('signupStep1', JSON.stringify(form));
    navigate('/signup/location');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />

        <div className="max-w-5xl mx-auto px-6 pt-8 pb-16">
          {/* Top nav */}
          <div className="flex justify-between items-center mb-4">
            <BackButton />
            <button className="text-sm font-semibold text-gray-800">Save And Exit</button>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 rounded-full bg-gray-200 mb-8 relative overflow-hidden">
            <div className="h-1 rounded-full bg-[#1B1444]" style={{ width: '8%' }}></div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-8">
            Give Us Your Primary Information
          </h1>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-sm font-medium text-gray-900 mb-1 block">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Write Your Name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900 mb-1 block">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Write Your Last Name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900 mb-1 block">Email*</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900 mb-1 block">Phone Number*</label>
              <PhoneInput
                country={'kg'}
                value={form.phone.replace('+', '')}
                onChange={(phone) => setForm({ ...form, phone: `+${phone}` })}
                enableAreaCodes={true}
                countryCodeEditable={false}
                disableDropdown={false}
                inputStyle={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  paddingLeft: '48px',
                  fontSize: '16px',
                }}
                buttonStyle={{
                  border: 'none',
                  background: 'transparent',
                }}
                placeholder="+996700123456"
              />
            </div>
          </div>

          {/* Button */}
          <div className="sm:col-span-1">
            <button
              onClick={handleContinue}
              disabled={!isValid}
              className={`px-6 py-2 rounded-full text-white font-semibold ${
                isValid ? 'bg-sky-500 hover:bg-sky-600' : 'bg-sky-200 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>

          {/* Illustrations */}
          <div className="mt-12 flex justify-end gap-4 pr-4 flex-wrap">
            <img src={Illustration1} alt="Illustration 1" className="w-32 sm:w-40 object-contain" />
            <img src={Illustration2} alt="Illustration 2" className="w-32 sm:w-40 object-contain" />
            <img src={Illustration3} alt="Illustration 3" className="w-32 sm:w-40 object-contain" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUpStepOne;
