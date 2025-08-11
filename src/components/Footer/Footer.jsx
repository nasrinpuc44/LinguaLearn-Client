import { Link } from "react-router";
import { Languages, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Languages className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">
                LinguaLearn
              </span>
            </Link>
            <p className="text-sm">
              Unlock your potential by learning new languages with expert tutors
              from around the globe.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/find-tutors"
                  className="hover:text-primary transition-colors"
                >
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link
                  href="/add-tutorial"
                  className="hover:text-primary transition-colors"
                >
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} LinguaLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
