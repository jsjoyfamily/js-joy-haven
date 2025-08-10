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
  Baby,
  Smile,
  Star,
  Heart,
  Brain,
  Users,
  Clock,
  BookOpen,
  Palette,
  Music,
  Activity,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  ArrowRight,
  Target,
  Lightbulb,
  Shield,
  Award,
} from "lucide-react";

export default function Programs() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const curriculumApproach = [
    {
      icon: Heart,
      title: "Love-Based Learning",
      description:
        "Every lesson is built on a foundation of care, respect, and emotional security",
    },
    {
      icon: Brain,
      title: "Developmentally Appropriate",
      description:
        "Activities designed specifically for each age group's cognitive and physical abilities",
    },
    {
      icon: Users,
      title: "Individual Attention",
      description:
        "Small group sizes ensure personalized care and learning experiences",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Clear learning objectives help children progress toward important milestones",
    },
  ];

  const programs = [
    {
      id: "infants",
      icon: Baby,
      title: "Infant Care Program",
      age: "6-12 months",
      capacity: "4 children",
      description:
        "Gentle, nurturing care focused on building trust and early development milestones",
      color: "from-pink-400 to-pink-600",
      borderColor: "border-pink-200",
      bgColor: "bg-pink-50",
      learningAreas: [
        {
          title: "Physical Development",
          activities: [
            "Tummy time",
            "Sensory exploration",
            "Motor skill exercises",
            "Safe crawling spaces",
          ],
        },
        {
          title: "Social-Emotional",
          activities: [
            "Caregiver bonding",
            "Comfort routines",
            "Emotional security",
            "Trust building",
          ],
        },
        {
          title: "Communication",
          activities: [
            "Reading aloud",
            "Singing songs",
            "Responsive conversations",
            "Sound exploration",
          ],
        },
        {
          title: "Cognitive",
          activities: [
            "Cause and effect toys",
            "Object permanence games",
            "Visual tracking",
            "Sensory play",
          ],
        },
      ],
      dailySchedule: [
        { time: "7:00-8:00 AM", activity: "Arrival & Free Play" },
        { time: "8:00-9:00 AM", activity: "Breakfast & Diaper Changes" },
        { time: "9:00-10:00 AM", activity: "Tummy Time & Sensory Play" },
        { time: "10:00-11:00 AM", activity: "Morning Nap" },
        { time: "11:00-12:00 PM", activity: "Outdoor Time & Exploration" },
        { time: "12:00-1:00 PM", activity: "Lunch & Quiet Activities" },
        { time: "1:00-3:00 PM", activity: "Afternoon Nap" },
        { time: "3:00-4:00 PM", activity: "Snack & Music Time" },
        { time: "4:00-5:00 PM", activity: "Story Time & Calm Play" },
        { time: "5:00-6:00 PM", activity: "Departure Preparations" },
      ],
      milestones: [
        "Sits without support",
        "Transfers objects between hands",
        "Responds to familiar voices",
        "Shows stranger awareness",
        "Babbles consonant sounds",
        "Reaches for and grasps toys",
      ],
    },
    {
      id: "toddlers",
      icon: Smile,
      title: "Toddler Program",
      age: "1-2 years",
      capacity: "6 children",
      description:
        "Active learning through exploration, language development, and social skill building",
      color: "from-blue-400 to-blue-600",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      learningAreas: [
        {
          title: "Language & Literacy",
          activities: [
            "Interactive storytelling",
            "Vocabulary building",
            "Picture books",
            "Singing and rhymes",
          ],
        },
        {
          title: "Motor Skills",
          activities: [
            "Walking practice",
            "Climbing activities",
            "Fine motor toys",
            "Dance and movement",
          ],
        },
        {
          title: "Social Skills",
          activities: [
            "Parallel play",
            "Sharing practice",
            "Turn-taking games",
            "Emotional recognition",
          ],
        },
        {
          title: "Independence",
          activities: [
            "Self-feeding",
            "Potty training support",
            "Cleaning up",
            "Making choices",
          ],
        },
      ],
      dailySchedule: [
        { time: "7:00-8:30 AM", activity: "Arrival & Free Choice Play" },
        { time: "8:30-9:00 AM", activity: "Breakfast & Social Time" },
        { time: "9:00-10:00 AM", activity: "Circle Time & Songs" },
        { time: "10:00-10:30 AM", activity: "Snack & Independence Practice" },
        { time: "10:30-11:30 AM", activity: "Outdoor Exploration" },
        { time: "11:30-12:00 PM", activity: "Pre-Lunch Activities" },
        { time: "12:00-1:00 PM", activity: "Lunch & Cleanup Help" },
        { time: "1:00-2:30 PM", activity: "Nap Time" },
        { time: "2:30-3:00 PM", activity: "Quiet Waking Activities" },
        { time: "3:00-4:00 PM", activity: "Art & Creative Expression" },
        { time: "4:00-5:00 PM", activity: "Active Play & Movement" },
        { time: "5:00-6:00 PM", activity: "Story Time & Departure" },
      ],
      milestones: [
        "Walks independently",
        "Uses 10-50 words",
        "Follows simple instructions",
        "Shows affection to familiar people",
        "Plays simple pretend games",
        "Drinks from a cup",
      ],
    },
    {
      id: "beginners",
      icon: Star,
      title: "Beginner Preschool",
      age: "3-4 years",
      capacity: "8 children",
      description:
        "School readiness program focused on academic foundations and social development",
      color: "from-green-400 to-green-600",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      learningAreas: [
        {
          title: "Pre-Academic Skills",
          activities: [
            "Letter recognition",
            "Number concepts",
            "Pre-writing activities",
            "Pattern recognition",
          ],
        },
        {
          title: "Creative Arts",
          activities: [
            "Painting and drawing",
            "Dramatic play",
            "Music and rhythm",
            "Craft projects",
          ],
        },
        {
          title: "Science & Discovery",
          activities: [
            "Nature exploration",
            "Simple experiments",
            "Weather observation",
            "Plant growing",
          ],
        },
        {
          title: "Social Development",
          activities: [
            "Group games",
            "Conflict resolution",
            "Friendship skills",
            "Community helpers",
          ],
        },
      ],
      dailySchedule: [
        { time: "7:00-8:30 AM", activity: "Arrival & Centers" },
        { time: "8:30-9:00 AM", activity: "Breakfast & Morning Meeting" },
        { time: "9:00-9:30 AM", activity: "Circle Time & Calendar" },
        { time: "9:30-10:30 AM", activity: "Learning Centers Rotation" },
        { time: "10:30-11:00 AM", activity: "Snack & Social Skills" },
        { time: "11:00-12:00 PM", activity: "Outdoor Learning & Play" },
        { time: "12:00-1:00 PM", activity: "Lunch & Table Manners" },
        { time: "1:00-2:00 PM", activity: "Quiet Time & Rest" },
        { time: "2:00-3:00 PM", activity: "Science & Discovery" },
        { time: "3:00-4:00 PM", activity: "Creative Arts Time" },
        { time: "4:00-5:00 PM", activity: "Gross Motor Activities" },
        { time: "5:00-6:00 PM", activity: "Story Time & Reflection" },
      ],
      milestones: [
        "Speaks in complete sentences",
        "Recognizes some letters",
        "Counts to 10",
        "Plays cooperatively",
        "Uses scissors and writing tools",
        "Follows multi-step directions",
      ],
    },
  ];

  const enrichmentActivities = [
    {
      icon: Music,
      title: "Music & Movement",
      description:
        "Daily music activities that enhance rhythm, coordination, and listening skills",
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description:
        "Art projects that encourage self-expression and fine motor development",
    },
    {
      icon: BookOpen,
      title: "Literacy Focus",
      description:
        "Reading readiness activities including phonics, storytelling, and vocabulary building",
    },
    {
      icon: Activity,
      title: "Physical Fitness",
      description:
        "Age-appropriate exercises and outdoor play for healthy physical development",
    },
    {
      icon: Lightbulb,
      title: "STEM Exploration",
      description:
        "Hands-on science, technology, engineering, and math activities",
    },
    {
      icon: Users,
      title: "Social Learning",
      description:
        "Group activities that build cooperation, empathy, and communication skills",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            🎓 Age-Appropriate Learning Programs
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Learning Programs
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Carefully designed curricula that support your child's development
            through play-based learning, individual attention, and nurturing
            care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => scrollToSection("infants")}
            >
              <Baby className="w-12 h-12 text-pink-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Infants</h3>
              <p className="text-sm text-gray-600">6-12 months</p>
            </div>
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => scrollToSection("toddlers")}
            >
              <Smile className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Toddlers</h3>
              <p className="text-sm text-gray-600">1-2 years</p>
            </div>
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => scrollToSection("beginners")}
            >
              <Star className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Beginners</h3>
              <p className="text-sm text-gray-600">3-4 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Child-Centered Learning Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe that children learn best through exploration, play, and
              meaningful relationships. Our curriculum is designed to meet each
              child where they are and guide them toward their next
              developmental milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumApproach.map((approach, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <approach.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {approach.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programs Sections */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-20 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Program Header */}
            <div className="text-center mb-16">
              <div
                className={`inline-flex items-center gap-3 px-6 py-3 ${program.bgColor} rounded-full mb-6`}
              >
                <program.icon
                  className={`w-6 h-6 text-${program.color.split("-")[1]}-600`}
                />
                <span
                  className={`text-${program.color.split("-")[1]}-800 font-semibold`}
                >
                  {program.title}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {program.title}
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-lg font-medium text-gray-700">
                    Ages {program.age}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="text-lg font-medium text-gray-700">
                    {program.capacity}
                  </span>
                </div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {program.description}
              </p>
            </div>

            {/* Learning Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Brain className="w-6 h-6 text-purple-600" />
                  Learning Areas
                </h3>
                <div className="space-y-6">
                  {program.learningAreas.map((area, idx) => (
                    <Card
                      key={idx}
                      className={`border-l-4 ${program.borderColor} hover:shadow-lg transition-all duration-300`}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {area.activities.map((activity, actIdx) => (
                            <li
                              key={actIdx}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Daily Schedule */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Daily Schedule
                </h3>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="space-y-0">
                      {program.dailySchedule.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-4 p-4 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                        >
                          <div className="text-sm font-medium text-gray-700 min-w-[120px]">
                            {item.time}
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                          <div className="text-sm text-gray-600 flex-1">
                            {item.activity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Developmental Milestones */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                <Target className="w-6 h-6 text-green-600" />
                Developmental Milestones
              </h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                By the end of this program, most children will demonstrate these
                important developmental achievements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {program.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Enrichment Activities */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              Special Activities
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Enrichment & Special Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond our core curriculum, we offer special activities that
              enhance learning and make each day exciting and engaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrichmentActivities.map((activity, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <activity.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Progress */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                Progress Tracking
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tracking Your Child's Progress
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe in keeping parents informed about their child's
                development and achievements through regular communication and
                assessments.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Daily Reports
                    </h4>
                    <p className="text-gray-600">
                      Detailed daily summaries of activities, meals, naps, and
                      milestones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Progress Assessments
                    </h4>
                    <p className="text-gray-600">
                      Quarterly developmental assessments tracking growth in all
                      areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Parent Conferences
                    </h4>
                    <p className="text-gray-600">
                      Regular one-on-one meetings to discuss your child's
                      development and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 text-center shadow-lg">
                <Shield className="w-20 h-20 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our programs meet and exceed state licensing requirements,
                  ensuring the highest quality care and education for your
                  child.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Licensed Staff</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Enroll?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Give your child the foundation they need for lifelong learning and
            success. Schedule a visit to see our programs in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://forms.gle/krsWqr5g7Ch8YWpAA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Tour
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 h-auto text-lg font-semibold"
            >
              <Link to="/admissions" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Learn About Enrollment
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
