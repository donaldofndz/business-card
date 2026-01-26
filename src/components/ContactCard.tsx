interface ContactCardProps {
  message: string;
  email: string;
  linkedInLabel: string;
  linkedInUrl: string;
}

export function ContactCard({
  message,
  email,
  linkedInLabel,
  linkedInUrl,
}: ContactCardProps) {
  return (
    <div className="max-w-xl">
      <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-8">
        {message}
      </p>
      <div className="flex flex-col gap-3">
        <a
          className="text-lg font-medium text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors underline underline-offset-4"
          href={`mailto:${email}`}
        >
          {email}
        </a>
        <a
          className="text-lg font-medium text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors underline underline-offset-4"
          href={linkedInUrl}
          rel="noreferrer"
          target="_blank"
        >
          {linkedInLabel}
        </a>
      </div>
    </div>
  );
}
