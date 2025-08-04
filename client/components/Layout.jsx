import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-joy-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Js Joy Family
                </h1>
                <p className="text-sm text-gray-600">Daycare</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-joy-orange",
                    isActive(item.href)
                      ? "text-joy-orange border-b-2 border-joy-orange pb-1"
                      : "text-gray-700",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Button
                asChild
                className="hidden md:inline-flex bg-joy-orange hover:bg-joy-orange/90"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-joy-orange",
                      isActive(item.href) ? "text-joy-orange" : "text-gray-700",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-joy-orange hover:bg-joy-orange/90 w-full"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-joy-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Js Joy Family Daycare</h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                A small family home daycare run by experienced & certified day
                care professionals. We offer children a safe, supportive and
                friendly learning environment.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-joy-orange transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-joy-orange" />
                  <span className="text-gray-300 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-joy-orange" />
                  <span className="text-gray-300 text-sm">
                    info@jsjoyfamily.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-joy-orange" />
                  <span className="text-gray-300 text-sm">
                    123 Family Lane, Hometown, CA 90210
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-400">
                    <strong>Hours:</strong> Monday - Friday, 7:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>Ages:</strong> 6 months to 4 years
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Js Joy Family Daycare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
