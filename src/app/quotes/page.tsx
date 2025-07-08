'use client';
import { useState } from 'react';
import { CheckCircle, Home as HomeIcon, Building2, Star, MapPin, Clock, CheckCircle2, Calculator, Sparkles } from 'lucide-react';
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
  additionalServices: string[];
  specialRequests: string;
  preferredDate: string;
}

const Quotes = () => {
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
    "Ceiling fan cleaning",
    "Inside closet cleaning",
    "Wall spot cleaning"
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
    console.log('Form submitted:', { propertyType, ...formData });
    alert('Thank you for your request! We will contact you shortly with a custom quote.');
    
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
      <style jsx global>{`
        /* Custom animations for select dropdown */
        @keyframes slideDownAndFade {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideUpAndFade {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
        }
        
        /* Apply animations to Radix Select Content */
        [data-radix-select-content] {
          animation-duration: 250ms;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        [data-radix-select-content][data-state="open"] {
          animation-name: slideDownAndFade;
        }
        
        [data-radix-select-content][data-state="closed"] {
          animation-name: slideUpAndFade;
        }
        
        /* Smooth trigger transitions */
        [data-radix-select-trigger] {
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        [data-radix-select-trigger][data-state="open"] {
          background-color: rgb(239 246 255);
          border-color: rgb(59 130 246);
          box-shadow: 0 0 0 2px rgb(59 130 246 / 0.2);
        }
        
        /* Smooth icon rotation */
        [data-radix-select-trigger] [data-radix-select-icon] {
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        [data-radix-select-trigger][data-state="open"] [data-radix-select-icon] {
          transform: rotate(180deg);
        }
        
        /* Item hover animations */
        [data-radix-select-item] {
          transition: all 0.15s ease-out;
        }
        
        [data-radix-select-item]:hover {
          background-color: rgb(239 246 255);
          transform: translateX(2px);
        }
      `}</style>
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
              Get a Free Cleaning Quote
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Tell us about your space and needs, and we&apos;ll provide a custom quote for our professional cleaning services.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Quote Cards */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Price Estimates</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Here are some of our standard pricing options for common cleaning needs. For a custom quote tailored to your specific requirements, please fill out the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: <HomeIcon className="h-8 w-8 text-blue-600" />,
                title: "Apartment Cleaning",
                description: "For apartments up to 1,000 sq ft",
                price: "$100 - $150",
                popular: false,
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
                popular: true,
                features: [
                  "3-4 bedrooms, 2 bathrooms",
                  "All living areas",
                  "Regular cleaning service",
                  "4-5 hour service"
                ]
              },
              {
                icon: <Building2 className="h-8 w-8 text-blue-600" />,
                title: "Post-Construction Cleaning",
                description: "For post-construction cleanup",
                price: "Custom Quote",
                popular: false,
                features: [
                  "Debris removal",
                  "Dust removal from all surfaces",
                  "Detail cleaning of new fixtures",
                  "Floor cleaning and polishing"
                ]
              }
            ].map((option, idx) => (
              <Card key={idx} className={`relative border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                option.popular ? 'border-blue-500 bg-gradient-to-b from-blue-50 to-white' : 'border-gray-200 hover:border-blue-300'
              }`}>
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="pt-8 text-center">
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                    {option.icon}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{option.title}</h3>
                  <p className="mb-4 text-gray-600">{option.description}</p>
                  <p className="mb-8 text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{option.price}</p>
                  <ul className="space-y-3 text-left mb-8">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${option.popular ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg' : ''}`}>
                    <Link href="#quote-form">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Custom Quote Form */}
      <section id="quote-form" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Request a Custom Quote</h2>
              <p className="text-xl text-gray-600">
                Complete the form below for a personalized cleaning quote tailored to your specific needs.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
              <Tabs value={propertyType} onValueChange={setPropertyType} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-10 bg-gray-100 p-1 rounded-xl">
                  <TabsTrigger value="residential" className="text-base py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                    Residential
                  </TabsTrigger>
                  <TabsTrigger value="commercial" className="text-base py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                    Commercial
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-10">
                    {/* Enhanced Contact Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                          1
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate" className="text-base font-medium">Preferred Date</Label>
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Property Information */}
                    <TabsContent value="residential" className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                          2
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Property Information</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="address" className="text-base font-medium">Address</Label>
                          <Input
                            id="address"
                            name="address"
                            placeholder="123 Main St"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sqft" className="text-base font-medium">Square Footage</Label>
                          <Input
                            id="sqft"
                            name="sqft"
                            placeholder="1000"
                            value={formData.sqft}
                            onChange={handleInputChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bedrooms" className="text-base font-medium">Bedrooms</Label>
                          <Select
                            value={formData.bedrooms}
                            onValueChange={(value) => handleSelectChange('bedrooms', value)}
                          >
                            <SelectTrigger 
                              id="bedrooms" 
                              className="h-12 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                            >
                              <SelectValue placeholder="Select bedrooms" />
                            </SelectTrigger>
                            <SelectContent 
                              className="bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50 min-w-[var(--radix-select-trigger-width)]"
                              sideOffset={4}
                            >
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="1">1 Bedroom</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="2">2 Bedrooms</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="3">3 Bedrooms</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="4">4 Bedrooms</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="5+">5+ Bedrooms</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bathrooms" className="text-base font-medium">Bathrooms</Label>
                          <Select
                            value={formData.bathrooms}
                            onValueChange={(value) => handleSelectChange('bathrooms', value)}
                          >
                            <SelectTrigger 
                              id="bathrooms" 
                              className="h-12 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                            >
                              <SelectValue placeholder="Select bathrooms" />
                            </SelectTrigger>
                            <SelectContent 
                              className="bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50 min-w-[var(--radix-select-trigger-width)]"
                              sideOffset={4}
                            >
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="1">1 Bathroom</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="2">2 Bathrooms</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="3">3 Bathrooms</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="4+">4+ Bathrooms</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="commercial" className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                          2
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Property Information</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="address" className="text-base font-medium">Business Address</Label>
                          <Input
                            id="address"
                            name="address"
                            placeholder="123 Business Ave"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sqft" className="text-base font-medium">Square Footage</Label>
                          <Input
                            id="sqft"
                            name="sqft"
                            placeholder="2000"
                            value={formData.sqft}
                            onChange={handleInputChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessType" className="text-base font-medium">Business Type</Label>
                          <Select
                            value={formData.bedrooms}
                            onValueChange={(value) => handleSelectChange('bedrooms', value)}
                          >
                            <SelectTrigger 
                              id="businessType" 
                              className="h-12 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                            >
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                            <SelectContent 
                              className="bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50 min-w-[var(--radix-select-trigger-width)]"
                              sideOffset={4}
                            >
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="office">Office Space</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Enhanced Service Details */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                          3
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Service Details</h3>
                      </div>
                      <div className="space-y-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <Label className="text-lg font-medium text-gray-900 mb-4 block">Type of Service</Label>
                          <RadioGroup
                            value={formData.serviceType}
                            onValueChange={(value) => handleSelectChange('serviceType', value)}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                          >
                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                              <RadioGroupItem value="regular" id="regular" />
                              <Label htmlFor="regular" className="font-medium">Regular Cleaning</Label>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                              <RadioGroupItem value="deep" id="deep" />
                              <Label htmlFor="deep" className="font-medium">Deep Cleaning</Label>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                              <RadioGroupItem value="move" id="move" />
                              <Label htmlFor="move" className="font-medium">Move In/Out Cleaning</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                          <Label className="text-lg font-medium text-gray-900 mb-4 block">Cleaning Frequency</Label>
                          <RadioGroup
                            value={formData.frequency}
                            onValueChange={(value) => handleSelectChange('frequency', value)}
                            className="grid grid-cols-1 md:grid-cols-4 gap-4"
                          >
                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                              <RadioGroupItem value="once" id="once" />
                              <Label htmlFor="once" className="font-medium">One-Time</Label>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                              <RadioGroupItem value="weekly" id="weekly" />
                              <Label htmlFor="weekly" className="font-medium">Weekly</Label>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                              <RadioGroupItem value="biweekly" id="biweekly" />
                              <Label htmlFor="biweekly" className="font-medium">Bi-Weekly</Label>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                              <RadioGroupItem value="monthly" id="monthly" />
                              <Label htmlFor="monthly" className="font-medium">Monthly</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Enhanced Additional Services */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h4 className="text-lg font-medium text-gray-900 mb-4">Additional Services</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {additionalServices.map((service, idx) => (
                              <div key={idx} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                                <Checkbox
                                  id={`service-${idx}`}
                                  checked={formData.additionalServices.includes(service)}
                                  onCheckedChange={(checked) => handleCheckboxChange(service, checked as boolean)}
                                />
                                <Label htmlFor={`service-${idx}`} className="text-sm font-medium">{service}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="specialRequests" className="text-lg font-medium text-gray-900">Special Requests or Notes</Label>
                          <Textarea
                            id="specialRequests"
                            name="specialRequests"
                            placeholder="Let us know if you have any specific requests or areas that need special attention..."
                            rows={5}
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <Button type="submit" className="w-full md:w-auto md:px-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg font-semibold shadow-lg">
                        Submit Quote Request
                      </Button>
                    </div>
                  </div>
                </form>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Factors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Affects Your Quote</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Several factors influence your cleaning service quote. Understanding these helps you get the most accurate estimate.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingFactors.map((factor, idx) => (
                <div key={idx} className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{factor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Request your quote today and experience the Safe Clean Maids difference.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <a href="#quote-form">Get Your Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quotes;