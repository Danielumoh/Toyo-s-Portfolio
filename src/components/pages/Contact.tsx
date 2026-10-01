import Card from "../Card";

const contacts = [
  {
    title: "Email",
    description: "For project enquiries and collaborations.",
    label: "jesutoyosikayode@gmail.com",
    href: "mailto:jesutoyosikayode@gmail.com",
    external: false,
  },
  {
    title: "WhatsApp",
    description: "Send me a message and let's talk about your ideas.",
    label: "+234 808 973 8697",
    href: "https://wa.me/2348089738697",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally and explore my experience.",
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/jesutoyosi-kayode-ab3633315",
    external: true,
  },
];

// Replace each placeholder URL with your actual profile URL.
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/YOUR_USERNAME/" },
  { label: "TikTok", href: "https://www.tiktok.com/@YOUR_USERNAME" },
  { label: "Facebook", href: "https://www.facebook.com/YOUR_USERNAME" },
  { label: "X", href: "https://x.com/YOUR_USERNAME" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[#111111]">
          Get in touch
        </h2>
        <p className="mt-4 text-[#6B6B6B] font-light max-w-md">
          Have a project in mind? Choose the best way to reach me.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => (
            <Card key={contact.title} className="flex flex-col bg-[#F7F7F7]">
              <h3 className="text-lg font-medium text-[#111111]">
                {contact.title}
              </h3>
              <p className="mt-2 mb-6 text-sm text-[#6B6B6B] font-light leading-relaxed">
                {contact.description}
              </p>
              <a
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="mt-auto self-start max-w-full break-words rounded-sm text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 hover:text-[#111111] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                {contact.label}
                {contact.external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </Card>
          ))}

          <Card className="bg-[#F7F7F7]">
            <h3 className="text-lg font-medium text-[#111111]">Social profiles</h3>
            <p className="mt-2 text-sm text-[#6B6B6B] font-light leading-relaxed">
              Find my content and connect with me across these platforms.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social platforms">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-[#E3E3E3] bg-white px-3 py-1.5 text-sm text-[#6B6B6B] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                  >
                    {social.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
