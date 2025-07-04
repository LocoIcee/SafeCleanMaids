import { Shield, Users, Award, Heart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About Safe Clean Maids</h1>
            <p className="text-xl text-blue-100">
              Dedicated to providing exceptional cleaning services with integrity, reliability, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p className="text-lg">
                    Safe Clean Maids was founded in 2010 with a simple mission: to provide exceptional cleaning services that people could trust and rely on consistently.
                  </p>
                  <p>
                    What began as a small family operation has grown into a trusted cleaning service provider with a team of dedicated professionals who share our passion for cleanliness and customer satisfaction.
                  </p>
                  <p>
                    Over the years, we've refined our techniques, adopted eco-friendly practices, and maintained our commitment to treating each home and business as if it were our own.
                  </p>
                  <p>
                    Today, we're proud to be one of the most trusted cleaning services in the area, with thousands of satisfied customers who appreciate our attention to detail and consistent quality.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-full flex items-center justify-center">
                <div className="bg-blue-100 w-full h-80 rounded-lg flex items-center justify-center">
                  <Users size={120} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at Safe Clean Maids.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Shield className="h-10 w-10 text-blue-600" />,
                  title: "Trust",
                  description: "We earn your trust through reliability, honesty, and consistent quality service."
                },
                {
                  icon: <Award className="h-10 w-10 text-blue-600" />,
                  title: "Excellence",
                  description: "We strive for excellence in every cleaning task, no matter how small."
                },
                {
                  icon: <Heart className="h-10 w-10 text-blue-600" />,
                  title: "Care",
                  description: "We care for your spaces as if they were our own, with attention to detail."
                },
                {
                  icon: <CheckCircle2 className="h-10 w-10 text-blue-600" />,
                  title: "Reliability",
                  description: "You can count on us to show up on time and deliver consistent results."
                }
              ].map((value, idx) => (
                <Card key={idx} className="text-center border-blue-100 hover:shadow-md transition-all">
                  <CardContent className="pt-8">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the dedicated professionals who make Safe Clean Maids exceptional.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Jennifer Smith",
                  role: "Founder & CEO",
                  bio: "Jennifer founded Safe Clean Maids with a vision to provide exceptional cleaning services with a personal touch."
                },
                {
                  name: "Michael Rodriguez",
                  role: "Operations Manager",
                  bio: "Michael ensures that all cleaning teams maintain our high standards and exceed customer expectations."
                },
                {
                  name: "Sarah Johnson",
                  role: "Customer Service Director",
                  bio: "Sarah leads our customer service team, ensuring client satisfaction and addressing any concerns promptly."
                }
              ].map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-gray-100 rounded-full w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-20 w-20 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-blue-100 w-full h-80 rounded-lg flex items-center justify-center">
                  <Shield size={120} className="text-blue-600" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <div className="space-y-4">
                  <p className="text-lg">
                    At Safe Clean Maids, we believe that exceptional cleaning is about more than just removing dirt—it's about creating healthy, comfortable spaces where people can thrive.
                  </p>
                  <p>
                    Our comprehensive approach includes:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Thorough training for all cleaning professionals",
                      "Detailed cleaning checklists tailored to each space",
                      "Eco-friendly products that are safe for families and pets",
                      "Quality inspections to ensure consistent results",
                      "Open communication and responsive customer service"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    We continuously refine our methods and stay updated on the latest cleaning technologies to provide you with the best possible service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600">
              We're proud to maintain industry certifications that reflect our commitment to excellence.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {[
                "ISSA - International Sanitary Supply Association",
                "ARCSI - Association of Residential Cleaning Services International",
                "Green Cleaning Certified",
                "BBB - Better Business Bureau (A+ Rating)"
              ].map((cert, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center min-w-[200px] flex items-center justify-center">
                  <span className="font-medium text-gray-800">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Experience the Safe Clean Maids Difference</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our family of satisfied customers and discover why we're the trusted choice for cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Schedule a Cleaning</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-500">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;