import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import GetUser from "../../lib/GetUser";

const navLinks = [
  { href: "/", label: "Home", isPrivate: false },
  { href: "/find-tutors", label: "Find Tutors", isPrivate: false },
  { href: "/about", label: "About Us", isPrivate: false },
  { href: "/add-tutorial", label: "Add Tutorial", isPrivate: true },
  { href: "/my-tutorials", label: "My Tutorials", isPrivate: true },
  { href: "/my-booked-tutors", label: "My Bookings", isPrivate: true },
  { href: "/profile", label: "Profile", isPrivate: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { user, logoutuser } = GetUser();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const handleLogout = () => {
    logoutuser();
    setIsProfileOpen(false);
  };

  const publicLinks = navLinks.filter(link => !link.isPrivate);
  const privateLinks = navLinks.filter(link => link.isPrivate);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800">
      <nav className="bg-white/80 backdrop-blur-sm text-gray-900 w-full dark:bg-gray-900/80 dark:text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px]">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LinguaLearn
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Public Links */}
              <div className="flex gap-6">
                {publicLinks.map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium hover:text-blue-600 transition-colors dark:hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Private Links (visible when logged in) */}
              {user && (
                <div className="flex gap-6">
                  {privateLinks.slice(0, -1).map(link => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-sm font-medium hover:text-blue-600 transition-colors dark:hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* User Profile / Login */}
              {user ? (
                <div className="relative ml-2">
                  <button 
                    onClick={toggleProfile}
                    className="flex items-center gap-2 focus:outline-none group"
                  >
                    <Avatar className="border border-gray-200 dark:border-gray-700">
                      <AvatarImage src={user?.photoURL} />
                      <AvatarFallback className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {user?.displayName?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''} text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200`} />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-sm py-1 z-50 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link
                          to="/profile"
                          onClick={() => setIsProfileOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          Log Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to="/login" className="ml-2">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
                    Login
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden border-t border-gray-100 dark:bg-gray-900/95 dark:border-gray-800"
            >
              <div className="px-2 pt-2 pb-4 space-y-2">
                {/* Public Links */}
                {publicLinks.map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Private Links (visible when logged in) */}
                {user && privateLinks.map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Login/Logout Button */}
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}