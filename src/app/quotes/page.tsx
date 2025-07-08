'use client';
import { useState } from 'react';
import { CheckCircle, Home as HomeIcon, Building2, Star, MapPin, Clock, CheckCircle2, Calculator } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  sqft: string;
  bedrooms: string;
  bathrooms: string;
  serviceType: string;
  frequency: string;
  additionalServices: string[]; // Explicitly define as an array of strings
  specialRequests: string;
  preferredDate: string;
}

const Quotes = () => {
  // State for the form
  const [propertyType, setPropertyType] = useState('residential');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    sqft: '',
    bedrooms: '2',
    bathrooms: '1',
    serviceType: 'regular',
    frequency: 'once',
    additionalServices: [],
    specialRequests: '',
    preferredDate: '',
  });

   const handleCheckboxChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter(s => s !== service)
    }));
  };

  const additionalServices = [
    "Inside refrigerator cleaning",
    "Inside oven cleaning",
    "Window cleaning (interior)",
    "Cabinet interior cleaning",
    "Garage cleaning",
    "Basement cleaning",
    "Attic cleaning",
    "Appliance cleaning",
    "Wall washing",
    "Ceiling fan cleaning"
  ];

  const pricingFactors = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Property Size",
      description: "Square footage and number of rooms affect cleaning time and pricing"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Service Frequency",
      description: "Regular clients receive discounted rates compared to one-time cleanings"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Service Type",
      description: "Deep cleaning and specialty services are priced higher than regular cleaning"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Additional Services",
      description: "Extra services like inside appliances or window cleaning add to the total"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd send this data to your backend
    console.log('Form submitted:', { propertyType, ...formData });
    alert('Thank you for your request! We will contact you shortly with a custom quote.');
    
    // Reset form (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      sqft: '',
      bedrooms: '2',
      bathrooms: '1',
      serviceType: 'regular',
      frequency: 'once',
      additionalServices: [],
      specialRequests: '',
      preferredDate: '',
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-4xl font-bold mb-4">Get a Free Cleaning Quote</h1>
            <p className="text-xl text-blue-100">
              Tell us about your space and needs, and we&apos;ll provide a custom quote for our professional cleaning services.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Quote Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Price Estimates</h2>
            <p className="text-lg text-gray-600">
              Here are some of our standard pricing options for common cleaning needs. For a custom quote tailored to your specific requirements, please fill out the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: <HomeIcon className="h-8 w-8 text-blue-600" />,
                title: "Apartment Cleaning",
                description: "For apartments up to 1,000 sq ft",
                price: "$100 - $150",
                features: [
                  "2 bedrooms, 1 bathroom",
                  "Living room & kitchen",
                  "Regular cleaning service",
                  "2-3 hour service"
                ]
              },
              {
                icon: <HomeIcon className="h-8 w-8 text-blue-600" />,
                title: "House Cleaning",
                description: "For homes up to 2,500 sq ft",
                price: "$180 - $250",
                features: [
                  "3-4 bedrooms, 2 bathrooms",
                  "All living areas",
                  "Regular cleaning service",
                  "4-5 hour service"
                ]
              },
              {
                icon: <Building2 className="h-8 w-8 text-blue-600" />,
                title: "Office Cleaning",
                description: "For offices up to 2,000 sq ft",
                price: "$200 - $350",
                features: [
                  "Open office areas",
                  "Break rooms & bathrooms",
                  "Weekly service",
                  "After-hours cleaning"
                ]
              }
            ].map((option, idx) => (
              <Card
                key={idx}
                className="border-blue-100 shadow-sm hover:shadow-lg transform transition-transform hover:-translate-y-1 text-center fade-in-up"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                    {option.icon}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">{option.title}</h3>
                  <p className="mb-2 text-gray-600">{option.description}</p>
                  <p className="mb-6 text-3xl font-bold text-blue-600">{option.price}</p>
                  <ul className="space-y-2 text-left mb-6">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="#quote-form">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Form */}
      <section id="quote-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Custom Quote</h2>
              <p className="text-lg text-gray-600">
                Complete the form below for a personalized cleaning quote tailored to your specific needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md fade-in-up">
              <Tabs value={propertyType} onValueChange={setPropertyType} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="residential" className="text-base">
                    Residential
                  </TabsTrigger>
                  <TabsTrigger value="commercial" className="text-base">
                    Commercial
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Property Information */}
                    <TabsContent value="residential" className="space-y-4">
                      <h3 className="text-xl font-semibold">Property Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            name="address"
                            placeholder="123 Main St"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sqft">Square Footage</Label>
                          <Input
                            id="sqft"
                            name="sqft"
                            placeholder="1000"
                            value={formData.sqft}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bedrooms">Bedrooms</Label>
                          <Select
                            value={formData.bedrooms}
                            onValueChange={(value) => handleSelectChange('bedrooms', value)}
                          >
                            <SelectTrigger id="bedrooms">
                              <SelectValue placeholder="Select bedrooms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem className="bg-white" value="1">1 Bedroom</SelectItem>
                              <SelectItem className="bg-white" value="2">2 Bedrooms</SelectItem>
                              <SelectItem className="bg-white" value="3">3 Bedrooms</SelectItem>
                              <SelectItem className="bg-white" value="4">4 Bedrooms</SelectItem>
                              <SelectItem className="bg-white" value="5+">5+ Bedrooms</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bathrooms">Bathrooms</Label>
                          <Select
                            value={formData.bathrooms}
                            onValueChange={(value) => handleSelectChange('bathrooms', value)}
                          >
                            <SelectTrigger id="bathrooms">
                              <SelectValue placeholder="Select bathrooms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem className="bg-white" value="1">1 Bathroom</SelectItem>
                              <SelectItem className="bg-white" value="2">2 Bathrooms</SelectItem>
                              <SelectItem className="bg-white" value="3">3 Bathrooms</SelectItem>
                              <SelectItem className="bg-white" value="4+">4+ Bathrooms</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="commercial" className="space-y-4">
                      <h3 className="text-xl font-semibold">Property Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">Business Address</Label>
                          <Input
                            id="address"
                            name="address"
                            placeholder="123 Business Ave"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sqft">Square Footage</Label>
                          <Input
                            id="sqft"
                            name="sqft"
                            placeholder="2000"
                            value={formData.sqft}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Business Type</Label>
                          <Select
                            value={formData.bedrooms} // Reusing bedrooms field for business type
                            onValueChange={(value) => handleSelectChange('bedrooms', value)}
                          >
                            <SelectTrigger id="businessType">
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem className="bg-white" value="office">Office Space</SelectItem>
                              <SelectItem className="bg-white" value="retail">Retail Store</SelectItem>
                              <SelectItem className="bg-white" value="medical">Medical Facility</SelectItem>
                              <SelectItem className="bg-white" value="restaurant">Restaurant</SelectItem>
                              <SelectItem className="bg-white" value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Service Details */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Service Details</h3>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-base">Type of Service</Label>
                          <RadioGroup
                            value={formData.serviceType}
                            onValueChange={(value) => handleSelectChange('serviceType', value)}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="regular" id="regular" />
                              <Label htmlFor="regular">Regular Cleaning</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="deep" id="deep" />
                              <Label htmlFor="deep">Deep Cleaning</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="move" id="move" />
                              <Label htmlFor="move">Move In/Out Cleaning</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label className="text-base">Cleaning Frequency</Label>
                          <RadioGroup
                            value={formData.frequency}
                            onValueChange={(value) => handleSelectChange('frequency', value)}
                            className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="once" id="once" />
                              <Label htmlFor="once">One-Time</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="weekly" id="weekly" />
                              <Label htmlFor="weekly">Weekly</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="biweekly" id="biweekly" />
                              <Label htmlFor="biweekly">Bi-Weekly</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="monthly" id="monthly" />
                              <Label htmlFor="monthly">Monthly</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Additional Services */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-800">Additional Services</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {additionalServices.map((service, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`service-${idx}`}
                                  checked={formData.additionalServices.includes(service)}
                                  onCheckedChange={(checked) => handleCheckboxChange(service, checked as boolean)}
                                />
                                <Label htmlFor={`service-${idx}`} className="text-sm">{service}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialRequests">Special Requests or Notes</Label>
                          <Textarea
                            id="specialRequests"
                            name="specialRequests"
                            placeholder="Let us know if you have any specific requests or areas that need special attention..."
                            rows={4}
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full md:w-auto md:px-8">
                      Submit Quote Request
                    </Button>
                  </div>
                </form>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Affects Your Quote</h2>
            <p className="text-lg text-gray-600">
              Several factors influence your cleaning service quote. Understanding these helps you get the most accurate estimate.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingFactors.map((factor, idx) => (
                <div key={idx} className="flex flex-col items-center text-center fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Request your quote today and experience the Safe Clean Maids difference.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="#quote-form">Get Your Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Quotes;