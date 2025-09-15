// components/TestimonialCard.tsx
"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
}) => (
  <Card className="border-2 border-border bg-background rounded-base shadow-shadow mb-8 text-foreground">
    <CardHeader className="flex items-center gap-4">
      <Avatar className="w-12 h-12 border-2 border-border rounded-lg">
        <AvatarFallback className="bg-main text-black font-bold rounded-lg">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </AvatarFallback>
      </Avatar>
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
