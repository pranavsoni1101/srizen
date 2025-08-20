import { Marquee, ReverseMarquee } from "@/components/ui/marquee";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
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
