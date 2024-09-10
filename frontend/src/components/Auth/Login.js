import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-white-500 to-indigo-500">
      <div className="flex w-3/4 max-w-4xl rounded-lg shadow-lg border-2">
        <div className="w-full p-8 lg:w-1/2 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">Hello!</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
            </div>
            <Link to="/Profile">
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Sign In
            </button>
            </Link>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-600 hover:underline">
              Create
            </Link>
          </p>
        </div>
        <div className="hidden lg:block lg:w-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 p-8 text-white rounded-r-lg">
          <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
          <p className="mb-6">Login to access your account and explore the platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
