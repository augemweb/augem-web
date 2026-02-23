import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Augem – Perito Tasador de Joyas en Málaga",
  description:
    "Solicita presupuesto cerrado o consulta disponibilidad. Respuesta rápida y confidencial. Teléfono, WhatsApp y correo.",
  alternates: { canonical: "https://augem.es/contacto" },
  openGraph: {
    title: "Contacto | Augem",
    description: "Pide presupuesto y consulta disponibilidad. Respuesta rápida.",
    url: "https://augem.es/contacto",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Augem",
    description: "Pide presupuesto y consulta disponibilidad. Respuesta rápida.",
    images: ["/og.jpg"],
  },
};

const whatsapp = "https://wa.me/34676406196";
const email = "info@augem.es";
const phoneDisplay = "+34 676 406 196";
const phoneHref = "tel:+34676406196";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-gray-900">
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>

          <p className="mt-4 text-gray-700">
            Respuesta rápida y confidencialidad garantizada.
          </p>

          {/* TEXTO PROFESIONAL */}
          <div className="mt-6 max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Si necesitas una tasación profesional, un informe pericial o una valoración independiente de joyas,
              puedes contactar directamente conmigo por teléfono, WhatsApp o correo electrónico.
            </p>

            <p className="mt-4">
              Trabajo con particulares, aseguradoras y despachos profesionales, garantizando siempre
              <strong> objetividad, confidencialidad y rigor técnico</strong> en cada informe.
            </p>

            <p className="mt-4">
              Indícame brevemente qué necesitas y te responderé con disponibilidad y presupuesto cerrado
              sin compromiso.
            </p>
          </div>

          {/* TELÉFONO GRANDE */}
          <div className="mt-10 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900">
              {phoneDisplay}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Atención directa telefónica y WhatsApp
            </p>

            <div className="mt-4 flex justify-center gap-3">
              <a
                href={phoneHref}
                className="rounded-2xl border px-6 py-3 text-sm font-medium hover:bg-gray-100 transition"
              >
                Llamar ahora
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border px-6 py-3 text-sm font-medium hover:bg-gray-100 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* INFO RÁPIDA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-600" />
              <a href={whatsapp} target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp
              </a>
            </span>

            <span className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </span>

            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href={phoneHref} className="hover:underline">
                {phoneDisplay}
              </a>
            </span>

            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Málaga · España
            </span>

            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" /> L–V 9:00–19:00
            </span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}