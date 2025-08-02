import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  CheckCircle
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Heart,
      title: "Safe & Nurturing",
      description: "A warm, home-like environment where children feel secure and loved"
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Limited enrollment ensures personalized attention for each child"
    },
    {
      icon: Shield,
      title: "Licensed & Certified",
      description: "Experienced professionals with proper certifications and training"
    },
    {
      icon: BookOpen,
      title: "Educational Activities",
      description: "Age-appropriate learning activities that promote development"
    }
  ];

  const programs = [
    {
      icon: Baby,
      title: "Infant Care",
      age: "6-12 months",
      description: "Gentle care focused on feeding, sleeping, and early development milestones",
      features: ["Bottle feeding", "Diaper changing", "Tummy time", "Sensory play"]
    },
    {
      icon: Smile,
      title: "Toddler Program",
      age: "1-2 years",
      description: "Active learning through play, exploration, and social interaction",
      features: ["Potty training", "Language development", "Motor skills", "Social play"]
    },
    {
      icon: Star,
      title: "Preschool Prep",
      age: "3-4 years",
      description: "School readiness activities that build confidence and independence",
      features: ["Pre-reading skills", "Number concepts", "Art & crafts", "Circle time"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Joy Family Daycare has been amazing for our daughter. The small group size means she gets the attention she needs, and the home environment is so welcoming.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "We love the family atmosphere here. Our son has thrived under their care and we feel completely confident leaving him each day.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      text: "The staff is incredible - professional, caring, and truly invested in each child's development. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-joy-yellow/20 via-joy-blue/10 to-joy-orange/20 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Where Little 
                <span className="text-joy-orange"> Hearts </span>
                Find Their 
                <span className="text-joy-blue"> Joy</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                A small family home daycare run by experienced & certified professionals. 
                We offer children a safe, supportive and friendly learning environment perfect 
                for families seeking a home-like setting with small group sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-joy-orange hover:bg-joy-orange/90 text-lg px-8 py-6"
                >
                  <Link to="/contact">Schedule a Visit</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-joy-orange text-joy-orange hover:bg-joy-orange hover:text-white text-lg px-8 py-6"
                >
                  <Link to="/programs">Learn About Programs</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-joy-orange">6mo-4yr</div>
                  <div className="text-sm text-gray-600">Ages Accepted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-joy-orange">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-joy-orange">Small</div>
                  <div className="text-sm text-gray-600">Group Size</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-joy-orange/20 to-joy-blue/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-joy-orange rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Confidence Leads to Success</h3>
                  <p className="text-gray-600">Building strong foundations for your child's future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Joy Family Daycare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a loving, safe environment where children can learn, grow, and thrive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-joy-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-joy-orange" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs designed to support your child's development at every stage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-joy-blue/10 rounded-full flex items-center justify-center mb-4">
                    <program.icon className="w-8 h-8 text-joy-blue" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-joy-orange font-semibold">
                    Ages {program.age}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-joy-green" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-joy-blue hover:bg-joy-blue/90">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About Joy Family Daycare
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in childcare, we understand that choosing the right 
                daycare for your child is one of the most important decisions you'll make as a parent. 
                That's why we've created a warm, nurturing environment that feels like a second home.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-joy-orange" />
                  <span className="text-gray-700">Licensed & State Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-joy-orange" />
                  <span className="text-gray-700">Flexible Hours: 7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-joy-orange" />
                  <span className="text-gray-700">Small Group Size for Individual Attention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-joy-orange" />
                  <span className="text-gray-700">Family-Oriented Environment</span>
                </div>
              </div>
              <Button asChild size="lg" variant="outline" className="border-joy-orange text-joy-orange hover:bg-joy-orange hover:text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-joy-yellow/30 to-joy-blue/30 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-20 h-20 text-joy-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Family-Centered Care
                  </h3>
                  <p className="text-gray-600">
                    Where every child is treated like family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-joy-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from families who trust us with their most precious gifts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-joy-orange text-joy-orange" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-joy-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Give your child the loving care and quality education they deserve. 
            Contact us today to schedule a visit and see the difference we can make.
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
              <Link to="/admissions">View Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
