import React, { useState, useEffect } from "react";
import { Menu, X, MapPin, Camera, Radio } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Admissions", path: "/admissions" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const handleLiveLocation = () => {
    console.log("Live Location clicked");
    // Your live location logic
  };

  const handlePassLocation = () => {
    console.log("Pass Location clicked");
    // Your pass location logic
  };

  const handleRecordings = () => {
    console.log("Recordings clicked");
    // Your recordings logic
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "shadow-sm py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VP</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-800">
                    Netra Sarthi
                  </h1>
                  <p className="text-xs text-gray-600">Prashala</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Location Action Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <button
                onClick={handleLiveLocation}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
              >
                <Radio size={18} />
                <span>Live Location</span>
              </button>
              
              <button
                onClick={handlePassLocation}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
              >
                <MapPin size={18} />
                <span>Pass Location</span>
              </button>
              
              <button
                onClick={handleRecordings}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
              >
                <Camera size={18} />
                <span>Recordings</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Navigation */}
              <div className="space-y-1 mb-6">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Location Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    handleLiveLocation();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium"
                >
                  <Radio size={20} />
                  <span>Live Location</span>
                </button>
                
                <button
                  onClick={() => {
                    handlePassLocation();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium"
                >
                  <MapPin size={20} />
                  <span>Pass Location</span>
                </button>
                
                <button
                  onClick={() => {
                    handleRecordings();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium"
                >
                  <Camera size={20} />
                  <span>Recordings</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Action Buttons for Mobile (when menu is closed) */}
      {!isMobileMenuOpen && (
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleRecordings}
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
              title="Recordings"
            >
              <Camera size={22} />
            </button>
            <button
              onClick={handlePassLocation}
              className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
              title="Pass Location"
            >
              <MapPin size={22} />
            </button>
            <button
              onClick={handleLiveLocation}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all animate-pulse"
              title="Live Location"
            >
              <Radio size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;