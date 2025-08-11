import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import GetUser from "../../lib/GetUser";

const navLinks = [
  { href: "/", label: "Home", isPrivate: false },
  { href: "/find-tutors", label: "Find Tutors", isPrivate: false },
  { href: "/add-tutorial", label: "Add Tutorials", isPrivate: true }, 
  { href: "/my-tutorials", label: "My Tutorials", isPrivate: true }, 
  { href: "/my-booked-tutors", label: "My Booked Tutors", isPrivate: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = false; 
  const userName = "Alex Doe"; 
  const userProfilePic = "/placeholder.svg?width=40&height=40"; 

  const { user, logoutuser } = GetUser();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    logoutuser();
  };

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Languages className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">LinguaLearn</span>
          </Link>

      
          <div className="hidden md:flex items-center justify-between space-x-4">
            {navLinks
              .filter((data) => {
                if (data.isPrivate) {
                  if (user) {
                    return data;
                  }
                } else {
                  return data.isPrivate !== true;
                }
              })
              .map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            {user ? (
              <div className="flex items-center justify-center gap-2">
                <Avatar>
                  <AvatarImage
                    src={user?.photoURL || "/placeholder.svg"}
                    alt={userName}
                  />
                  <AvatarFallback>
                    {userName.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span className="text-sm font-medium">
                    {user?.displayName}
                  </span>
                  <br />
                  <span className="text-xs ">{user?.email}</span>
                </div>
                <Button onClick={handleLogout} size="sm">
                  Log Out
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>

       
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
            className="md:hidden border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                >
                  {link.label}
                </Link>
              ))}
              {isLoggedIn ? (
                <div className="flex items-center gap-2 px-3 py-2">
                  <Avatar>
                    <AvatarImage
                      src={userProfilePic || "/placeholder.svg"}
                      alt={userName}
                    />
                    <AvatarFallback>
                      {userName.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-base font-medium">{userName}</span>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button className="w-full mt-2">Login</Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
