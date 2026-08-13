"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  {
    name: "home",
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

const MobileNav = () => {
  const activeId = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* logo */}
        <div className='mt-32 mb-40 text-center text-2xl'>
          <a href='#home' onClick={() => setOpen(false)}>
            <h1 className='text-4xl font-semibold'>
              Vivek<span className='text-accent'>.</span>
            </h1>
          </a>
        </div>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <a
                href={`#${link.id}`}
                key={index}
                onClick={() => setOpen(false)}
                className={`${
                  link.id === activeId &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
