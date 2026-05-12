import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Monitor } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  description: string;
}

const ServicesCard = ({ title, icon, description }: ServiceCardProps) => {
  return (
    <Card className="hover:scale-[1.03] transition-transform duration-300">
      <CardHeader>
        <div className="mb-3 text-black">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-black/60">{description}</CardContent>
    </Card>
  );
};

export default ServicesCard;
