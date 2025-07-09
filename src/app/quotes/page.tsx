'use client';
import React, { useState, useEffect } from 'react';
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
    bedrooms: '',
    bathrooms: '',
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
        /* Dropdown animations */
        .custom-select-content {
          animation-duration: 400ms !important;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        
        .custom-select-content[data-state="open"] {
          animation-name: customSlideIn !important;
        }
        
        .custom-select-content[data-state="closed"] {
          animation-name: customSlideOut !important;
        }
        
        @keyframes customSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes customSlideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-10px) scale(0.9);
          }
        }
        
        .custom-select-trigger {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        
        .custom-select-trigger[data-state="open"] {
          background-color: rgb(239 246 255) !important;
          border-color: rgb(59 130 246) !important;
          box-shadow: 0 0 0 3px rgb(59 130 246 / 0.1) !important;
        }
        
        .custom-select-trigger[data-state="open"] svg {
          transform: rotate(180deg) !important;
        }
        
        .custom-select-trigger svg {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        /* Enhanced Tab Animations */
        .custom-tabs-list {
          position: relative;
          background: rgb(243 244 246);
          padding: 4px;
          border-radius: 12px;
        }
        
        .custom-tabs-list::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          width: calc(50% - 4px);
          height: calc(100% - 8px);
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        
        .custom-tabs-list[data-active="commercial"]::before {
          transform: translateX(100%);
        }
        
        .custom-tab-trigger {
          position: relative;
          z-index: 2;
          background: transparent !important;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: rgb(107 114 128);
        }
        
        .custom-tab-trigger[data-state="active"] {
          color: rgb(59 130 246) !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        /* Radio Button Animations */
        .custom-radio-group {
          display: grid;
          gap: 16px;
        }
        
        .custom-radio-item {
          background: white;
          border: 2px solid rgb(229 231 235);
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .custom-radio-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          transition: left 0.5s ease;
          pointer-events: none;
        }
        
        .custom-radio-item:hover {
          border-color: rgb(59 130 246);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }
        
        .custom-radio-item:hover::before {
          left: 100%;
        }
        
        .custom-radio-item[data-state="checked"] {
          border-color: rgb(59 130 246);
          background: linear-gradient(135deg, rgb(239 246 255) 0%, white 100%);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }
        
        .custom-radio-item[data-state="checked"]::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Checkbox Animations */
        .custom-checkbox-item {
          background: white;
          border: 2px solid rgb(229 231 235);
          border-radius: 8px;
          padding: 12px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .custom-checkbox-item:hover {
          border-color: rgb(59 130 246);
          transform: translateX(4px);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
        }
        
        .custom-checkbox-item[data-state="checked"] {
          border-color: rgb(59 130 246);
          background: linear-gradient(135deg, rgb(239 246 255) 0%, white 100%);
          transform: translateX(4px);
        }
        
        /* Enhanced checkbox styling */
        .custom-checkbox {
          transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
          border: 2px solid rgb(59 130 246);
          flex-shrink: 0;
        }
        
        .custom-checkbox[data-state="checked"] {
          background: rgb(59 130 246);
          transform: scale(1.05);
        }
        
        .custom-checkbox svg {
          transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Frequency button animations */
        .custom-frequency-grid {
          display: grid;
          gap: 16px;
        }
        
        .custom-frequency-item {
          background: white;
          border: 2px solid rgb(229 231 235);
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .custom-frequency-item::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        
        .custom-frequency-item:hover::before {
          width: 200%;
          height: 200%;
        }
        
        .custom-frequency-item:hover {
          border-color: rgb(59 130 246);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.15);
        }
        
        .custom-frequency-item[data-state="checked"] {
          border-color: rgb(59 130 246);
          background: linear-gradient(135deg, rgb(239 246 255) 0%, white 100%);
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
        }
        
        .custom-frequency-item[data-state="checked"]::before {
          width: 100%;
          height: 100%;
          background: rgba(59, 130, 246, 0.05);
        }

        /* Required field styling */
        label:has(+ input[required]) {
          position: relative;
        }
        
        label:has(+ input[required])::after {
          content: ' *';
          color: rgb(239 68 68);
          font-weight: 600;
        }
        
        /* Form validation styles */
        input:invalid {
          border-color: rgb(239 68 68);
        }
        
        input:invalid:focus {
          ring-color: rgb(239 68 68);
          border-color: rgb(239 68 68);
        }
        
        .required-indicator {
          color: rgb(239 68 68);
          font-weight: 600;
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
                <TabsList className="custom-tabs-list grid w-full grid-cols-2 mb-10 bg-gray-100 p-1 rounded-xl" data-active={propertyType}>
                  <TabsTrigger value="residential" className="custom-tab-trigger text-base py-3 rounded-lg">
                    Residential
                  </TabsTrigger>
                  <TabsTrigger value="commercial" className="custom-tab-trigger text-base py-3 rounded-lg">
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
                          <Label htmlFor="bedrooms" className="text-base font-medium">Bedrooms *</Label>
                          <Select
                            value={formData.bedrooms}
                            onValueChange={(value) => handleSelectChange('bedrooms', value)}
                            required
                          >
                            <SelectTrigger 
                              id="bedrooms" 
                              className="custom-select-trigger h-12 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 bg-white shadow-sm hover:shadow-md"
                            >
                              <SelectValue placeholder="Select number of bedrooms" />
                            </SelectTrigger>
                            <SelectContent 
                              className="custom-select-content bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50"
                              sideOffset={8}
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
                          <Label htmlFor="bathrooms" className="text-base font-medium">Bathrooms <span className="required-indicator">*</span></Label>
                          <Select
                            value={formData.bathrooms}
                            onValueChange={(value) => handleSelectChange('bathrooms', value)}
                            required
                          >
                            <SelectTrigger 
                              id="bathrooms" 
                              className="custom-select-trigger h-12 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 bg-white shadow-sm hover:shadow-md"
                            >
                              <SelectValue placeholder="Select number of bathrooms" />
                            </SelectTrigger>
                            <SelectContent 
                              className="custom-select-content bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50"
                              sideOffset={8}
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
                              className="custom-select-trigger h-12 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 bg-white shadow-sm hover:shadow-md"
                            >
                              <SelectValue placeholder="Select your business type" />
                            </SelectTrigger>
                            <SelectContent 
                              className="custom-select-content bg-white border-2 border-gray-200 rounded-lg shadow-xl z-50"
                              sideOffset={8}
                            >
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="office">Office Space</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="post-construction">Post-Construction</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="event">Event Cleaning</SelectItem>
                              <SelectItem className="hover:bg-blue-50 focus:bg-blue-50 transition-all duration-150 cursor-pointer py-3 rounded-md mx-1" value="airbnb">AirBnB/Vrbo</SelectItem>
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
                            className="custom-radio-group grid grid-cols-1 md:grid-cols-3 gap-4"
                          >
                            {propertyType === 'residential' ? (
                              <>
                                <Label htmlFor="regular" className="custom-radio-item flex items-center space-x-3" data-state={formData.serviceType === 'regular' ? 'checked' : 'unchecked'}>
                                  <RadioGroupItem value="regular" id="regular" />
                                  <span className="font-medium cursor-pointer">Regular Cleaning</span>
                                </Label>
                                <Label htmlFor="deep" className="custom-radio-item flex items-center space-x-3" data-state={formData.serviceType === 'deep' ? 'checked' : 'unchecked'}>
                                  <RadioGroupItem value="deep" id="deep" />
                                  <span className="font-medium cursor-pointer">Deep Cleaning</span>
                                </Label>
                                <Label htmlFor="move" className="custom-radio-item flex items-center space-x-3" data-state={formData.serviceType === 'move' ? 'checked' : 'unchecked'}>
                                  <RadioGroupItem value="move" id="move" />
                                  <span className="font-medium cursor-pointer">Move In/Out Cleaning</span>
                                </Label>
                              </>
                            ) : (
                              <>
                                <Label htmlFor="office" className="custom-radio-item flex items-center space-x-3" data-state={formData.serviceType === 'office' ? 'checked' : 'unchecked'}>
                                  <RadioGroupItem value="office" id="office" />
                                  <span className="font-medium cursor-pointer">Office Cleaning</span>
                                </Label>
                                <Label htmlFor="construction" className="custom-radio-item flex items-center space-x-3" data-state={formData.serviceType === 'construction' ? 'checked' : 'unchecked'}>
                                  <RadioGroupItem value="construction" id="construction" />
                                  <span className="font-medium cursor-pointer">Post-Construction</span>
                                </Label>
                                <Label htmlFor="event" className="custom-radio-item flex items-center space-x-3" data-state={formData.serviceType === 'event' ? 'checked' : 'unchecked'}>
                                  <RadioGroupItem value="event" id="event" />
                                  <span className="font-medium cursor-pointer">Event Cleaning</span>
                                </Label>
                              </>
                            )}
                          </RadioGroup>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                          <Label className="text-lg font-medium text-gray-900 mb-4 block">Cleaning Frequency</Label>
                          <RadioGroup
                            value={formData.frequency}
                            onValueChange={(value) => handleSelectChange('frequency', value)}
                            className="custom-frequency-grid grid grid-cols-1 md:grid-cols-4 gap-4"
                          >
                            <Label htmlFor="once" className="custom-frequency-item" data-state={formData.frequency === 'once' ? 'checked' : 'unchecked'}>
                              <RadioGroupItem value="once" id="once" className="mb-2" />
                              <span className="font-medium cursor-pointer block">One-Time</span>
                            </Label>
                            <Label htmlFor="weekly" className="custom-frequency-item" data-state={formData.frequency === 'weekly' ? 'checked' : 'unchecked'}>
                              <RadioGroupItem value="weekly" id="weekly" className="mb-2" />
                              <span className="font-medium cursor-pointer block">Weekly</span>
                            </Label>
                            <Label htmlFor="biweekly" className="custom-frequency-item" data-state={formData.frequency === 'biweekly' ? 'checked' : 'unchecked'}>
                              <RadioGroupItem value="biweekly" id="biweekly" className="mb-2" />
                              <span className="font-medium cursor-pointer block">Bi-Weekly</span>
                            </Label>
                            <Label htmlFor="monthly" className="custom-frequency-item" data-state={formData.frequency === 'monthly' ? 'checked' : 'unchecked'}>
                              <RadioGroupItem value="monthly" id="monthly" className="mb-2" />
                              <span className="font-medium cursor-pointer block">Monthly</span>
                            </Label>
                          </RadioGroup>
                        </div>

                        {/* Enhanced Additional Services */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h4 className="text-lg font-medium text-gray-900 mb-4">Additional Services</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {additionalServices.map((service, idx) => (
                              <Label 
                                key={idx} 
                                htmlFor={`service-${idx}`}
                                className="custom-checkbox-item flex items-center space-x-3" 
                                data-state={formData.additionalServices.includes(service) ? 'checked' : 'unchecked'}
                              >
                                <Checkbox
                                  id={`service-${idx}`}
                                  checked={formData.additionalServices.includes(service)}
                                  onCheckedChange={(checked) => handleCheckboxChange(service, checked as boolean)}
                                  className="custom-checkbox"
                                />
                                <span className="text-sm font-medium cursor-pointer flex-1">{service}</span>
                              </Label>
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