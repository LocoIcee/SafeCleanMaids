'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'residential',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: 'residential',
      message: ''
    });
  };

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
              <span className="text-sm font-medium">Let's Connect</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Have questions or ready to schedule a cleaning? Get in touch with our friendly team.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info & Form */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We&apos;re here to help with any questions you might have about our services or to schedule a cleaning appointment.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <Card className="border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <CardContent className="flex items-start gap-6 p-8">
                      <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 p-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-xl text-gray-900">Phone</h3>
                        <p className="text-gray-600 text-lg">(555) 123-4567</p>
                        <p className="text-gray-500 mt-2">Monday to Friday, 8am to 6pm</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <CardContent className="flex items-start gap-6 p-8">
                      <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 p-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-xl text-gray-900">Email</h3>
                        <p className="text-gray-600 text-lg">info@safecleanmaids.com</p>
                        <p className="text-gray-500 mt-2">We&apos;ll respond as soon as possible</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Enhanced Contact Form */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
                <Card className="border-2 border-gray-200 shadow-2xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-base font-medium text-gray-900">Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Your name" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-base font-medium text-gray-900">Email</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="your.email@example.com" 
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-base font-medium text-gray-900">Phone</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            placeholder="(123) 456-7890" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-3">
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-base font-medium text-gray-900">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Inform us of your concerns or questions." 
                          rows={6} 
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <Send className="mr-3 h-5 w-5" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Our Location</h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full blur-lg"></div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <p className="text-2xl font-bold text-blue-900 mb-2">Interactive Map</p>
                <p className="text-blue-700 text-lg">In a real implementation, this would be an interactive map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Areas We Serve</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Safe Clean Maids proudly provides cleaning services throughout the following areas:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                "Sparkle City",
                "Brightville",
                "Cleanburg",
                "Fresno Heights",
                "North Tidy",
                "West Shining",
                "East Polish",
                "South Sparkle"
              ].map((area, idx) => (
                <Card key={idx} className="border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900">{area}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Spotless Space?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Don&apos;t wait another day. Contact us now and experience the Safe Clean Maids difference!
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <a href="tel:5551234567">Call (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;