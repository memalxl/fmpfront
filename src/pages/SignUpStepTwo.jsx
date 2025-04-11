import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer'; // ✅ Добавили футер

// Импорт всех трёх картинок
import Illustration1 from '../assets/signup2.png';
import Illustration2 from '../assets/signup2.1.png';
import Illustration3 from '../assets/signup2.3.png';

const SignUpStepTwo = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    city: '',
    postalCode: '',
    onlineWork: false,
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(form.city !== '' && form.postalCode.length >= 3);
  }, [form]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleContinue = () => {
    if (!isValid) return;
    sessionStorage.setItem('signupStep2', JSON.stringify(form));
    navigate('/signup/salary');
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
            <div className="h-1 rounded-full bg-[#1B1444]" style={{ width: '35%' }}></div>
            <div className="absolute top-0 left-0 h-1 bg-[#B6F0C2] w-full opacity-30 rounded-full"></div>
          </div>

          {/* Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold leading-tight mb-2">
              We Will Make Sure Your Preferences <br /> Up To Date
              <br /> What Is Your Location?
            </h1>
            <p className="text-gray-500 text-sm">
              We use this to match you nearby offers.
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-semibold block mb-1">City’s In Kyrgyzstan</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select your city</option>
                <option value="Bishkek">Bishkek</option>
                <option value="Osh">Osh</option>
                <option value="Jalal-Abad">Jalal-Abad</option>
                <option value="Karakol">Karakol</option>
                <option value="Talas">Talas</option>
                <option value="Naryn">Naryn</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                placeholder="e.g. 720000"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-8">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="onlineWork"
                checked={form.onlineWork}
                onChange={handleChange}
                className="accent-blue-500"
              />
              <span className="text-sm">I Am Interested In Online Working</span>
            </label>
          </div>

          {/* Button */}
          <button
            onClick={handleContinue}
            disabled={!isValid}
            className={`px-6 py-2 rounded-full text-white font-semibold ${
              isValid ? 'bg-sky-500 hover:bg-sky-600' : 'bg-sky-200 cursor-not-allowed'
            }`}
          >
            Continue
          </button>

          {/* Illustrations - ближе друг к другу и одного размера */}
          <div className="mt-12 flex justify-end gap-2 pr-4 flex-wrap items-end">
            <img src={Illustration1} alt="Step 2 Illustration 1" className="h-40 object-contain" />
            <img src={Illustration2} alt="Step 2 Illustration 2" className="h-40 object-contain" />
            <img src={Illustration3} alt="Step 2 Illustration 3" className="h-40 object-contain" />
          </div>
        </div>
      </div>

      {/* Footer в самом низу */}
      <Footer />
    </div>
  );
};

export default SignUpStepTwo;
