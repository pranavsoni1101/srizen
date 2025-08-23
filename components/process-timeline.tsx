import React from 'react';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

// Container component
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      title: "Discover",
      desc: "We understand your goals and brainstorm ideas.",
      icon: Search,
    },
    {
      step: 2,
      title: "Design",
      desc: "We create bold, functional, and aesthetic solutions.",
      icon: Palette,
    },
    {
      step: 3,
      title: "Develop",
      desc: "We bring the design to life with clean code.",
      icon: Code2,
    },
    {
      step: 4,
      title: "Launch",
      desc: "We deliver and support post-launch growth.",
      icon: Rocket,
    },
  ];

  return (
    <div className="bag-grid py-16 border-border border-t-4">
      <Container>
        <h2 className="text-3xl font-bold mb-10 text-center">Our Process</h2>

        {/* Desktop Horizontal Layout */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between gap-8">
            {/* Connecting Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-foreground" />

            {processSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative z-10 flex-1 min-w-[220px] text-center"
                >
                  {/* Step Dot */}
                  <div className="w-12 h-12 mx-auto flex items-center justify-center border-4 border-border bg-main font-bold text-xl text-black rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm opacity-80">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="lg:hidden">
          <div className="relative max-w-lg mx-auto">
            {/* Vertical Connecting Line */}
            <div className="absolute left-6 top-0 bottom-10 w-1 bg-foreground" />

            {processSteps.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === processSteps.length - 1;
              
              return (
                <div key={idx} className={`relative flex items-start gap-6 ${!isLast ? 'pb-10' : ''}`}>
                  {/* Step Dot */}
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center border-4 border-border bg-main font-bold text-xl text-black rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                    <p className="mt-1 text-sm opacity-80">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProcessSection;