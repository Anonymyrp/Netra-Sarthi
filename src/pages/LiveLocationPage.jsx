import React from 'react';
import { Radio, Navigation, Map } from 'lucide-react';

const LiveLocationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Radio size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Live Location</h1>
              <p className="text-gray-600">Real-time location tracking and monitoring</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tracking Status</span>
                  <span className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Last Updated</span>
                  <span className="text-gray-800 font-medium">Just now</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Signal Strength</span>
                  <span className="text-gray-800 font-medium">Excellent</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Live Map</h3>
              <div className="h-64 bg-gray-700 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Map size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-300">Live map view would appear here</p>
                  <p className="text-gray-400 text-sm mt-2">Real-time location tracking enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLocationPage;