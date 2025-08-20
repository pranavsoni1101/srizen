// components/TestimonialCard.tsx
"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  testimonial,
}) => (
  <Card className="border-2 border-border bg-background rounded-base shadow-shadow mb-8 text-foreground">
    <CardHeader className="flex items-center gap-4">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-12 h-12 rounded-base border-2 border-border"
      />
      <div>
        <h4 className="text-lg font-heading">{name}</h4>
        <p className="text-sm text-foreground/70">{role}</p>
      </div>
    </CardHeader>
    <CardContent className="mt-4 text-sm">
      <p>"{testimonial}"</p>
    </CardContent>
    <CardFooter>{/* Optional: Add a source or date */}</CardFooter>
  </Card>
);

export default TestimonialCard;
