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
  Heart,
  Users,
  Shield,
  BookOpen,
  Star,
  Clock,
  Baby,
  Smile,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Heart,
      title: "Safe & Nurturing",
      description:
        "A warm, home-like environment where children feel secure and loved",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Users,
      title: "Small Groups",
      description:
        "Limited enrollment ensures personalized attention for each child",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Shield,
      title: "Licensed & Certified",
      description:
        "Experienced professionals with proper certifications and training",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: BookOpen,
      title: "Educational Activities",
      description:
        "Age-appropriate learning activities that promote development",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const programs = [
    {
      icon: Baby,
      title: "Infant Care",
      age: "6-12 months",
      description:
        "Gentle care focused on feeding, sleeping, and early development milestones",
      features: [
        "Bottle feeding",
        "Diaper changing",
        "Tummy time",
        "Sensory play",
      ],
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Smile,
      title: "Toddler Program",
      age: "1-2 years",
      description:
        "Active learning through play, exploration, and social interaction",
      features: [
        "Potty training",
        "Language development",
        "Motor skills",
        "Social play",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Star,
      title: "Preschool Prep",
      age: "3-4 years",
      description:
        "School readiness activities that build confidence and independence",
      features: [
        "Pre-reading skills",
        "Number concepts",
        "Art & crafts",
        "Circle time",
      ],
      color: "from-green-400 to-green-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Joy Family Daycare has been amazing for our daughter. The small group size means she gets the attention she needs, and the home environment is so welcoming.",
      rating: 5,
      role: "Parent of Emma, 3 years old",
    },
    {
      name: "Mike Chen",
      text: "We love the family atmosphere here. Our son has thrived under their care and we feel completely confident leaving him each day.",
      rating: 5,
      role: "Parent of Alex, 2 years old",
    },
    {
      name: "Emily Rodriguez",
      text: "The staff is incredible - professional, caring, and truly invested in each child's development. Highly recommended!",
      rating: 5,
      role: "Parent of Sofia, 4 years old",
    },
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-orange-50 via-blue-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
                  ✨ Licensed Family Daycare Since 2021
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Where Little
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  Hearts Find Joy
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                A nurturing home-based daycare providing personalized care and
                early education for children 6 months to 4 years old.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="https://forms.gle/krsWqr5g7Ch8YWpAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Visit
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 h-auto"
                >
                  <Link to="/programs" className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    View Programs
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-1">
                    6mo-4yr
                  </div>
                  <div className="text-sm text-gray-600">Ages Accepted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-1">
                    6+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-1">
                    Small
                  </div>
                  <div className="text-sm text-gray-600">Group Size</div>
                </div>
              </div>
            </div>

            {/* Enhanced Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Building Confidence Every Day
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our nurturing environment helps children develop the
                      confidence and skills they need for lifelong success.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">
                        State Licensed & Certified
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">
                        Experienced Caregivers
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700 font-medium">
                        Home-Like Environment
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide more than just childcare - we create a foundation for
              lifelong learning and happiness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color}`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              Our Programs
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Age-Appropriate Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Carefully designed programs that support your child's development
              at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg`}
                  >
                    <program.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-orange-600">
                    Ages {program.age}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What We Focus On:
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/programs">Explore All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Child's Second Home
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 6 years of experience, we understand that choosing
                the right daycare is one of the most important decisions you'll
                make as a parent.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Licensed & Certified
                    </h4>
                    <p className="text-gray-600 text-sm">
                      State approved facility
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Flexible Hours
                    </h4>
                    <p className="text-gray-600 text-sm">8:30 AM - 5:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Small Groups
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Individual attention
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Family Oriented
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Warm, caring environment
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 h-auto"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl p-8 text-center shadow-lg">
                <div className="mb-6">
                  <Users className="w-24 h-24 text-orange-500 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Family-Centered Care
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every child is treated like family in our warm, nurturing
                  environment where relationships matter.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-500">
                      7+
                    </div>
                    <div className="text-sm text-gray-600">Families Served</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-500">
                      6+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Families Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the families who trust us with their most precious gifts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Give your child the loving care and quality education they deserve
            in our nurturing home environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://forms.gle/krsWqr5g7Ch8YWpAA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Visit
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 650 761 0969</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>3428 Golf Dr, San Jose, CA 95127</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
