"use client";

import { useMemo, useState } from "react";

import { BlogItem } from "./BlogItem";
import { ContactCard } from "./ContactCard";
import { LayoutShell } from "./LayoutShell";
import { Menu } from "./Menu";
import { ResumeHeader } from "./ResumeHeader";
import { Section } from "./Section";
import { SkillGroup } from "./SkillGroup";
import { TimelineItem } from "./TimelineItem";

const menuItems = [
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const experience = [
  {
    period: "2021 — Present",
    title: "Senior Product Designer",
    subtitle: "TechFlow",
    description:
      "Led the redesign of the core analytics dashboard, increasing user engagement by 40%. Established and maintained the company-wide design system, ensuring consistency across product lines. Mentored junior designers and conducted weekly design critiques.",
  },
  {
    period: "2018 — 2021",
    title: "Product Designer",
    subtitle: "Creative Solutions",
    description:
      "Collaborated with engineering teams to ship 5 major features for the mobile app. Conducted user research and usability testing to validate design decisions. Designed marketing assets and landing pages for product launches resulting in a 15% conversion lift.",
  },
  {
    period: "2015 — 2018",
    title: "Junior Designer",
    subtitle: "StartUp Inc.",
    description:
      "Assisted in the UI design of the initial MVP launch. Created wireframes, prototypes, and high-fidelity mockups. Worked closely with the founder to define the brand identity and visual language.",
  },
];

const education = [
  {
    period: "2011 — 2015",
    title: "BFA in Interaction Design",
    subtitle: "California College of the Arts",
  },
];

const projects = [
  {
    period: "2023",
    title: "E-Commerce Redesign",
    subtitle: "Case Study",
    description:
      "Complete overhaul of the checkout flow for a major fashion retailer, resulting in a 25% reduction in cart abandonment. Implemented a new design system for scalability.",
  },
  {
    period: "2022",
    title: "Finance App MVP",
    subtitle: "Mobile Application",
    description:
      "Designed the 0-to-1 experience for a personal finance tracker. Focused on data visualization and intuitive categorization of expenses.",
  },
];

const posts = [
  {
    title: "Building Accessible Design Systems",
    date: "April 12, 2024",
  },
  {
    title: "The Future of Product Design in AI",
    date: "February 28, 2024",
  },
  {
    title: "Why Minimalism Matters",
    date: "January 15, 2024",
  },
];

const skills = {
  design: ["Product Design", "User Testing", "Prototyping", "Design Systems", "Wireframing"],
  tools: ["Figma", "HTML/CSS", "Tailwind", "Git", "Notion"],
};

const contactCopy =
  "I'm currently available for freelance projects and consulting. If you're interested in working together, feel free to reach out.";

const presentation =
  "A product designer with 8 years of experience building accessible, user-centric interfaces for enterprise SaaS applications.Passionate about design systems and simplifying complex workflows.Dedicated to bridging the gap between design and engineering to deliver polished, high - quality products."

const name = "Alex Morgan"

const role = "Senior Product Designer"

const email = "alex@example.com"

export function ResumeApp() {
  const [activeView, setActiveView] = useState("profile");
  const footerYear = new Date().getFullYear() || 2026;

  const content = useMemo(() => {
    if (activeView === "projects") {
      return (
        <Section title="Selected Projects" contentClassName="gap-12">
          {projects.map((project) => (
            <TimelineItem key={project.title} {...project} />
          ))}
        </Section>
      );
    }

    if (activeView === "blog") {
      return (
        <Section title="Writing" contentClassName="gap-8">
          {posts.map((post) => (
            <BlogItem key={post.title} title={post.title} date={post.date} />
          ))}
        </Section>
      );
    }

    if (activeView === "contact") {
      return (
        <Section title="Get in Touch">
          <ContactCard message={contactCopy} email={email} />
        </Section>
      );
    }

    return (
      <>
        <Section title="About">
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
            {presentation}
          </p>
        </Section>
        <Section title="Experience" contentClassName="gap-12">
          {experience.map((role) => (
            <TimelineItem key={role.title} {...role} />
          ))}
        </Section>
        <Section title="Education" contentClassName="gap-8">
          {education.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </Section>
        <Section title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <SkillGroup title="Design & Research" items={skills.design} />
            <SkillGroup title="Technical & Tools" items={skills.tools} />
          </div>
        </Section>
      </>
    );
  }, [activeView]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-white">
      <LayoutShell footerText={`© ${footerYear} ${name}.`}>
        <ResumeHeader name={name} role={role} />
        <Menu items={menuItems} activeId={activeView} onSelect={setActiveView} />
        <div className="flex flex-col gap-16">{content}</div>
      </LayoutShell>
    </div>
  );
}
