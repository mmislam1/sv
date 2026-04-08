import Link from "next/link";

// ── Types ────────────────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our gym location", href: "/location" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy policy", href: "/privacy" },
];

const SERVICES: NavLink[] = [
  { label: "Indoor gym", href: "/services/indoor" },
  { label: "Outdoor gym", href: "/services/outdoor" },
  { label: "On ground gym", href: "/services/on-ground" },
  { label: "Yoga class", href: "/services/yoga" },
];

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Mail",
    value: "info@example.com",
    href: "mailto:info@example.com",
  },
  {
    label: "Call",
    value: "+91 9876543210",
    href: "tel:+919876543210",
  },
  {
    label: "Location",
    value: "New York, 235 Lane, 10001",
  },
  {
    label: "Time",
    value: "Workout Hours: 5AM – 8PM",
  },
];

const SOCIAL_LINKS = [
  { label: "Fb", href: "https://facebook.com" },
  { label: "In", href: "https://linkedin.com" },
  { label: "Tw", href: "https://twitter.com" },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-5">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-500 text-sm hover:text-gray-900 transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

// ── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: About ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <FooterHeading>About</FooterHeading>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              At MuscleForge, we believe in the power of dedication and hard
              work. Our mission is to provide you with the tools, resources, and
              community you need to build the body of your dreams
            </p>

            <hr className="border-gray-300 my-5 w-40" />

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-gray-700 text-sm font-semibold">
                Social Media:
              </span>
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-900 text-sm font-bold hover:text-gray-500 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Our Service ── */}
          <div>
            <FooterHeading>Our Service</FooterHeading>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact Info ── */}
          <div>
            <FooterHeading>Contact Info</FooterHeading>
            <ul className="flex flex-col gap-3">
              {CONTACT_ITEMS.map(({ label, value, href }) => (
                <li key={label} className="text-sm text-gray-500 leading-snug">
                  <span className="font-bold text-gray-800">{label}: </span>
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-gray-900 transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex justify-center">
          <p className="text-gray-400 text-sm text-center">
            websitename.com©{currentYear} all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
}
