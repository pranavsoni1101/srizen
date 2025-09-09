import { Marquee, ReverseMarquee } from "@/components/ui/marquee";
import { Briefcase } from "lucide-react";
// const items = [
//   "AiM",
//   <Briefcase  className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "More Associations soon",
//   <Briefcase  className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 3",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 4",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 5",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "AiM",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 2",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 3",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 4",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "Item 5",
//   <Briefcase className="inline-block h-8 w-8" strokeWidth={2}/>,
//   "AiM",
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
  "AiM",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Zygoma AI",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "More Associations Soon",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Big Moves",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Next Up",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Coming In Hot",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,

  
  "AiM",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Zygoma AI",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "More Associations Soon",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Big Moves",
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
