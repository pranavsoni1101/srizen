import { Marquee, ReverseMarquee } from "@/components/ui/marquee";
import { Briefcase } from "lucide-react";

const items = [
  "Ascent Industrial Manufacturers",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Zygoma AI",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "ResplenDent Orthodontics",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "tsar Perfumes",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Ascent Industrial Manufacturers",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Zygoma AI",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "ResplenDent Orthodontics",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "tsar Perfumes",

  
  "Ascent Industrial Manufacturers",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Zygoma AI",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "ResplenDent Orthodontics",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "tsar Perfumes",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Ascent Industrial Manufacturers",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "Zygoma AI",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "ResplenDent Orthodontics",
  <Briefcase className="inline-block h-8 w-8" strokeWidth={2} />,
  "tsar Perfumes",
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
