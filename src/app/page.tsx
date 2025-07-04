import { ArrowRight, Check, Clock, Home as HomeIcon, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:flex-row lg:justify-between">
            <div className="max-w-2xl space-y-6 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="block">Professional Cleaning</span>
                <span className="block mt-1">for Your Peace of Mind</span>
              </h1>
              <p className="text-lg text-blue-100 md:text-xl">
                Experience spotless homes and workspaces with our detail-oriented cleaning services.
                Safe, reliable, and thorough - we bring the sparkle back to your space.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-500">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="mt-10 hidden rounded-lg bg-white/10 backdrop-blur-sm p-6 lg:block">
              <div className="flex flex-col gap-5 min-w-[320px]">
                <h3 className="text-2xl font-semibold">Get a Free Quote</h3>
                <div className="space-y-4">
                  <div className="rounded-md bg-white/20 p-3">
                    <div className="flex items-center gap-3">
                      <HomeIcon className="h-5 w-5 text-blue-200" />
                      <span>2-Bedroom Apartment</span>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <span>Regular Cleaning</span>
                      <span className="font-semibold">$120</span>
                    </div>
                  </div>
                  <div className="rounded-md bg-white/20 p-3">
                    <div className="flex items-center gap-3">
                      <HomeIcon className="h-5 w-5 text-blue-200" />
                      <span>3-Bedroom House</span>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <span>Deep Cleaning</span>
                      <span className="font-semibold">$250</span>
                    </div>
                  </div>
                  <div className="rounded-md bg-white/20 p-3">
                    <div className="flex items-center gap-3">
                      <HomeIcon className="h-5 w-5 text-blue-200" />
                      <span>Office (1000 sq ft)</span>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <span>Commercial Cleaning</span>
                      <span className="font-semibold">$200</span>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white mask-wave-after"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Safe Clean Maids?</h2>
            <p className="text-lg text-gray-600">
              We deliver spotless results with eco-friendly products and trained professionals who care about your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card key={idx} className="border-blue-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cleaning Services</h2>
            <p className="text-lg text-gray-600">
              From regular maintenance to deep cleaning, we offer a wide range of services to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Cleaning",
                description: "Regular home cleaning tailored to your specific needs and preferences.",
                imageClass: "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Im0zIDkgOS05IDkgOSIvPjxwYXRoIGQ9Ik01IDggdjEzIGgxNCBWOCIvPjxyZWN0IHg9IjEwIiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iOSIvPjwvc3ZnPg==')]"
              },
              {
                title: "Deep Cleaning",
                description: "Intensive cleaning targeting built-up dirt and grime in all areas of your home.",
                imageClass: "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik03IDE5YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDUuNWwyIDJINTkuNWEuNSAxLjUgMCAwIDEgMS41IDEuNWwxLjUgMyAxLjUgMyAzIDhWMTdhMiAyIDAgMCAxLTIgMlptMiAwIi8+PC9zdmc+')]"
              },
              {
                title: "Commercial Cleaning",
                description: "Professional cleaning services for offices, retail spaces, and other commercial properties.",
                imageClass: "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcng9IjIiIHJ5PSIyIi8+PGxpbmUgeDE9IjkiIHkxPSIyIiB4Mj0iOSIgeTI9IjYiLz48bGluZSB4MT0iMTUiIHkxPSIyIiB4Mj0iMTUiIHkyPSI2Ii8+PGxpbmUgeDE9IjQiIHkxPSIxMCIgeDI9IjIwIiB5Mj0iMTAiLz48L3N2Zz4=')]"
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className={cn(
                  "h-48 bg-blue-200 bg-opacity-30 bg-center bg-no-repeat", 
                  service.imageClass,
                  "flex items-center justify-center"
                )}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 w-full p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="mb-4 text-white/80 opacity-0 group-hover:opacity-100 transition-all">
                    {service.description}
                  </p>
                  <Link href="/services" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-200">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it — hear from some of our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card key={idx} className="border-blue-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 text-blue-600">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="inline-block h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="flex-grow">
                      <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    </blockquote>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready for a Cleaner Space?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your cleaning service today and experience the Safe Clean Maids difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Schedule Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-500">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                The Safe Clean Maids Advantage
              </h2>
              <p className="text-lg text-gray-600">
                We go beyond basic cleaning to deliver an exceptional experience. Our trained professionals use premium eco-friendly products and follow detailed checklists to ensure consistent quality.
              </p>
              <ul className="space-y-4">
                {[
                  "100% Satisfaction Guarantee",
                  "Trained & Background-Checked Staff",
                  "Eco-Friendly Cleaning Products",
                  "Customized Cleaning Plans",
                  "Insured and Bonded Service"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white rounded-lg p-8 shadow-md">
              <div className="aspect-video rounded-lg bg-blue-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Professional Cleaning Demo</h3>
                  <p className="text-blue-700">Video placeholder - in a real implementation, this would be a video showcasing our cleaning process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mask-wave-after::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 48px;
          background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 48%22 preserveAspectRatio=%22none%22%3E%3Cpath fill=%22white%22 d=%22M0,48 L1440,48 L1440,0 C1380,20 1320,48 1200,48 C1080,48 1020,0 900,0 C780,0 720,48 600,48 C480,48 420,0 300,0 C180,0 120,48 0,48 Z%22/%3E%3C/svg%3E');
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
};

export default Home;