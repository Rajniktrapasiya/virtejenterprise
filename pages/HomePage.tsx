import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Cog, Drill, Layers3, CreditCard, Award, Factory, ThumbsUp, Truck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  {
    icon: <Cog className="h-12 w-12 text-amber-600" />,
    title: 'CNC Turning',
    description: 'High-precision turning for components up to 400mm in diameter and 500mm in length.'
  },
  {
    icon: <Layers3 className="h-12 w-12 text-amber-600" />,
    title: 'CNC Vertical Milling',
    description: 'Advanced vertical milling with a large travel capacity for complex parts.'
  },
  {
    icon: <Drill className="h-12 w-12 text-amber-600" />,
    title: 'Manual Operations',
    description: 'Reliable manual operations including drilling, tapping, and finishing for custom needs.'
  }
];

const whyChooseUs = [
  {
    icon: <Award className="h-10 w-10 text-white" />,
    title: 'Excellent Quality Products',
    description: 'We ensure every machined part is manufactured in conformity with the industry standards.'
  },
  {
    icon: <Factory className="h-10 w-10 text-white" />,
    title: 'Advanced Production Unit',
    description: 'Leveraging modern equipment and technology to produce superior quality components.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-white" />,
    title: 'Strict Quality Control',
    description: 'Parts are properly examined against predefined standards to ensure flawlessness.'
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-white" />,
    title: 'Flawless Services',
    description: 'We offer the best services, assuring flawless results in a timely manner for complete client satisfaction.'
  },
  {
    icon: <Truck className="h-10 w-10 text-white" />,
    title: 'Swift Delivery',
    description: 'Our efficient processes and commitment to deadlines guarantee timely delivery of all orders.'
  },
  {
    icon: <CreditCard className="h-10 w-10 text-white" />,
    title: 'Easy Payment Modes',
    description: 'Offering flexible and convenient payment options for a smooth business experience.'
  }
];


const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618498119106-2c545224582d?q=80&w=1920&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">VTEJ Enterprise</h1>
            <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-light">All Kind of Machining Solution</p>
            <NavLink
              to="/contact"
              className="mt-8 inline-block bg-amber-500 text-white font-semibold py-3 px-10 rounded-lg text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Quote
            </NavLink>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Precision Machining & CNC Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            VTEJ Enterprise has gained accreditation in the field as a service provider of an excellent range of precision machining works, CNC Machining, etc. We are committed to delivering exceptional quality components tailored to our clients' specific needs.
          </p>
        </div>
      </AnimatedSection>

      {/* Our Services Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Core Services</h2>
            <p className="text-lg text-slate-600 mt-2">Delivering excellence in every component we manufacture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-slate-800">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Us? Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Why Us?</h2>
             <p className="text-lg text-slate-300 mt-4">
              Machined parts are manufactured in conformity with the industry standards and properly examined against predefined standards of quality to ensure flawlessness. Further, we offer the best services assuring flawless results in a timely manner.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg text-center flex flex-col items-center">
                  <div className="bg-amber-500 p-4 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-300 flex-grow">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
