"use client";

import CountUp from "react-countup";

const stats = [
  { end: 4, suffix: "+", label: "Active Clients" },
  { end: 6, suffix: "+", label: "Projects Shipped" },
  { end: 2, suffix: "", label: "Countries" },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
      {stats.map(({ end, suffix, label }) => (
        <div key={label}>
          <div className="text-sm text-foreground mt-1">{label}</div>
          <div className="text-3xl font-bold text-main">
            <CountUp end={end} duration={2} suffix={suffix} enableScrollSpy scrollSpyOnce />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
