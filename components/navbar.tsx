"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import { Calendar, Hamburger } from "lucide-react";
import GetInTouchButton from "./contact-button";
import Image from "next/image";
const showcaseItems = [
  {
    title: "Pranav Soni Portfolio",
    href: "/showcase/pranavsoni-portfolio",
    description:
      "A modern portfolio built with Next.js, deployed on Vercel, showcasing an eye for UI detailing.",
  },
  {
    title: "Mobile Apps",
    href: "/showcase/mobile",
    description:
      "Native and cross-platform mobile applications that users love.",
  },
  {
    title: "Brand Identity",
    href: "/showcase/branding",
    description: "Complete brand systems that tell compelling stories.",
  },
  {
    title: "UI/UX Design",
    href: "/showcase/uiux",
    description: "User experiences that are both beautiful and functional.",
  },
  {
    title: "E-commerce",
    href: "/showcase/ecommerce",
    description: "Online stores that maximize sales and customer satisfaction.",
  },
  {
    title: "Digital Marketing",
    href: "/showcase/marketing",
    description:
      "Campaigns that reach audiences and deliver measurable results.",
  },
];

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "hover:bg-accent block text-foreground select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-hidden transition-colors hover:border-border",
            className
          )}
          {...props}
        >
          <h6 className="text-base leading-none">{title}</h6>
          <p className="font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-100">
      {/* Navigation Menu */}
      <NavigationMenu className="z-50 hidden md:flex items-center justify-between px-6 py-4 w-full max-w-none">
        <Link href="/" passHref legacyBehavior>
          <Image
            src="/srizen.svg" // path from public folder
            alt="Srizen Logo"
            width={120} // desired width
            height={40} // desired height
          />
        </Link>
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <Link href="/" passHref legacyBehavior>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* About Us with Dropdown */}
          <NavigationMenuItem>
            <Link href="/about" passHref legacyBehavior>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Showcase with Dropdown */}
          <NavigationMenuItem>
            <Link href="/showcase" passHref>
              <NavigationMenuTrigger>Showcase</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {showcaseItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Contact Us */}
          <NavigationMenuItem>
            <Link href="/contact" passHref legacyBehavior>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div>
          <GetInTouchButton
            text={"Schedule a Call"}
            icon={<Calendar />}
            className="mr-3"
          />
          <ThemeSwitcher />
        </div>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-secondary-background border-b-4 border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-heading font-bold text-foreground">
            Srizen
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <Hamburger />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="px-6 pb-4 space-y-2">
            <Link href="/" className="block py-2 text-foreground font-heading">
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-foreground font-heading"
            >
              About Us
            </Link>
            <Link
              href="/showcase"
              className="block py-2 text-foreground font-heading"
            >
              Showcase
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground font-heading"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
ListItem.displayName = "ListItem";
