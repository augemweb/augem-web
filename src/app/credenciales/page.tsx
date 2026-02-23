import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Credenciales y experiencia | Augem",
  description:
    "Tradición joyera/relojera de tres generaciones, formación IGE y A.E.T.A. (socio nº 230). Informes periciales claros, objetivos y con validez legal.",
  alternates: { canonical: "https://augem.es/credenciales" },
  openGraph: {
    title: "Credenciales y experiencia | Augem",
    description:
      "Tradición familiar, formación reconocida y experiencia profesional para tasaciones con rigor y confianza.",
    url: "https://augem.es/credenciales",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Augem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credenciales y experiencia | Augem",
    description:
      "Tradición familiar, formación reconocida y experiencia profesional.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white text-gray-900">
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Credenciales y experiencia
          </h1>

          <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
            <p>
              En <strong>Augem</strong> confluyen tradición, formación y experiencia para
              ofrecer un servicio de tasación con rigor y confianza.
            </p>

            <p>
              Mi familia ha estado vinculada al sector{" "}
              <strong>joyero y relojero durante tres generaciones</strong>, lo que me
              permitió crecer rodeado de metales preciosos, gemas y relojes desde
              una edad temprana. Esa herencia despertó una pasión que, con el
              tiempo, transformé en una vocación profesional.
            </p>

            <p>
              Para consolidar esa base familiar, completé una{" "}
              <strong>formación académica especializada</strong> en el{" "}
              <strong>Instituto Gemológico Español (IGE)</strong>, donde adquirí
              conocimientos en gemología, diamante, perlas, piedras de color y
              tasación. Posteriormente amplié mi preparación en la{" "}
              <strong>Asociación Española de Tasadores de Alhajas (A.E.T.A.)</strong>,
              perfeccionando los criterios técnicos de valoración y acreditándome
              como <strong>socio nº 230</strong>.
            </p>

            <p>
              Hoy, esa combinación de{" "}
              <strong>
                tradición heredada, estudios reconocidos y experiencia profesional
              </strong>{" "}
              se traduce en informes periciales claros, objetivos y con plena
              validez legal, dirigidos tanto a <strong>particulares</strong> como a{" "}
              <strong>aseguradoras y despachos de abogados</strong>.
            </p>
          </div>

          {/* Pequeño bloque de datos clave (opcional) */}
          <div className="mt-10 grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="rounded-xl border p-4">
              <p className="font-medium">Socio A.E.T.A.</p>
              <p className="mt-1">Nº 230</p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="font-medium">Formación IGE</p>
              <p className="mt-1">Gemología, Diamante, Perlas y Piedras de color</p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="font-medium">Tradición familiar</p>
              <p className="mt-1">Tres generaciones en joyería/relojería</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}