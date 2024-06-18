// src/components/HomePage.js
import { signOut } from 'firebase/auth'; // Import signOut function from Firebase
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'; // Import useAuthState hook
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the auth instance
import Footer from './Footer'; // Import the Footer component
import NavBar from './NavBar';

const HomePage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth); // Get the current user state from Firebase auth

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to WelcomePage after logout
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <>
      <NavBar />
      <div className="relative min-h-screen p-8" style={{ background: 'linear-gradient(to top, #0fd850 0%, #f9f047 100%)' }}>
        <div className="absolute top-4 right-4">
          {user && (
            <div className="flex items-center space-x-4">
              <p className="text-gray-800">Logged in as: {user.email}</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-black">Welcome to Farmer Assist</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-pointer w-80"
            onClick={() => navigate('/query-submission')}
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Query Submission</h2>
            <ul className="text-left text-gray-600">
              <li className="mb-2">Multilingual Support</li>
              <li className="mb-2">Expert Response System</li>
              <li className="mb-2">Real-time Notifications</li>
              <li className="mb-2">Knowledge Base</li>
            </ul>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-pointer w-80"
            onClick={() => navigate('/agricultural-schemes')}
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Agricultural Schemes Details</h2>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-pointer w-80"
            onClick={() => navigate('/latest-technologies')}
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Latest Agricultural Technologies</h2>
          </div>
        </div>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
};

export default HomePage;
