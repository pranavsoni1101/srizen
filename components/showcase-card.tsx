"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

interface ShowcaseCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const ShowcaseCard = ({
  title,
  description,
  image,
  link,
}: ShowcaseCardProps) => {
  return (
    <>
      <Card className="hover:scale-[1.03] transition-transform duration-300">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-40 bg-muted-foreground/20 flex items-center justify-center rounded-lg">
            {image ? (
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <span>No Image</span>
            )}
          </div>
        </CardContent>
        {link && (
          <CardFooter className="justify-end">
            <Link href={link}>
                <Button className="float-right bg-secondary text-foreground">
                    View Case Study →
                </Button>
            </Link>
            {/* <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className=" font-medium hover:underline"
            >
              View Case Study →
            </a> */}
          </CardFooter>
        )}
      </Card>
    </>
  );
};

export default ShowcaseCard;
