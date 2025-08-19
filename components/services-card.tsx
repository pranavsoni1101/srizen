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
    <Card>
      <CardHeader>
        <CardTitle> {icon} {title}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
};

export default ServicesCard;
