
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = "" }) {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? "text-primary font-bold" : ""
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
