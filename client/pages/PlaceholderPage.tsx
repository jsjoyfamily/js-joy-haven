import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Construction, ArrowLeft, Home } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoonFeatures?: string[];
}

export default function PlaceholderPage({ 
  title, 
  description, 
  comingSoonFeatures = [] 
}: PlaceholderPageProps) {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-joy-blue/10 to-joy-yellow/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-joy-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-joy-orange" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>

          {comingSoonFeatures.length > 0 && (
            <Card className="max-w-2xl mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Coming Soon</CardTitle>
                <CardDescription>
                  This page will include detailed information about:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2">
                  {comingSoonFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-joy-orange rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="bg-white rounded-lg p-8 shadow-sm border max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need Information Now?
            </h3>
            <p className="text-gray-600 mb-6">
              While we're working on this page, we're happy to answer any questions you have about our daycare programs and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-joy-orange hover:bg-joy-orange/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-300">
                <a href="tel:(555)123-4567">Call (555) 123-4567</a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="ghost" className="text-gray-600 hover:text-gray-900">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-gray-600 hover:text-gray-900">
              <Link to="/about">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
