import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Cleaning Services</h1>
            <p className="text-xl text-blue-100">
              Professional cleaning services tailored to your specific needs. From residential to commercial, we have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="residential" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {services.map(service => (
                <TabsTrigger key={service.id} value={service.id}>
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map(service => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{service.name} Cleaning</h2>
                  <p className="text-lg text-gray-600 mt-2">{service.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.types.map((type, idx) => (
                    <Card key={idx} className="border-blue-100 hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle>{type.name}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600">{type.price}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {type.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cleaning Process</h2>
            <p className="text-lg text-gray-600">
              We follow a detailed process to ensure consistent quality and outstanding results every time.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
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
                  description: "Our professional team arrives on time and thoroughly cleans according to your service plan."
                },
                {
                  number: "04",
                  title: "Inspection",
                  description: "We perform a final check to ensure everything meets our high-quality standards."
                },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
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
                <div key={idx} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to experience our cleaning services?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your cleaning appointment today and enjoy a spotless environment.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Schedule Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;