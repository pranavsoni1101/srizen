"use client";

import { useState, useEffect } from "react";
import { useForm as useFormSpree } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const PROJECT_PILLS = [
  "Website",
  "Web App",
  "Mobile App",
  "UX/UI Design",
  "Other",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedPill, setSelectedPill] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [aestTime, setAestTime] = useState("");

  const [fspState, submitToFormspree] = useFormSpree("xgvlzkrn");

  // Live AEST clock
  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-AU", {
        timeZone: "Australia/Sydney",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setAestTime(`${t} AEST`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Mirror Formspree state into local status
  useEffect(() => {
    if (fspState.succeeded) {
      setStatus("success");
    } else if (!fspState.submitting && status === "submitting") {
      // Submission finished without succeeding = error
      setStatus("error");
    }
  }, [fspState.succeeded, fspState.submitting, status]);

  const handlePillClick = (pill: string) => {
    const prefix = `[${pill}] `;
    if (selectedPill === pill) {
      setSelectedPill(null);
      setMessage((prev) =>
        prev.startsWith(prefix) ? prev.slice(prefix.length) : prev
      );
    } else {
      let base = message;
      if (selectedPill) {
        const oldPrefix = `[${selectedPill}] `;
        if (base.startsWith(oldPrefix)) base = base.slice(oldPrefix.length);
      }
      setSelectedPill(pill);
      setMessage(prefix + base);
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await submitToFormspree({
      name,
      email,
      projectType,
      budgetRange,
      timeline,
      message,
    });
  };

  const resetForm = () => {
    setStatus("idle");
    setName("");
    setEmail("");
    setProjectType("");
    setBudgetRange("");
    setTimeline("");
    setMessage("");
    setSelectedPill(null);
  };

  const isDisabled = status === "submitting";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      {/* LEFT COLUMN */}
      <div className="space-y-8">
        {/* Headline */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Let&apos;s Build Something.
          </h2>
          <p className="text-foreground/70 text-lg">
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        {/* Quick-select pills */}
        <div>
          <p className="text-xs font-heading uppercase tracking-widest text-foreground/50 mb-3">
            Quick select
          </p>
          <div className="flex flex-wrap gap-2">
            {PROJECT_PILLS.map((pill) => (
              <Button
                key={pill}
                type="button"
                variant={selectedPill === pill ? "default" : "neutral"}
                size="sm"
                onClick={() => handlePillClick(pill)}
                className={
                  selectedPill === pill
                    ? "translate-x-boxShadowX translate-y-boxShadowY shadow-none"
                    : ""
                }
              >
                {pill}
              </Button>
            ))}
          </div>
        </div>

        {/* Contact details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 shrink-0 text-foreground/60" />
            <a
              href="mailto:hello@srizen.com"
              className="hover:underline font-base"
            >
              hello@srizen.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 shrink-0 text-foreground/60" />
            <a href="tel:+61432670014" className="hover:underline font-base">
              +61 432 670 014
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 shrink-0 text-foreground/60" />
            <span className="font-base">
              Canberra, Australia — Available remotely worldwide
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="w-4 h-4 shrink-0 text-foreground/60" />
            <span className="font-base text-foreground/70 tabular-nums">
              {aestTime || "—"}
            </span>
          </div>
        </div>

        {/* Availability badge */}
        <Badge variant="neutral" className="dark shadow-shadow gap-2 w-fit">
          <span className="relative flex h-2 w-2 ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Currently accepting new projects
        </Badge>

        {/* Divider + Calendly CTA */}
        <div className="border-t-2 border-border pt-6 space-y-3">
          <p className="text-sm text-foreground/60">
            Prefer to talk it through? Skip the form.
          </p>
          <Button variant="neutral" asChild className="dark text-white">
            <Link href="https://calendly.com/pranavsoni1101/30min">
              Book a Free 30-min Call →
            </Link>
          </Button>
        </div>
      </div>

      {/* RIGHT COLUMN — FORM */}
      <div className="bg-background border-2 border-border shadow-shadow rounded-base p-6 sm:p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
            <span className="text-5xl">✅</span>
            <p className="text-xl font-heading">
              Got it! We&apos;ll be in touch within 24 hours.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="text-sm underline text-foreground/50 hover:text-foreground transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="cs-name">Name</Label>
              <Input
                id="cs-name"
                type="text"
                placeholder="Your full name"
                required
                disabled={isDisabled}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="cs-email">Email</Label>
              <Input
                id="cs-email"
                type="email"
                placeholder="you@example.com"
                required
                disabled={isDisabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Project Type</Label>
              <Select
                value={projectType}
                onValueChange={setProjectType}
              >
                <SelectTrigger disabled={isDisabled} className="bg-white">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Website">Website</SelectItem>
                  <SelectItem value="Web App">Web App</SelectItem>
                  <SelectItem value="Mobile App">Mobile App</SelectItem>
                  <SelectItem value="UX/UI Design">UX/UI Design</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Budget Range</Label>
              <Select
                value={budgetRange}
                onValueChange={setBudgetRange}
              >
                <SelectTrigger disabled={isDisabled} className="bg-white">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under $1,000">Under $1,000</SelectItem>
                  <SelectItem value="$1,000–$3,000">$1,000–$3,000</SelectItem>
                  <SelectItem value="$3,000–$10,000">
                    $3,000–$10,000
                  </SelectItem>
                  <SelectItem value="$10,000+">$10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Timeline</Label>
              <Select value={timeline} onValueChange={setTimeline}>
                <SelectTrigger disabled={isDisabled} className="bg-white">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ASAP">ASAP</SelectItem>
                  <SelectItem value="1–3 months">1–3 months</SelectItem>
                  <SelectItem value="3–6 months">3–6 months</SelectItem>
                  <SelectItem value="Just exploring">Just exploring</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="cs-message">Message</Label>
              <Textarea
                id="cs-message"
                placeholder="Tell us about your project..."
                required
                rows={4}
                disabled={isDisabled}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none bg-white"
              />
            </div>

            {status === "error" && (
              <Alert variant="destructive">
                <AlertDescription>
                  Something went wrong. Email us directly at{" "}
                  <a
                    href="mailto:hello@srizen.com"
                    className="underline font-heading"
                  >
                    hello@srizen.com
                  </a>
                </AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isDisabled}>
              {isDisabled ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
