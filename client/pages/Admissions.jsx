import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  DollarSign,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Users,
  FileText,
  Heart,
  Award,
  CheckCircle,
  Download,
  CreditCard,
  CalendarDays,
  BookOpen,
  Camera,
  Bell,
  Shield,
  Baby,
  Smile,
  Star,
  MapPin,
  Home,
  Activity,
  Utensils,
} from "lucide-react";

export default function Admissions() {
  const tuitionRates = [
    {
      program: "Infant Care",
      ageRange: "6-12 months",
      fullTime: "$1,400",
      partTime: "$850",
      features: ["Individual attention", "Flexible feeding", "Developmentally appropriate activities", "Daily reports"]
    },
    {
      program: "Toddler Program", 
      ageRange: "1-2 years",
      fullTime: "$1,200",
      partTime: "$750",
      features: ["Potty training support", "Language development", "Social skills", "Creative activities"]
    },
    {
      program: "Beginner Preschool",
      ageRange: "3-4 years", 
      fullTime: "$1,000",
      partTime: "$650",
      features: ["School readiness", "Pre-academic skills", "Independence building", "Group activities"]
    }
  ];

  const paymentOptions = [
    {
      icon: CreditCard,
      title: "Monthly Payment",
      description: "Pay monthly tuition by the 1st of each month",
      details: "Automatic bank draft or credit card payment available"
    },
    {
      icon: DollarSign,
      title: "Annual Discount",
      description: "Save 5% with annual payment in advance",
      details: "One-time payment for the full year"
    },
    {
      icon: FileText,
      title: "Sibling Discount",
      description: "10% discount for second child and beyond",
      details: "Applied automatically to additional children"
    }
  ];

  const includedServices = [
    { icon: Utensils, service: "Nutritious meals and snacks" },
    { icon: Activity, service: "All learning materials and supplies" },
    { icon: Camera, service: "Daily photos and updates" },
    { icon: BookOpen, service: "Educational activities and field trips" },
    { icon: Heart, service: "Individualized care plans" },
    { icon: Shield, service: "Licensed and insured facility" }
  ];

  const calendarEvents = [
    {
      date: "January 15",
      event: "Martin Luther King Jr. Day",
      type: "Closed",
      color: "bg-red-100 text-red-800"
    },
    {
      date: "February 14",
      event: "Valentine's Day Celebration",
      type: "Special Event",
      color: "bg-pink-100 text-pink-800"
    },
    {
      date: "February 19", 
      event: "Presidents' Day",
      type: "Closed",
      color: "bg-red-100 text-red-800"
    },
    {
      date: "March 17",
      event: "St. Patrick's Day Fun",
      type: "Special Event", 
      color: "bg-green-100 text-green-800"
    },
    {
      date: "April 1-5",
      event: "Spring Break",
      type: "Closed",
      color: "bg-red-100 text-red-800"
    },
    {
      date: "May 10",
      event: "Mother's Day Celebration",
      type: "Special Event",
      color: "bg-pink-100 text-pink-800"
    },
    {
      date: "May 27",
      event: "Memorial Day",
      type: "Closed", 
      color: "bg-red-100 text-red-800"
    },
    {
      date: "June 19",
      event: "Father's Day Celebration",
      type: "Special Event",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const communicationMethods = [
    {
      icon: Phone,
      title: "Daily Reports",
      description: "Detailed daily summaries sent via our parent app",
      features: ["Meal times and amounts", "Nap schedules", "Activities participated in", "Diaper changes", "Mood and behavior notes"]
    },
    {
      icon: Camera,
      title: "Photo Sharing",
      description: "Real-time photos of your child's day",
      features: ["Activity photos", "Milestone moments", "Art projects", "Group activities", "Secure family-only access"]
    },
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      description: "Instant communication with your child's teachers",
      features: ["Ask questions anytime", "Share important information", "Schedule parent conferences", "Get quick updates", "Emergency notifications"]
    },
    {
      icon: Calendar,
      title: "Event Updates",
      description: "Stay informed about special events and announcements",
      features: ["Field trip notifications", "Special celebrations", "Menu changes", "Holiday schedules", "Parent meeting invites"]
    }
  ];

  const parentResources = [
    {
      icon: BookOpen,
      title: "Parent Handbook",
      description: "Complete guide to our policies and procedures",
      action: "Download PDF"
    },
    {
      icon: Calendar,
      title: "Annual Calendar",
      description: "Full year calendar with holidays and events",
      action: "View Calendar"
    },
    {
      icon: Utensils,
      title: "Weekly Menus",
      description: "Nutritious meal plans and snack schedules",
      action: "See This Week"
    },
    {
      icon: Activity,
      title: "Development Guides",
      description: "Age-appropriate developmental milestone information",
      action: "Learn More"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
            👨‍👩‍👧‍👦 For Parents
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Everything You
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Need to Know
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            From tuition information to daily communication, we've made it easy for parents to stay connected and informed about their child's care and development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Tuition & Fees</h3>
              <p className="text-sm text-gray-600">Transparent pricing</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Calendar & Events</h3>
              <p className="text-sm text-gray-600">Stay up to date</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <MessageCircle className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Family Communication</h3>
              <p className="text-sm text-gray-600">Always connected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              💰 Tuition Information
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Affordable Quality Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our competitive rates include everything your child needs for a nurturing and educational experience. No hidden fees, no surprises.
            </p>
          </div>

          {/* Tuition Rates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tuitionRates.map((rate, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className={`h-2 ${index === 0 ? 'bg-pink-500' : index === 1 ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    index === 0 ? 'bg-pink-100' : index === 1 ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {index === 0 ? <Baby className="w-8 h-8 text-pink-600" /> : 
                     index === 1 ? <Smile className="w-8 h-8 text-blue-600" /> : 
                     <Star className="w-8 h-8 text-green-600" />}
                  </div>
                  <CardTitle className="text-2xl font-bold">{rate.program}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-orange-600">
                    {rate.ageRange}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{rate.fullTime}<span className="text-sm text-gray-500">/month</span></div>
                    <div className="text-sm text-gray-600">Full-time (5 days/week)</div>
                    <div className="text-2xl font-bold text-gray-700 mt-2">{rate.partTime}<span className="text-sm text-gray-500">/month</span></div>
                    <div className="text-sm text-gray-600">Part-time (3 days/week)</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {rate.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Payment Options</h3>
              <div className="space-y-6">
                {paymentOptions.map((option, index) => (
                  <Card key={index} className="border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <option.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                          <p className="text-gray-700 mb-2">{option.description}</p>
                          <p className="text-sm text-gray-600">{option.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h3>
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {includedServices.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <service.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service.service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t text-center">
                    <p className="text-sm text-gray-600 italic">
                      No additional fees for supplies, activities, or field trips
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              �� Calendar & Events
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stay Informed & Connected
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Never miss important dates, special events, or celebrations. Our calendar keeps you updated on everything happening at Joy Family Daycare.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar Events */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CalendarDays className="w-6 h-6 text-blue-600" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {calendarEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{event.event}</div>
                          <div className="text-sm text-gray-600">{event.date}</div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.color}`}>
                          {event.type}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Operating Hours & Schedule */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-600" />
                Operating Schedule
              </h3>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Regular Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-green-600 font-semibold">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Saturday</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Sunday</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Holiday Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>• We are closed on all major holidays</p>
                    <p>• Two weeks advance notice for special closures</p>
                    <p>• Make-up days available for planned closures</p>
                    <p>• Emergency closure notifications via app and email</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Family Communication Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              💬 Family Communication
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Always Connected to Your Child's Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe parents should never wonder what their child is doing. Our comprehensive communication system keeps you informed and connected throughout the day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {communicationMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg font-bold">{method.title}</CardTitle>
                  <CardDescription className="text-sm">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-1">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Parent Resources */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Parent Resources</h3>
              <p className="text-purple-100 max-w-2xl mx-auto">
                Everything you need to support your child's development at home and stay informed about our programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {parentResources.map((resource, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <resource.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{resource.title}</h4>
                  <p className="text-sm text-purple-100 mb-4">{resource.description}</p>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    {resource.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Enrollment CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            We'd love to welcome you and your child to Joy Family Daycare. Contact us today to schedule a visit and learn more about enrollment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://forms.gle/krsWqr5g7Ch8YWpAA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule a Tour
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 h-auto text-lg font-semibold"
            >
              <Link to="/programs" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                View Programs
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>123 Family Lane, Hometown, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@jsjoyfamily.com</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
