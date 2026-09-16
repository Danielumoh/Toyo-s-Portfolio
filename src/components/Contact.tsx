const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[#111111]">
          Get in touch
        </h2>
        <p className="mt-4 text-[#6B6B6B] font-light max-w-md">
          Reach out directly, or find me on my socials.
        </p>

        <div className="mt-10 space-y-4">
          <a
            href="mailto:jesutoyosikayode@gmail.com"
            className="block text-[#111111] hover:text-[#6B6B6B] transition-colors"
          >
            jesutoyosikayode@gmail.com
          </a>
          <a
            href="https://wa.me/2348089738697"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#111111] hover:text-[#6B6B6B] transition-colors"
          >
            WhatsApp — +234 808 973 8697
          </a>
          <a
            href="https://www.linkedin.com/in/jesutoyosi-kayode-ab3633315"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#111111] hover:text-[#6B6B6B] transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E3E3E3] flex flex-wrap gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
