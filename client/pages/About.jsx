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
  Award,
  Heart,
  Users,
  Clock,
  BookOpen,
  Shield,
  Star,
  CheckCircle,
  Baby,
  Smile,
  GraduationCap,
  Phone,
  Calendar,
  MapPin,
  Home,
  Target,
  Lightbulb,
  Activity,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Love & Care",
      description:
        "Every child receives individual attention and genuine care in our nurturing environment",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We maintain the highest safety standards with secure facilities and trained staff",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: BookOpen,
      title: "Learning Through Play",
      description:
        "Educational activities are woven naturally into play-based learning experiences",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Users,
      title: "Family Partnership",
      description:
        "We work closely with parents to support each child's unique developmental journey",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "State Licensed",
      description:
        "Fully licensed by the California Department of Social Services",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: GraduationCap,
      title: "Early Childhood Education",
      description:
        "Certified professionals with degrees in Early Childhood Development",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Heart,
      title: "CPR & First Aid",
      description:
        "All staff members are certified in infant and child CPR and first aid",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Regular training and professional development to stay current with best practices",
      color: "from-green-400 to-blue-500",
    },
  ];

  const staff = [
    {
      name: "Maria Rodriguez",
      title: "Director & Lead Caregiver",
      experience: "15+ years",
      education: "BA in Early Childhood Education",
      specialties: [
        "Infant Care",
        "Curriculum Development",
        "Parent Communication",
      ],
      bio: "Maria founded Joy Family Daycare with a passion for providing exceptional care in a home-like environment. Her extensive experience and warm personality make families feel immediately welcome.",
    },
    {
      name: "Jennifer Kim",
      title: "Assistant Director",
      experience: "8+ years",
      education: "Associate's in Child Development",
      specialties: [
        "Toddler Programs",
        "Special Needs Support",
        "Creative Arts",
      ],
      bio: "Jennifer brings creativity and patience to everything she does. Her background in special needs support ensures every child receives individualized attention.",
    },
    {
      name: "Sarah Johnson",
      title: "Preschool Teacher",
      experience: "12+ years",
      education: "Teaching Credential + ECE Units",
      specialties: [
        "School Readiness",
        "Language Development",
        "STEM Activities",
      ],
      bio: "Sarah's teaching background helps prepare our preschoolers for kindergarten while maintaining the fun and engaging atmosphere children love.",
    },
  ];

  const milestones = [
    { year: "2009", event: "Joy Family Daycare founded" },
    { year: "2011", event: "Received first 5-star parent review" },
    { year: "2013", event: "Expanded to serve toddlers" },
    { year: "2015", event: "Added preschool program" },
    { year: "2018", event: "Achieved perfect state inspection" },
    { year: "2020", event: "Implemented enhanced safety protocols" },
    { year: "2022", event: "Celebrated 200+ families served" },
    { year: "2024", event: "15 years of exceptional care" },
  ];

  const facilityFeatures = [
    { feature: "Secure, fenced outdoor play area", icon: Shield },
    { feature: "Age-appropriate learning centers", icon: BookOpen },
    { feature: "Quiet spaces for naps and rest", icon: Home },
    { feature: "Modern safety and security systems", icon: Shield },
    { feature: "Child-friendly furniture and fixtures", icon: Baby },
    { feature: "Natural lighting throughout", icon: Lightbulb },
    { feature: "Temperature-controlled environment", icon: Activity },
    { feature: "Daily sanitization protocols", icon: CheckCircle },
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-6">
            🏠 About Our Family Daycare
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Story & Mission
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we've been providing exceptional childcare in a
            warm, family-oriented environment. Our mission is to nurture young
            minds and hearts while giving parents complete peace of mind.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500 mb-1">
                200+
              </div>
              <div className="text-sm text-gray-600">Families Served</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500 mb-1">
                100%
              </div>
              <div className="text-sm text-gray-600">Licensed Staff</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-500 mb-1">5★</div>
              <div className="text-sm text-gray-600">Parent Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                A Dream Became Reality
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Joy Family Daycare was founded in 2009 with a simple but
                  powerful vision: to create a place where children could thrive
                  in a loving, home-like environment while receiving quality
                  early childhood education.
                </p>
                <p>
                  As parents ourselves, we understand the challenges of finding
                  trustworthy, high-quality childcare. That's why we've
                  dedicated ourselves to creating a program that treats every
                  child like family and partners with parents to support their
                  child's growth and development.
                </p>
                <p>
                  Our small group sizes allow us to provide individualized
                  attention that larger centers simply cannot offer. We believe
                  that every child is unique and deserves care that honors their
                  individual personality, interests, and developmental timeline.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                >
                  <Link to="/contact">Schedule a Visit</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <Users className="w-20 h-20 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Family Values
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building strong foundations through love, learning, and
                    laughter every single day.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">
                      Nurturing Care
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">
                      Learning Focus
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">
                      Safety First
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">
                      Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              Core Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Guides Everything We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles shape every interaction, every lesson, and every
              moment your child spends in our care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${value.color}`}
                  >
                    <value.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Caring Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced, passionate team members are the heart of Joy
              Family Daycare. Each brings unique skills and unwavering
              dedication to your child's development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-orange-400 to-pink-500"></div>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-12 h-12 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-orange-600 font-semibold">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-semibold text-gray-900">
                        Experience
                      </div>
                      <div className="text-xs text-gray-600">
                        {member.experience}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-semibold text-gray-900">
                        Education
                      </div>
                      <div className="text-xs text-gray-600">
                        {member.education}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              Credentials & Standards
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Licenses & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We maintain the highest standards through proper licensing,
              ongoing training, and commitment to excellence in early childhood
              education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              15 Years of Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every year has brought new achievements, growth, and opportunities
              to serve families in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-orange-500 mb-2">
                    {milestone.year}
                  </div>
                  <div className="text-sm text-gray-700">{milestone.event}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 text-center shadow-lg">
                <Home className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Home-Like Environment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our facility combines the warmth of a family home with the
                  safety and resources of a professional childcare center.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-xl font-bold text-green-600">
                      2,500
                    </div>
                    <div className="text-xs text-gray-600">Sq Ft Facility</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-xl font-bold text-blue-600">
                      Secure
                    </div>
                    <div className="text-xs text-gray-600">Outdoor Area</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                Our Facility
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Designed for Learning & Safety
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every space in our facility has been thoughtfully designed to
                encourage exploration, creativity, and learning while
                maintaining the highest safety standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {facilityFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <item.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
              >
                <Link to="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Experience the Joy Family Difference
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            We'd love to meet you and your child. Schedule a visit to see our
            facility, meet our team, and learn more about our programs.
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
