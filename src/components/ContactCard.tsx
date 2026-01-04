interface ContactCardProps {
  message: string;
  email: string;
}

export function ContactCard({ message, email }: ContactCardProps) {
  return (
    <div className="max-w-xl">
      <p className="text-base md:text-lg leading-relaxed text-zinc-600 mb-8">
        {message}
      </p>
      <a
        className="text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors underline underline-offset-4"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
  );
}
