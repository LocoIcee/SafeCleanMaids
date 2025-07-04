'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions or ready to schedule a cleaning? Get in touch with our friendly team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help with any questions you might have about our services or to schedule a cleaning appointment.
                </p>
                
                <div className="space-y-6">
                  <Card className="border-blue-100">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-full bg-blue-50 p-3">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Phone</h3>
                        <p className="text-gray-600">(555) 123-4567</p>
                        <p className="text-sm text-gray-500 mt-1">Monday to Friday, 8am to 6pm</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-100">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-full bg-blue-50 p-3">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-gray-600">info@safecleanmaids.com</p>
                        <p className="text-sm text-gray-500 mt-1">We&apos;ll respond as soon as possible</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-100">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-full bg-blue-50 p-3">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Office Address</h3>
                        <p className="text-gray-600">
                          123 Cleaning Ave<br />
                          Sparkle City, SC 12345
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-100">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-full bg-blue-50 p-3">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Business Hours</h3>
                        <div className="text-gray-600">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Card className="border-blue-100">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Your name" 
                            required
                            value={formData.name}
                            onChange={handleChange} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="your.email@example.com" 
                            required
                            value={formData.email}
                            onChange={handleChange} 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            placeholder="(123) 456-7890" 
                            value={formData.phone}
                            onChange={handleChange} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input 
                            id="address" 
                            name="address" 
                            placeholder="Your address" 
                            value={formData.address}
                            onChange={handleChange} 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Service Type</Label>
                        <RadioGroup 
                          defaultValue="residential" 
                          value={formData.serviceType}
                          onValueChange={handleRadioChange}
                        >
                          <div className="flex flex-wrap gap-6">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="residential" id="residential" />
                              <Label htmlFor="residential">Residential</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="commercial" id="commercial" />
                              <Label htmlFor="commercial">Commercial</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="deep-cleaning" id="deep-cleaning" />
                              <Label htmlFor="deep-cleaning">Deep Cleaning</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="move-in-out" id="move-in-out" />
                              <Label htmlFor="move-in-out">Move In/Out</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Tell us about your cleaning needs..." 
                          rows={5} 
                          required
                          value={formData.message}
                          onChange={handleChange} 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
            <div className="aspect-video rounded-lg overflow-hidden bg-blue-100 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-blue-600" />
              <p className="ml-4 text-lg text-blue-600">Map placeholder - in a real implementation, this would be an interactive map</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
            <p className="text-lg text-gray-600 mb-8">
              Safe Clean Maids proudly provides cleaning services throughout the following areas:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
                <div key={idx} className="p-3 border border-blue-100 rounded-md hover:bg-blue-50 transition-colors">
                  {area}
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
            <h2 className="text-3xl font-bold mb-6">Ready for a Spotless Space?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don&apos;t wait another day. Contact us now and experience the Safe Clean Maids difference!
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="tel:5551234567">Call (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;