// Updated Home.jsx with functional buttons
import React from 'react';
import { MapPin, Camera, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <header className="mb-16 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-bold text-2xl shadow-lg">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Radio size={24} />
              </div>
              Netra Sarthi
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Prashala
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Intelligent location tracking and management system for enhanced safety and navigation
          </p>
        </header>

        {/* Services Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Location Services
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Manage your location tracking and recordings with our comprehensive suite of tools
          </p>
        </div>

        {/* Functional Feature Cards with Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Live Location Card - Navigates to Live Location Page */}
          <Link 
            to="/live-location"
            className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-6 right-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Radio className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <div className="flex flex-col items-start text-left relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Live Location
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Track real-time location updates with continuous live streaming and instant notifications
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="flex h-3 w-3 mr-3">
                    <span className="animate-ping absolute h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative h-3 w-3 rounded-full bg-blue-500"></span>
                  </span>
                  Real-time tracking
                </div>
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                  Live streaming enabled
                </div>
              </div>
              
              <div className="mt-6 text-blue-600 font-semibold flex items-center gap-2">
                <span>Open Live Location</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Pass Location Card - Navigates to Pass Location Page */}
          <Link 
            to="/pass-location"
            className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-6 right-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            
            <div className="flex flex-col items-start text-left relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Pass Location
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Share your current location securely with selected contacts or emergency services
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-emerald-600 font-medium">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 mr-3"></span>
                  Contact-based sharing
                </div>
                <div className="flex items-center text-emerald-600 font-medium">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 mr-3"></span>
                  Emergency mode available
                </div>
              </div>
              
              <div className="mt-6 text-emerald-600 font-semibold flex items-center gap-2">
                <span>Open Pass Location</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Recordings Card - Navigates to Recordings Page */}
          <Link 
            to="/recordings"
            className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-6 right-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            
            <div className="flex flex-col items-start text-left relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Recordings
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Access and manage your complete location history with detailed analytics and insights
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-purple-600 font-medium">
                  <span className="w-3 h-3 rounded-full bg-purple-500 mr-3"></span>
                  7-day history retention
                </div>
                <div className="flex items-center text-purple-600 font-medium">
                  <span className="w-3 h-3 rounded-full bg-purple-500 mr-3"></span>
                  Smart auto-cleanup
                </div>
              </div>
              
              <div className="mt-6 text-purple-600 font-semibold flex items-center gap-2">
                <span>Open Recordings</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* How it works */}
        <div className="max-w-3xl mx-auto mt-20 p-8 bg-white rounded-3xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            How to Use Location Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-800">Select Service</h4>
              <p className="text-gray-600 text-sm">
                Click any location service card above
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-800">Use the Feature</h4>
              <p className="text-gray-600 text-sm">
                Navigate to the service page for full functionality
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-800">Manage Settings</h4>
              <p className="text-gray-600 text-sm">
                Configure preferences and access all features
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;