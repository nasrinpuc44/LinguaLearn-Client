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
  { href: "/add-tutorial", label: "Add Tutorial", isPrivate: true },
  { href: "/my-tutorials", label: "My Tutorials", isPrivate: true },
  { href: "/my-booked-tutors", label: "My Bookings", isPrivate: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); ``
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

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 w-full shadow-md dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">LinguaLearn</span>
          </Link>

    
          <div className="hidden md:flex items-center gap-6">
            
            <div className="flex gap-4">
              {navLinks
                .filter(link => !link.isPrivate)
                .map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>

            
            {user && (
              <div className="flex gap-4">
                {navLinks
                  .filter(link => link.isPrivate)
                  .map(link => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            )}

           
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-white hover:bg-white/10"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

           
            {user ? (
              <div className="relative ml-4">
                <button 
                  onClick={toggleProfile}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <Avatar>
                    <AvatarImage src={user?.photoURL} />
                    <AvatarFallback>
                      {user?.displayName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 dark:bg-gray-800"
                  >
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Log Out
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <Link to="/login" className="ml-4">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
           
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-white hover:bg-white/10"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 overflow-hidden dark:bg-gray-900/95"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks
                .filter(link => !link.isPrivate || user)
                .map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}

              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-white/10"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}