import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Ruler, Gauge } from 'lucide-react';

const ServiceDetail = ({ title, description, imageUrl, imageAlt, children }: { title: string, description: string, imageUrl: string, imageAlt: string, children?: React.ReactNode }) => (
  <AnimatedSection className="mb-16">
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12 order-2 md:order-1 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">{title}</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
          <div className="space-y-4 text-slate-700">{children}</div>
        </div>
        <div className="order-1 md:order-2">
          <img src={imageUrl} alt={imageAlt} className="w-full h-64 md:h-full object-cover" />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Our Machining Capabilities</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We provide a comprehensive range of machining services, from high-volume CNC production to specialized manual operations, ensuring precision and quality at every step.
          </p>
        </AnimatedSection>
        
        <ServiceDetail
          title="CNC Precision Machining"
          description="We are amongst the reputed organizations, highly engaged in offering an optimum quality range of CNC Precision Components Machining. We offer this component machining service according to the client's needs. In addition to this, our professionals have the experience to render this component machining in the best possible way."
          imageUrl="/images/cnc-machining.jpg"
          imageAlt="Collection of CNC precision components"
        >
           <p className="font-semibold text-amber-700">Client-focused solutions for complex engineering challenges.</p>
        </ServiceDetail>

        <ServiceDetail
          title="CNC Turning Machines"
          description="We operate advanced CNC turning centers capable of producing intricate cylindrical parts with exceptional accuracy and surface finish. Our machines are ideal for both small-batch and large-scale production runs."
          imageUrl="/images/cnc-turning.jpg"
          imageAlt="CNC turning machine in operation"
        >
          <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded">
            <h4 className="font-bold text-slate-800">Turning Capacity:</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Diameter:</strong> 0mm - 400mm</li>
              <li><strong>Length:</strong> Up to 500mm</li>
            </ul>
          </div>
        </ServiceDetail>

        <ServiceDetail
          title="CNC Vertical Milling"
          description="Our CNC vertical milling machines offer robust performance and versatility. With a generous travel capacity, we can machine large and complex components with multi-axis capabilities, ensuring precision for everything from simple profiles to complex 3D contours."
          imageUrl="/images/cnc-milling.jpg"
          imageAlt="CNC vertical milling machine"
        >
           <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded">
            <h4 className="font-bold text-slate-800">Milling Travel Capacity (X-Y-Z Axis):</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
               <li>1000mm x 600mm x 900mm</li>
            </ul>
          </div>
        </ServiceDetail>

        <ServiceDetail
          title="Manual Operations"
          description="Complementing our CNC capabilities, our manual operation facilities provide essential support for secondary processes and custom work. Our skilled technicians perform drilling, tapping, deburring, and assembly with meticulous attention to detail, ensuring a perfect finish for every part."
          imageUrl="/images/manual-operations.jpg"
          imageAlt="Manual drilling operation"
        >
          <p className="font-semibold text-amber-700">Flexible solutions for finishing touches and custom requirements.</p>
        </ServiceDetail>

        <ServiceDetail
          title="Measuring Facility & Quality"
          description="We serve quality products as per customer requirements. We achieve high quality standards through in-house measuring systems with a well-equipped Measuring Instrument."
          imageUrl="/images/measuring-facility.jpg"
          imageAlt="Precision measuring instruments"
        >
           <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded space-y-3">
             <div>
                <h4 className="font-bold text-slate-800 flex items-center"><Gauge size={18} className="mr-2"/>Measurement Capability</h4>
                <p className="ml-7">Precision up to 0.001 mm.</p>
             </div>
             <div>
                <h4 className="font-bold text-slate-800 flex items-center"><Ruler size={18} className="mr-2"/>Equipped With</h4>
                <p className="ml-7">Vernier Caliper, Micrometer, Boregauge, Height gauge, Depth Gauge, etc. (Range: 0-600 mm).</p>
             </div>
          </div>
        </ServiceDetail>
        
      </div>
    </div>
  );
};

export default ServicesPage;