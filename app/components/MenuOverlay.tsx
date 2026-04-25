import NavLink from "./NavLink";

interface LinkType {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: LinkType[];
}

export default function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <div className="bg-[var(--background)] border-t border-[var(--border)]">
      <ul className="flex flex-col py-4 items-center gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}