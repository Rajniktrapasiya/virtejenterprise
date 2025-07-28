import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Eye, Target, HeartHandshake, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const visions = [
    "To be a reliable manufacturer of machined components.",
    "To become the leading manufacturer of critical machined components.",
    "To be a world-class manufacturer of engineering products with specific focus on value creation for the society."
  ];

  const missions = [
    "Fostering a spirit of continuous learning and innovation.",
    "To offer world-class products through continuous innovation.",
    "To provide a quick and effective service base to enhance customer satisfaction."
  ];

  const values = [
    "Integrity", "Customer Focus", "Innovation", "Teamwork", "Excellence"
  ];
  
  const journeyMilestones = [
    { year: '2015', event: 'VTEJ Enterprise Founded', description: 'Began our journey with a small workshop and a big vision.' },
    { year: '2017', event: 'First CNC Machine Acquired', description: 'Expanded our capabilities by investing in advanced CNC technology.' },
    { year: '2019', event: 'Expanded Facility', description: 'Moved to our current, larger facility in Shivam Industrial Area.' },
    { year: '2022', event: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification, underscoring our commitment to quality.' },
    { year: 'Present', event: 'Serving Global Clients', description: 'Proudly serving a diverse range of clients with precision engineering solutions.' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold">Our Story & Our Values</h1>
            <p className="text-lg text-slate-300 mt-2">Driven by passion, precision, and partnership.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Journey</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 mb-6"></div>
          </AnimatedSection>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-amber-700 h-full border" style={{left: '50%'}}></div>
            {journeyMilestones.map((item, index) => (
               <AnimatedSection key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-sm text-white">{index + 1}</h1>
                </div>
                <div className={`order-1 ${index % 2 === 0 ? 'bg-amber-50' : 'bg-gray-50'} rounded-lg shadow-xl w-5/12 px-6 py-4`}>
                  <p className="text-sm font-semibold text-amber-700">{item.year}</p>
                  <h3 className="mb-2 font-bold text-slate-800 text-lg">{item.event}</h3>
                  <p className="text-sm leading-snug tracking-wide text-slate-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="flex items-center text-amber-600 mb-4">
                  <Eye size={32} className="mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  {visions.map((v, i) => <li key={i} className="flex items-start"><CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" /><span>{v}</span></li>)}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="flex items-center text-amber-600 mb-4">
                  <Target size={32} className="mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  {missions.map((m, i) => <li key={i} className="flex items-start"><CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" /><span>{m}</span></li>)}
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="flex items-center text-amber-600 mb-4">
                  <HeartHandshake size={32} className="mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Our Values</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {values.map((val, i) => <span key={i} className="bg-amber-100 text-amber-800 font-medium px-4 py-1 rounded-full">{val}</span>)}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
