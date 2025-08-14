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

const aboutItems = [
  {
    title: "Our Story",
    href: "/about/story",
    description:
      "Learn about our journey, mission, and the values that drive us forward.",
  },
  {
    title: "Team",
    href: "/about/team",
    description: "Meet the talented individuals who make our vision a reality.",
  },
  {
    title: "Careers",
    href: "/about/careers",
    description: "Join our growing team and help shape the future with us.",
  },
  {
    title: "Culture",
    href: "/about/culture",
    description: "Discover our workplace culture and what makes us unique.",
  },
];

const showcaseItems = [
  {
    title: "Web Design",
    href: "/showcase/web",
    description:
      "Stunning websites that captivate users and drive conversions.",
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
          <div className="text-base leading-none">{title}</div>
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
    <>
      {/* Navigation Menu */}
      <NavigationMenu className="z-50 xs:hidden md:flex items-center justify-between px-6 py-4 w-full max-w-none">
        <div className="text-xl font-heading font-bold text-text">PixleSmith</div>
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <Link href="/" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* About Us with Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] gap-3 p-2 lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                     <Link href="/about" passHref>

                  <NavigationMenuLink asChild>
                    <div
                      className="flex h-full w-full select-none flex-col justify-end rounded-base p-6 no-underline outline-hidden border-2 border-border bg-secondary"
                    >
                      <div className="mb-2 mt-4 text-lg font-heading text-foreground">
                        About Us
                      </div>
                      <p className="text-sm font-base leading-tight text-foreground">
                        Discover who we are, what we believe in, and how we're
                        making a difference in the world.
                      </p>
                    </div>
                  </NavigationMenuLink>
                  </Link>
                </li>
                <ListItem href="/about/story" title="Our Story">
                  Learn about our journey and mission.
                </ListItem>
                <ListItem href="/about/team" title="Team">
                  Meet the people behind our success.
                </ListItem>
                <ListItem href="/about/careers" title="Careers">
                  Join our growing team of innovators.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Showcase with Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Showcase</NavigationMenuTrigger>
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
            <Link href="/contact" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <ThemeSwitcher />
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-secondary-background border-b-4 border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-heading font-bold text-foreground">
            PixleSmith
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              ☰
            </button>
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
    </>
  );
}
ListItem.displayName = "ListItem";
