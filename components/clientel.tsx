import { Marquee, ReverseMarquee } from "@/components/ui/marquee";
import { Briefcase } from "lucide-react";

const icon = (i: number) => (
  <Briefcase key={`icon-${i}`} className="inline-block h-8 w-8" strokeWidth={2} />
);

const items = [
  "Ascent Industrial Manufacturers", icon(0),
  "Zygoma AI", icon(1),
  "ResplenDent Orthodontics", icon(2),
  "tsar Perfumes", icon(3),
  "Ascent Industrial Manufacturers", icon(4),
  "Zygoma AI", icon(5),
  "ResplenDent Orthodontics", icon(6),
  "tsar Perfumes", icon(7),
  "Ascent Industrial Manufacturers", icon(8),
  "Zygoma AI", icon(9),
  "ResplenDent Orthodontics", icon(10),
  "tsar Perfumes", icon(11),
  "Ascent Industrial Manufacturers", icon(12),
  "Zygoma AI", icon(13),
  "ResplenDent Orthodontics", icon(14),
  "tsar Perfumes", icon(15),
];

const Clientele = ({ noBorderBottom }: { noBorderBottom?: boolean }) => {
  return (
    <>
      <ReverseMarquee items={items} />
      <Marquee items={items} className={noBorderBottom ? "border-b-0" : undefined} />
    </>
  );
};

export default Clientele;
