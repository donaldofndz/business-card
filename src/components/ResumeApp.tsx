"use client";

import { useEffect, useMemo, useState } from "react";

import type { ResumeContent } from "@/content";
import type { Locale } from "@/i18n/config";

import { BlogItem } from "./BlogItem";
import { ContactCard } from "./ContactCard";
import { LanguageSelector, type LanguageOption } from "./LanguageSelector";
import { LayoutShell } from "./LayoutShell";
import { Menu } from "./Menu";
import { ResumeHeader } from "./ResumeHeader";
import { Section } from "./Section";
import { SkillGroup } from "./SkillGroup";
import { TimelineItem } from "./TimelineItem";

interface ResumeAppProps {
  content: ResumeContent;
  languageOptions: LanguageOption[];
  locale: Locale;
}

export function ResumeApp({ content, languageOptions, locale }: ResumeAppProps) {
  const [activeView, setActiveView] = useState("profile");
  const footerYear = new Date().getFullYear() || 2026;
  const footerText = content.footer.copyrightTemplate.replace(
    "{{year}}",
    String(footerYear)
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const menuItems = [
    { id: "profile", label: content.nav.profile },
    // { id: "projects", label: content.nav.projects },
    // { id: "blog", label: content.nav.blog },
    { id: "contact", label: content.nav.contact },
  ];

  const viewContent = useMemo(() => {
    if (activeView === "projects") {
      return (
        <Section title={content.sections.projects} contentClassName="gap-12">
          {content.projects.map((project) => (
            <TimelineItem key={project.title} {...project} />
          ))}
        </Section>
      );
    }

    if (activeView === "blog") {
      return (
        <Section title={content.sections.writing} contentClassName="gap-8">
          {content.posts.map((post) => (
            <BlogItem key={post.title} title={post.title} date={post.date} />
          ))}
        </Section>
      );
    }

    if (activeView === "contact") {
      return (
        <Section title={content.sections.contact}>
          <ContactCard message={content.contact.message} email={content.contact.email} />
        </Section>
      );
    }

    return (
      <>
        <Section title={content.sections.about}>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
            {content.about}
          </p>
        </Section>
        <Section title={content.sections.experience} contentClassName="gap-12">
          {content.experience.map((item) => (
            <TimelineItem
              key={`${item.period}-${item.title}-${item.subtitle}`}
              {...item}
            />
          ))}
        </Section>
        <Section title={content.sections.education} contentClassName="gap-8">
          {content.education.map((item) => (
            <TimelineItem
              key={`${item.period}-${item.title}-${item.subtitle}`}
              {...item}
            />
          ))}
        </Section>
        <Section title={content.sections.skills}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <SkillGroup title={content.skills.designTitle} items={content.skills.designItems} />
            <SkillGroup title={content.skills.toolsTitle} items={content.skills.toolsItems} />
          </div>
        </Section>
      </>
    );
  }, [activeView, content]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-white">
      <LayoutShell footerText={footerText}>
        <div className="flex justify-end">
          <LanguageSelector
            label={content.languageSelector.label}
            options={languageOptions}
            currentLocale={locale}
          />
        </div>
        <ResumeHeader name={content.header.name} role={content.header.role} />
        <Menu
          items={menuItems}
          activeId={activeView}
          onSelect={setActiveView}
          ariaLabel={content.nav.ariaLabel}
        />
        <div className="flex flex-col gap-16">{viewContent}</div>
      </LayoutShell>
    </div>
  );
}
