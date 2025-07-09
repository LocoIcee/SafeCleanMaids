'use client'
import { ArrowRight, Check, Clock, Home as HomeIcon, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:flex-row lg:justify-between">
            <div className="max-w-2xl space-y-8 lg:max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">Trusted by 1000+ Customers</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Professional Cleaning</span>
                <span className="block mt-2">for Your Peace of Mind</span>
              </h1>
              <p className="text-xl text-blue-100 md:text-2xl leading-relaxed">
                Experience spotless homes and workspaces with our detail-oriented cleaning services.
                Safe, reliable, and thorough - we bring the sparkle back to your space.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <Link href="/quotes">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="mt-10 rounded-2xl bg-white/10 backdrop-blur-sm p-8 shadow-2xl border border-white/20 lg:block">
              <div className="flex flex-col gap-6 min-w-[320px]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Get a Free Quote</h3>
                    <p className="text-blue-100 text-sm">Instant pricing estimates</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 border border-white/10 hover:bg-white/25 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <HomeIcon className="h-6 w-6 text-blue-200" />
                      <span className="font-medium">2-Bedroom Apartment</span>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-blue-100">Regular Cleaning</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">$120</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 border border-white/10 hover:bg-white/25 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <HomeIcon className="h-6 w-6 text-blue-200" />
                      <span className="font-medium">3-Bedroom House</span>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-blue-100">Deep Cleaning</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">$250</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 border border-white/10 hover:bg-white/25 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <HomeIcon className="h-6 w-6 text-blue-200" />
                      <span className="font-medium">Office (1000 sq ft)</span>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-blue-100">Commercial Cleaning</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">$200</span>
                    </div>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <Link href="/quotes">Get Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Safe Clean Maids?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver spotless results with eco-friendly products and trained professionals who care about your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-blue-600" />,
                title: "Spotless Results",
                description: "Our thorough cleaning techniques and attention to detail ensure your space is perfectly clean every time."
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Reliable Service",
                description: "Count on us to arrive on time, fully prepared, and ready to deliver exceptional cleaning services."
              },
              {
                icon: <Star className="h-8 w-8 text-blue-600" />,
                title: "Trusted Professionals",
                description: "Our background-checked, trained, and insured cleaners treat your home or office with respect."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="pt-8 text-center">
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:shadow-xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Cleaning Services</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From regular maintenance to deep cleaning, we offer a wide range of services to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Residential Cleaning",
                description: "Regular home cleaning tailored to your specific needs and preferences.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Deep Cleaning",
                description: "Intensive cleaning targeting built-up dirt and grime in all areas of your home.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "Commercial Cleaning",
                description: "Professional cleaning services for offices, retail spaces, and other commercial properties.",
                gradient: "from-green-500 to-green-600"
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={cn(
                  "h-64 bg-gradient-to-br flex items-center justify-center relative",
                  service.gradient
                )}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="relative z-10 text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <HomeIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-all duration-300">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Don&apos;t just take our word for it — hear from some of our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Safe Clean Maids exceeded all my expectations. They were thorough, professional, and left my home spotless. I couldn't be happier with their service.",
                author: "Sarah Johnson",
                role: "Homeowner"
              },
              {
                quote: "As a business owner, I need reliable cleaning services. Safe Clean Maids delivers consistently excellent results every time. Highly recommended!",
                author: "Michael Thompson",
                role: "Business Owner"
              },
              {
                quote: "After moving out, I needed a deep clean for my apartment. The team at Safe Clean Maids did an amazing job, and I got my full security deposit back!",
                author: "Lisa Garcia",
                role: "Apartment Resident"
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardContent className="pt-8 h-full flex flex-col">
                  <div className="flex mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="flex-grow">
                    <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                  </blockquote>
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Advantages Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                The Safe Clean Maids Advantage
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We go beyond basic cleaning to deliver an exceptional experience. Our trained professionals use premium eco-friendly products and follow detailed checklists to ensure consistent quality.
              </p>
              <ul className="space-y-6">
                {[
                  "100% Satisfaction Guarantee",
                  "Trained & Background-Checked Staff",
                  "Eco-Friendly Cleaning Products",
                  "Customized Cleaning Plans",
                  "Insured and Bonded Service"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mt-1">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <Link href="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full blur-lg"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/20 rounded-full blur-lg"></div>
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Professional Cleaning Demo</h3>
                    <p className="text-blue-700 leading-relaxed">Video placeholder - in a real implementation, this would showcase our cleaning process</p>
                  </div>
                </div>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Cleaner Space?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Book your cleaning service today and experience the Safe Clean Maids difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <Link href="/quotes">Schedule Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Link href="/quotes">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;