"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t-4 border-border">
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8 bg-background">
        {/* Brand */}
        <div>
          <Image
            src="/logo.svg" // path from public folder
            alt="Srizen Logo"
            width={120} // desired width
            height={40} // desired height
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Crafting bold digital experiences with a dash of creativity.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <ul className="space-y-2">
            {["Home", "Services", "Process", "Showcase", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    className="hover:underline hover:underline-offset-4 decoration-main transition"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact / Socials */}
        <div className="space-y-2">
          <a
            href="mailto:hello@srizen.com"
            className="block hover:underline hover:underline-offset-4 decoration-main transition"
          >
            hello@srizen.com
          </a>
          <div className="flex gap-4 mt-2">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-main transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-main transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-main transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-black/80 py-4 border-t-4 border-border bg-main">
        © {new Date().getFullYear()} Srizen. All rights reserved.
      </div>
    </footer>
  );
}
