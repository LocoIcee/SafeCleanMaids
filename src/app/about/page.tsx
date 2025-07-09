import { Shield, Users, Award, Heart, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">Trusted Since 2023</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Safe Clean Maids
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Dedicated to providing exceptional cleaning services with integrity, reliability, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Our Story */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Safe Clean Maids was founded in 2023 with a simple mission: to provide exceptional cleaning services that people could trust and rely on consistently.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    What began as a small family operation has grown into a trusted cleaning service provider with a team of dedicated professionals who share our passion for cleanliness and customer satisfaction.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Over the years, we&apos;ve refined our techniques, adopted eco-friendly practices, and maintained our commitment to treating each home and business as if it were our own.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Today, we&apos;re proud to be one of the most trusted cleaning services in the area, with thousands of satisfied customers who appreciate our attention to detail and consistent quality.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-full h-96 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full blur-lg"></div>
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl">
                    <Users size={64} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              These principles guide everything we do at Safe Clean Maids.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Card key={idx} className="text-center border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="pt-8">
                    <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:shadow-xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet the dedicated professionals who make Safe Clean Maids exceptional.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                <div key={idx} className="text-center group">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-48 h-48 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Approach */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-full h-96 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full blur-lg"></div>
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl">
                    <Shield size={64} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Approach</h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    At Safe Clean Maids, we believe that exceptional cleaning is about more than just removing dirt—it&apos;s about creating healthy, comfortable spaces where people can thrive.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our comprehensive approach includes:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Thorough training for all cleaning professionals",
                      "Detailed cleaning checklists tailored to each space",
                      "Eco-friendly products that are safe for families and pets",
                      "Quality inspections to ensure consistent results",
                      "Open communication and responsive customer service"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We continuously refine our methods and stay updated on the latest cleaning technologies to provide you with the best possible service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Certifications</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re proud to maintain industry certifications that reflect our commitment to excellence.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "ISSA - International Sanitary Supply Association",
                "ARCSI - Association of Residential Cleaning Services International",
                "Green Cleaning Certified",
                "BBB - Better Business Bureau (A+ Rating)"
              ].map((cert, idx) => (
                <Card key={idx} className="text-center border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800 leading-relaxed">{cert}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Safe Clean Maids Difference</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Join our family of satisfied customers and discover why we&apos;re the trusted choice for cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <Link href="/contact">Schedule a Cleaning</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
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