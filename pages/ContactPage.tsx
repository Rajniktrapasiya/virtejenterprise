import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, Building } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to a server.
        // Here, we just simulate a success message.
        setFormStatus('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
    };

    return (
        <div className="bg-slate-50 py-12 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Get In Touch</h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We're here to help with your machining needs. Reach out to us for a quote or any inquiries.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <AnimatedSection className="bg-white p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" />
                            </div>
                            <div className="relative">
                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input type="text" name="company" placeholder="Company Name (Optional)" value={formData.company} onChange={handleInputChange} className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition" />
                            </div>
                            <div>
                                <textarea name="message" placeholder="Your Inquiry..." value={formData.message} onChange={handleInputChange} required rows={5} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-amber-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Submit Inquiry
                                </button>
                            </div>
                            {formStatus && <p className="text-center text-green-600 mt-4">{formStatus}</p>}
                        </form>
                    </AnimatedSection>

                    {/* Contact Details & Map */}
                    <div className="space-y-8">
                        <AnimatedSection className="bg-white p-8 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                            <div className="space-y-4 text-slate-700">
                                <div className="flex items-start">
                                    <User className="flex-shrink-0 mr-4 mt-1 text-amber-600" size={20} />
                                    <div>
                                        <h3 className="font-semibold">Contact Person</h3>
                                        <p>Tejas Pithava | MD & CEO</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="flex-shrink-0 mr-4 mt-1 text-amber-600" size={20} />
                                    <div>
                                        <h3 className="font-semibold">Address</h3>
                                        <p>Shivam Industrial Area, Plot no. 1+2+3, Survey no. 296/2/1, At-Ribda, Ta-Gondal, Dist.-Rajkot, Gujarat, 360311</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="flex-shrink-0 mr-4 mt-1 text-amber-600" size={20} />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <a href="tel:+919726461965" className="hover:text-amber-600 transition-colors">+91 97264 61965</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="flex-shrink-0 mr-4 mt-1 text-amber-600" size={20} />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <a href="mailto:vtejenterprise@gmail.com" className="hover:text-amber-600 transition-colors">vtejenterprise@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="bg-white rounded-lg shadow-xl overflow-hidden">
                             <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.1213329177196!2d70.8384210750796!3d21.92982467995697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581775b5a2656d%3A0x1d491560f6e52033!2sVTEJ%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1700000000000" 
                                width="100%" 
                                height="400" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="VTEJ Enterprise Location"
                             ></iframe>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
