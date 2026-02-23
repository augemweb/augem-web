"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  const nav = [
    { href: "/servicios", label: "Servicios" },
    { href: "/proceso", label: "Proceso" },
    { href: "/credenciales", label: "Credenciales" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 text-center">

        {/* LOGO */}
        <Link href="/" aria-label="Volver al inicio" className="inline-block">
          <Image
            src="/logo.png"
            alt="Augem logo"
            width={240}
            height={90}
            priority
          />
        </Link>

        {/* MENÚ */}
        <nav className="mt-4 flex justify-center gap-8 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:underline transition ${
                  active ? "font-semibold text-black" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
