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
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Love & Care",
      description:
        "Every child receives individual attention and genuine care in our nurturing environment",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We maintain the highest safety standards with secure facilities and trained staff",
    },
    {
      icon: BookOpen,
      title: "Learning Through Play",
      description:
        "Educational activities are woven naturally into play-based learning experiences",
    },
    {
      icon: Users,
      title: "Family Partnership",
      description:
        "We work closely with parents to support each child's unique developmental journey",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "State Licensed",
      description:
        "Fully licensed by the California Department of Social Services",
    },
    {
      icon: GraduationCap,
      title: "Early Childhood Education",
      description:
        "Certified professionals with degrees in Early Childhood Development",
    },
    {
      icon: Heart,
      title: "CPR & First Aid",
      description:
        "All staff members are certified in infant and child CPR and first aid",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Regular training and professional development to stay current with best practices",
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
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-joy-blue/10 to-joy-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Joy Family Daycare
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been providing exceptional childcare in a
              warm, family-oriented environment. Our mission is to nurture young
              minds and hearts while giving parents peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
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
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-joy-orange">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years of Service
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-joy-orange">
                      200+
                    </div>
                    <div className="text-sm text-gray-600">Families Served</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-joy-orange/20 to-joy-blue/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-24 h-24 text-joy-orange mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Family Values
                  </h3>
                  <p className="text-gray-600">
                    Building strong foundations through love, learning, and
                    laughter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the caring
              environment your child will experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-joy-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-joy-orange" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced, caring professionals are dedicated to your
              child's development and wellbeing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-joy-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-10 h-10 text-joy-blue" />
                  </div>
                  <CardTitle className="text-xl text-center">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-center text-joy-orange font-semibold">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">
                      <strong>Experience:</strong> {member.experience}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Education:</strong> {member.education}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Specialties:
                    </h4>
                    <ul className="space-y-1">
                      {member.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-joy-green" />
                          <span className="text-sm text-gray-600">
                            {specialty}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-joy-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Licenses & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards through proper licensing and
              ongoing professional development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-joy-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-joy-blue" />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-joy-yellow/30 to-joy-orange/30 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Baby className="w-20 h-20 text-joy-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Home-Like Environment
                  </h3>
                  <p className="text-gray-600">
                    Comfortable spaces designed for learning and play
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Facility
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our home-based facility provides a warm, comfortable environment
                that feels familiar and safe to children. We've thoughtfully
                designed our spaces to encourage exploration, creativity, and
                learning while maintaining the cozy feel of a family home.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-joy-green" />
                  <span className="text-gray-700">
                    Secure, fenced outdoor play area
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-joy-green" />
                  <span className="text-gray-700">
                    Age-appropriate learning centers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-joy-green" />
                  <span className="text-gray-700">
                    Quiet spaces for naps and rest
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-joy-green" />
                  <span className="text-gray-700">
                    Clean, sanitized throughout the day
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-joy-green" />
                  <span className="text-gray-700">
                    Safety features and child-proofing
                  </span>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-joy-orange hover:bg-joy-orange/90"
              >
                <Link to="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-joy-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Experience the Joy Family Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We'd love to meet you and your child. Schedule a visit to see our
            facility and learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-joy-orange hover:bg-gray-100"
            >
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-joy-orange"
            >
              <Link to="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
