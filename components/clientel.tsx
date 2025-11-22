import { Marquee, ReverseMarquee } from "@/components/ui/marquee";
import { Briefcase } from "lucide-react";
// const items = [
//   "Ascent Industrial Manufacturers",
//   <Briefcase  className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "ResplenDent Orthodontics",
//   <Briefcase  className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 3",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 4",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 5",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Ascent Industrial Manufacturers",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 2",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 3",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 4",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 5",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Ascent Industrial Manufacturers",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 2",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 3",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 4",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 5",
// ];
const items = [
  "Ascent Industrial Manufacturers",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Zygoma AI",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "ResplenDent Orthodontics",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "More Associations Coming Soon",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Next Up",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Coming In Hot",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,

  
  "Ascent Industrial Manufacturers",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Zygoma AI",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "ResplenDent Orthodontics",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "More Associations Coming Soon",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Next Up",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Coming In Hot",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
];

const Clientele = () => {
  return (
    <>
      <ReverseMarquee items={items} />
      <Marquee items={items} />
    </>
  );
};

export default Clientele;
