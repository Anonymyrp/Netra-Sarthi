import React from 'react';
import { MapPin, Navigation, Camera, Radio } from 'lucide-react';

function Home() {
  const handleLiveLocation = () => {
    console.log('Live Location clicked');
    // Add your live location logic here
  };

  const handlePassLocation = () => {
    console.log('Pass Location clicked');
    // Add your pass location logic here
  };

  const handleRecordings = () => {
    console.log('Recordings clicked');
    // Add your recordings logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Location Services
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your location tracking and recordings
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Live Location Button */}
          <button
            onClick={handleLiveLocation}
            className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 opacity-20">
              <Radio className="w-16 h-16 text-white" />
            </div>
            
            <div className="flex flex-col items-start text-left z-10 relative">
              <div className="bg-white/20 p-3 rounded-xl mb-4">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                Live Location
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Track real-time location updates with live streaming
              </p>
              
              <div className="flex items-center mt-2 text-white/90 text-sm">
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute h-2 w-2 rounded-full bg-white opacity-75"></span>
                  <span className="relative h-2 w-2 rounded-full bg-white"></span>
                </span>
                Live
              </div>
            </div>
          </button>

          {/* Pass Location Button */}
          <button
            onClick={handlePassLocation}
            className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 opacity-20">
              <MapPin className="w-16 h-16 text-white" />
            </div>
            
            <div className="flex flex-col items-start text-left z-10 relative">
              <div className="bg-white/20 p-3 rounded-xl mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                Pass Location
              </h3>
              <p className="text-emerald-100 text-sm mb-4">
                Share your current location with selected contacts
              </p>
              
              <div className="flex items-center space-x-1 text-white/90 text-sm">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center -ml-2">
                  <span className="text-xs">👤</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center -ml-2">
                  <span className="text-xs">👤</span>
                </div>
                <span className="ml-2">+ Share</span>
              </div>
            </div>
          </button>

          {/* Recordings Button */}
          <button
            onClick={handleRecordings}
            className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 opacity-20">
              <Camera className="w-16 h-16 text-white" />
            </div>
            
            <div className="flex flex-col items-start text-left z-10 relative">
              <div className="bg-white/20 p-3 rounded-xl mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                Recordings
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                Access and manage your location history recordings
              </p>
              
              <div className="flex items-center text-white/90 text-sm">
                <div className="flex items-center">
                  <div className="w-8 h-1 bg-white/30 rounded-full mr-2">
                    <div className="w-2/3 h-full bg-white rounded-full"></div>
                  </div>
                  <span>12 saved</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Click any button to access location services</p>
        </div>
      </div>
    </div>
  );
}

export default Home;