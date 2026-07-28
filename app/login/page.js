'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

function ShipNowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M2 20L8 4H14L8 20H2Z" fill="#333333" />
      <path d="M12 20L18 4H24L18 20H12Z" fill="#000000" opacity="0.2" />
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    localStorage.setItem('shipnow_user', JSON.stringify({ name: 'John Doe', email: formData.email }));
    router.push('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* LEFT / TOP — Purple Section */}
      <div className="w-full md:w-1/2 bg-[#7B6EF6] relative overflow-hidden
                      flex flex-col items-center justify-between
                      px-8 pt-10 pb-12 md:min-h-screen">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <ShipNowIcon />
          <span className="text-white font-bold text-xl tracking-widest">SHIPNOW</span>
        </div>

        {/* Images */}
       <div className="relative" style={{ width: '320px', height: '320px' }}>
          {/* Big image — truck */}
          <div className="absolute left-0 top-10 rounded-2xl overflow-hidden shadow-2xl"
               style={{ width: '230px', height: '190px' }}>
            <img
              src="/3941f220471fc3b6f1bd491da42aa4f95e83d2de.jpg"
              alt="Delivery truck"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Small image — girl with phone */}
          <div className="absolute rounded-2xl overflow-hidden shadow-2xl z-10"
               style={{ width: '145px', height: '175px', left: '170px', top: '0px' }}>
            <img
              src="/fd494962a6c866f2b2bfb19d5fbc3aae6c10e9b1.jpg"
              alt="Person with phone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Welcome to ShipNow
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
      </div>

      {/* RIGHT / BOTTOM — Form Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center
                      px-8 py-12 md:py-0 md:min-h-screen">
        <div className="w-full max-w-sm">

          {/* Logo icon */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-[#7B6EF6] rounded-xl flex items-center justify-center">
              <ShipNowIcon />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm text-center mb-8">
            Log in to continue managing your logistics with ShipNow
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter a valid email address"
                className={`input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className={`input pr-10 ${errors.password ? 'input-error' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember me + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                  style={{ accentColor: '#7B6EF6' }}
                />
                <span className="text-sm text-gray-600">Remember Me</span>
              </label>
              <button type="button" className="text-sm text-[#7B6EF6] hover:underline font-medium">
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Login
            </button>

            {/* Register */}
            <p className="text-center text-sm text-gray-500">
              Don&apos;t have an account?{' '}
              <button type="button" className="text-[#7B6EF6] font-medium hover:underline">
                Register
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}