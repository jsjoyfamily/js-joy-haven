import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Heart,
  Clock,
  Award,
} from "lucide-react";
import { useState } from "react";

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "For Parents", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Enhanced Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Js Joy Family
                </h1>
                <p className="text-sm text-orange-600 font-medium">
                  Daycare & Learning Center
                </p>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "bg-orange-100 text-orange-700 shadow-sm"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Enhanced Contact Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Button
                asChild
                className="hidden md:inline-flex bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://forms.gle/krsWqr5g7Ch8YWpAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </a>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <nav className="flex flex-col py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                      isActive(item.href)
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mx-4 mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  <a
                    href="https://forms.gle/krsWqr5g7Ch8YWpAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Enhanced About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Js Joy Family Daycare</h3>
                  <p className="text-orange-400">Where Hearts Find Joy</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                A nurturing family home daycare providing exceptional care and
                early education for children 6 months to 4 years old since 2009.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-300">State Licensed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-300">Flexible Hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-300">Family Environment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Small Groups</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">+1 650 761 0969</div>
                    <div className="text-gray-400 text-xs">Call or Text</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">
                      jayabijjala@gmail.com
                    </div>
                    <div className="text-gray-400 text-xs">
                      Send us an email
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">
                      3428 Golf Dr
                    </div>
                    <div className="text-gray-400 text-xs">
                      San Jose, CA 95127
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="text-sm">
                    <div className="text-orange-400 font-semibold mb-1">
                      Hours:
                    </div>
                    <div className="text-gray-300 text-xs">Monday - Friday</div>
                    <div className="text-gray-300 text-xs">
                      8:30 AM - 5:30 PM
                    </div>
                  </div>
                  <div className="text-sm mt-3">
                    <div className="text-orange-400 font-semibold mb-1">
                      Ages:
                    </div>
                    <div className="text-gray-300 text-xs">
                      6 months to 4 years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer Bottom */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm text-center md:text-left">
                © 2024 Js Joy Family Daycare. All rights reserved. Licensed
                Family Daycare Provider.
              </div>
              <div className="mt-4 md:mt-0">
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  <a
                    href="https://forms.gle/krsWqr5g7Ch8YWpAA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Visit
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
