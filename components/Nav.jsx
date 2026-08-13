"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "work",
    id: "work",
  },
  {
    name: "resume",
    id: "resume",
  },
  {
    name: "services",
    id: "services",
  },
  {
    name: "contact",
    id: "contact",
  },
];

const ids = links.map((link) => link.id);

const Nav = () => {
  const activeId = useActiveSection(ids);
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <a
            href={`#${link.id}`}
            key={index}
            className={`${
              link.id === activeId && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
