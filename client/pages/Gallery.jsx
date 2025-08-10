import { useState } from "react";
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
  Camera,
  Heart,
  Baby,
  Users,
  BookOpen,
  Palette,
  Music,
  Utensils,
  Home,
  Sun,
  Star,
  Play,
  Award,
  Calendar,
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All Photos", icon: Camera },
    { id: "facility", name: "Our Facility", icon: Home },
    { id: "activities", name: "Daily Activities", icon: Play },
    { id: "learning", name: "Learning Time", icon: BookOpen },
    { id: "outdoor", name: "Outdoor Fun", icon: Sun },
    { id: "arts", name: "Arts & Crafts", icon: Palette },
    { id: "meals", name: "Meal Time", icon: Utensils },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg",
      alt: "Children playing in our bright, spacious playroom",
      title: "Indoor Play Area",
      category: "facility",
      description:
        "Our colorful and safe indoor play space where children explore and learn together.",
    },
    {
      id: 2,
      src: "/placeholder.svg",
      alt: "Outdoor playground with safety equipment",
      title: "Outdoor Playground",
      category: "outdoor",
      description:
        "Secure outdoor area with age-appropriate equipment for physical development.",
    },
    {
      id: 3,
      src: "/placeholder.svg",
      alt: "Children engaged in story time circle",
      title: "Story Time Circle",
      category: "learning",
      description:
        "Daily story time sessions that build language skills and imagination.",
    },
    {
      id: 4,
      src: "/placeholder.svg",
      alt: "Art and craft activity session",
      title: "Creative Arts Time",
      category: "arts",
      description:
        "Hands-on art activities that encourage creativity and fine motor skills.",
    },
    {
      id: 5,
      src: "/placeholder.svg",
      alt: "Children enjoying healthy snacks",
      title: "Healthy Meal Time",
      category: "meals",
      description:
        "Nutritious meals and snacks prepared fresh daily in our licensed kitchen.",
    },
    {
      id: 6,
      src: "/placeholder.svg",
      alt: "Sensory play with educational toys",
      title: "Sensory Learning",
      category: "activities",
      description:
        "Sensory bins and activities that support cognitive development.",
    },
    {
      id: 7,
      src: "/placeholder.svg",
      alt: "Quiet reading corner with books",
      title: "Reading Corner",
      category: "facility",
      description:
        "Cozy reading nook where children develop early literacy skills.",
    },
    {
      id: 8,
      src: "/placeholder.svg",
      alt: "Music and movement activity",
      title: "Music & Movement",
      category: "activities",
      description:
        "Fun music sessions that promote rhythm, coordination, and joy.",
    },
    {
      id: 9,
      src: "/placeholder.svg",
      alt: "Garden exploration and nature learning",
      title: "Nature Exploration",
      category: "outdoor",
      description:
        "Hands-on learning about plants, insects, and the natural world.",
    },
    {
      id: 10,
      src: "/placeholder.svg",
      alt: "Dramatic play area with costumes",
      title: "Dramatic Play",
      category: "activities",
      description:
        "Imaginative play area where children explore different roles and scenarios.",
    },
    {
      id: 11,
      src: "/placeholder.svg",
      alt: "STEM learning with building blocks",
      title: "STEM Discovery",
      category: "learning",
      description:
        "Early engineering and math concepts through hands-on building activities.",
    },
    {
      id: 12,
      src: "/placeholder.svg",
      alt: "Quiet rest area for naptime",
      title: "Rest & Quiet Time",
      category: "facility",
      description:
        "Peaceful rest area where children recharge with quiet activities or naps.",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    let newIndex;

    if (direction === "next") {
      newIndex =
        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-yellow-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full shadow-xl mb-6">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Photo Gallery
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Take a peek into our vibrant learning environment where children
                play, learn, and grow every day. See the joy and wonder that
                fills our home daycare.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">50+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">8</div>
                <div className="text-sm text-gray-600">Children Max</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Licensed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore Our Spaces
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through different areas of our daycare to see how we
                create meaningful learning experiences for every child.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl"
                        : "hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-200 line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No photos in this category yet
                </h3>
                <p className="text-gray-500">
                  We're constantly adding new photos. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
              <h2 className="text-4xl font-bold mb-4">
                See Our Home in Person
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Pictures can only show so much! We'd love to welcome you for a
                personal tour where you can experience the warmth and care that
                makes our daycare special.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 h-auto text-lg font-semibold transition-all duration-300"
              >
                <a
                  href="tel:+16507610969"
                  className="flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Call Us Today
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <Button
                onClick={closeLightbox}
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                onClick={() => navigateImage("prev")}
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              >
                <ArrowLeft className="w-8 h-8" />
              </Button>

              <Button
                onClick={() => navigateImage("next")}
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              >
                <ArrowRight className="w-8 h-8" />
              </Button>

              {/* Image and Content */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
