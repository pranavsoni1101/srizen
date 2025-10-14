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
    title: "AiM – Ascent Industrial Manufacturers",
    href: "/showcase/ascent-industrial-manufacturers",
    description:
      "Revamped Next.js site with better SEO to be deploed on vercel, performance & UI consistency.",
  },
];

export const caseStudyItems = [
  {
    title: "Why Website Speed Impacts Business Performance",
    href: "/srizen-effect/website-load-times",
    description:
      "How reducing load time from 7s to 2s improved engagement and boosted conversions.",
  },
  {
    title: "5 Common UI/UX Mistakes That Kill Conversions",
    href: "/srizen-effect/ui-ux-mistakes",
    description:
      "Exploring how cluttered layouts, weak CTAs, and poor navigation silently cost businesses growth.",
  },
  {
    title: "How SMEs Miss Out Without Proper SEO",
    href: "/srizen-effect/seo-missed-opportunities",
    description:
      "Breaking down how poor SEO structures keep businesses invisible and how Srizen fixes it.",
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
            src="/logo.svg" // path from public folder
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

          <NavigationMenuItem>
            <Link href="/srizen-effect" passHref>
              <NavigationMenuTrigger>Srizen Effect</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {caseStudyItems.map((item) => (
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
          <Link href="https://calendly.com/pranavsoni1101/30min" passHref>
            <GetInTouchButton
              text={"Schedule a Call"}
              icon={<Calendar />}
              className="mr-3"
            />
          </Link>
          <ThemeSwitcher />
        </div>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-secondary-background border-b-4 border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" passHref legacyBehavior>
            <Image
              src="/logo.svg" // path from public folder
              alt="Srizen Logo"
              width={120} // desired width
              height={40} // desired height
            />
          </Link>
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
            <Link 
              href="/" 
              className="block py-2 text-foreground font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-foreground font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/showcase"
              className="block py-2 text-foreground font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Showcase
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground font-heading"
              onClick={() => setIsMobileMenuOpen(false)}
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
