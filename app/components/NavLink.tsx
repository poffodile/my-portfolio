import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-[var(--text-main)] font-semibold hover:text-[var(--gold)] transition-colors duration-200">
      {title}
    </Link>
  );
}