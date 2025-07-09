'use client'; // This directive is crucial for client-side hooks

import { CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import clsx from "clsx";
import { useState, useRef, useEffect } from 'react'; // Import React hooks

const Services = () => {
  // Declare state variables and refs at the top of the component
  const [activetab, setActiveTab] = useState('residential'); // State to track the active tab for the highlight bar
  const [displayTab, setDisplayTab] = useState('residential'); // State to control which content is actually displayed by Radix Tabs
  const [isContentVisible, setIsContentVisible] = useState(false); // New state to control the fade-in animation of the *newly displayed* content

  const indicatorRef = useRef<HTMLSpanElement>(null); // Ref for the animated indicator span
  const [indicatorLeft, setIndicatorLeft] = useState(0); // State for the indicator's left position
  const [indicatorWidth, setIndicatorWidth] = useState(0); // State for the indicator's width

  const services = [
    {
      id: 'residential',
      name: 'Residential',
      description: 'Keep your home clean and comfortable with our residential cleaning services.',
      types: [
        {
          name: 'Regular Cleaning',
          price: 'From $100',
          features: [
            'Dusting all accessible surfaces',
            'Vacuuming carpets and floors',
            'Mopping hard floors',
            'Bathroom cleaning and sanitizing',
            'Kitchen cleaning and sanitizing',
            'Emptying trash bins',
            'Making beds (linens provided)'
          ]
        },
        {
          name: 'Deep Cleaning',
          price: 'From $200',
          features: [
            'All regular cleaning services',
            'Cleaning inside appliances',
            'Detailed baseboards and trim',
            'Removing scale from bathroom fixtures',
            'Cleaning window sills and frames',
            'Detailed cabinet fronts cleaning',
            'Thorough dust removal from all surfaces'
          ]
        },
        {
          name: 'Move In/Out Cleaning',
          price: 'From $250',
          features: [
            'All deep cleaning services',
            'Inside cabinet cleaning',
            'Inside closet cleaning',
            'Refrigerator cleaning',
            'Oven cleaning',
            'Window cleaning',
            'Wall spot cleaning'
          ]
        }
      ]
    },
    {
      id: 'commercial',
      name: 'Commercial',
      description: 'Professional cleaning solutions for your business space.',
      types: [
        {
          name: 'Office Cleaning',
          price: 'From $150',
          features: [
            'Reception and common areas cleaning',
            'Workstation dusting',
            'Restroom sanitizing',
            'Kitchen/break room cleaning',
            'Trash removal',
            'Vacuuming and mopping floors',
            'Glass partition spot cleaning'
          ]
        },
        {
          name: 'Retail Space Cleaning',
          price: 'From $180',
          features: [
            'Sales floor cleaning',
            'Entrance and display cleaning',
            'Restroom sanitizing',
            'Dusting shelves and fixtures',
            'Trash removal',
            'Floor care (vacuum/mop)',
            'Window and glass cleaning'
          ]
        },
        {
          name: 'Medical Facility',
          price: 'From $250',
          features: [
            'Waiting area sanitization',
            'Exam room disinfection',
            'Medical-grade cleaning protocols',
            'HIPAA-compliant staff',
            'Restroom deep cleaning',
            'Specialized floor care',
            'Touch point disinfection'
          ]
        }
      ]
    },
    {
      id: 'specialty',
      name: 'Specialty',
      description: 'Specialized cleaning services for specific needs.',
      types: [
        {
          name: 'Post-Construction',
          price: 'Custom Quote',
          features: [
            'Debris removal',
            'Dust removal from all surfaces',
            'Detail cleaning of new fixtures',
            'Floor cleaning and polishing',
            'Window and glass cleaning',
            'Paint overspray removal',
            'Final touch-ups'
          ]
        },
        {
          name: 'Eco-Friendly Cleaning',
          price: 'From $120',
          features: [
            'All natural cleaning products',
            'Microfiber technology',
            'HEPA vacuum filtration',
            'Steam cleaning options',
            'Non-toxic disinfection',
            'Safe for children and pets',
            'Reduced environmental impact'
          ]
        },
        {
          name: 'Event Cleaning',
          price: 'Custom Quote',
          features: [
            'Pre-event setup cleaning',
            'Post-event cleanup',
            'Quick turnaround service',
            'Trash management',
            'Floor care',
            'Restroom maintenance',
            'Complete venue restoration'
          ]
        }
      ]
    }
  ];

  // useEffect to calculate and update the indicator's position and width
  useEffect(() => {
    const updateIndicator = () => {
      // Find the button element that corresponds to the active tab by its ID
      const activeTabElement = document.getElementById(activetab);
      if (activeTabElement && indicatorRef.current) {
        // Set the left position and width of the indicator based on the active button
        setIndicatorLeft(activeTabElement.offsetLeft);
        setIndicatorWidth(activeTabElement.offsetWidth);
      }
    };

    updateIndicator(); // Call once on component mount and when activetab changes
    window.addEventListener('resize', updateIndicator); // Re-calculate on window resize
    return () => {
      window.removeEventListener('resize', updateIndicator); // Clean up event listener
    };
  }, [activetab]); // Re-run this effect whenever activetab changes

  // useEffect to manage the content visibility state for entry animation
  useEffect(() => {
    // When displayTab changes, the new content mounts.
    // Set isContentVisible to false initially, then true after a small delay
    // to trigger the CSS transition for fade-in from its initial state.
    setIsContentVisible(false); // Immediately set to false when displayTab changes (new content will be initially hidden)
    const timer = setTimeout(() => {
      setIsContentVisible(true); // After a tiny delay, set to true to trigger the fade-in transition
    }, 50); // A small delay to ensure the browser applies the initial opacity-0 state before transitioning

    return () => clearTimeout(timer); // Clean up the timer to prevent memory leaks
  }, [displayTab]); // Re-run this effect whenever displayTab changes

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
              <span className="text-sm font-medium">Professional Cleaning Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Professional cleaning services tailored to your specific needs. From residential to commercial, we have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Services Tabs */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          {/* Using Tabs from ui/tabs but customizing the TabsList with custom buttons */}
          {/* Tabs value is now controlled by 'displayTab' for content visibility */}
          <Tabs value={displayTab} className="max-w-6xl mx-auto">
            <div className="relative flex rounded-2xl overflow-hidden bg-gray-100 p-2 mb-12 shadow-lg">
              {services.map(service => (
                <button
                  key={service.id}
                  id={service.id} // IMPORTANT: Add id to match `activetab` for `document.getElementById`
                  onClick={() => {
                    if (activetab !== service.id) { // Only trigger if clicking a different tab
                      // Immediately update displayTab and activetab.
                      // The `useEffect` tied to `displayTab` will then handle the fade-in.
                      setDisplayTab(service.id);
                      setActiveTab(service.id);
                    }
                  }}
                  className={clsx(
                    "flex-1 py-4 px-6 text-center relative z-10 font-semibold text-lg transition-all duration-300",
                    activetab === service.id ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {service.name}
                </button>
              ))}
              {/* The animated indicator span */}
              <span
                ref={indicatorRef}
                className="absolute top-2 h-[calc(100%-16px)] bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out border border-blue-100"
                style={{ left: indicatorLeft + 8, width: indicatorWidth - 16 }}
              />
            </div>

            {/* TabsContent now includes animation classes for fade and subtle movement */}
            {services.map(service => (
              <TabsContent
                key={service.id}
                value={service.id}
                className={clsx(
                  "transition-all duration-500 ease-in-out", // Apply transition to opacity and transform
                  isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4" // Fade in from slightly below
                )}
              >
                <div className="mb-12 text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.name} Cleaning</h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{service.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.types.map((type, idx) => (
                    <Card key={idx} className="border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-2xl text-gray-900">{type.name}</CardTitle>
                        <CardDescription className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{type.price}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {type.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mt-0.5">
                                <CheckCircle2 className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="pt-6">
                        <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Cleaning Process</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We follow a detailed process to ensure consistent quality and outstanding results every time.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Book Online",
                  description: "Schedule your cleaning service through our easy online booking system or by phone."
                },
                {
                  number: "02",
                  title: "Confirmation",
                  description: "We'll confirm the details of your appointment and send a reminder before we arrive."
                },
                {
                  number: "03",
                  title: "Cleaning",
                  description: "Our professionals arrive on time and clean according to your service plan."
                },
                {
                  number: "04",
                  title: "Inspection",
                  description: "We perform a final check to ensure everything meets our high-quality standards."
                },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl group-hover:from-blue-600 group-hover:to-blue-700 transform group-hover:-translate-y-2 transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>

            <div className="space-y-8">
              {[
                {
                  q: "How often should I schedule cleaning services?",
                  a: "It depends on your specific needs. Many residential clients prefer weekly or bi-weekly service, while businesses often require daily or several times per week. During your initial consultation, we can recommend a cleaning schedule based on your space and requirements."
                },
                {
                  q: "Do I need to provide cleaning supplies?",
                  a: "No, we bring all necessary cleaning supplies and equipment. We use high-quality, eco-friendly products as our standard. If you have specific products you'd prefer we use, please let us know in advance."
                },
                {
                  q: "Are your cleaning professionals insured and bonded?",
                  a: "Yes, all our cleaning professionals are thoroughly vetted, background-checked, insured, and bonded for your peace of mind."
                },
                {
                  q: "What if I'm not satisfied with the cleaning service?",
                  a: "Your satisfaction is our priority. If you're not completely satisfied, please contact us within 24 hours of your cleaning, and we'll return to re-clean any areas of concern at no additional cost."
                },
                {
                  q: "Can I get a customized cleaning plan for my needs?",
                  a: "Absolutely! We understand that each home and business has unique cleaning requirements. We offer customized cleaning plans tailored specifically to your needs and preferences."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{faq.q}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to experience our cleaning services?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Book your cleaning appointment today and enjoy a spotless environment.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <Link href="/contact">Schedule Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;