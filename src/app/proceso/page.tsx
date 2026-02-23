import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Proceso de tasación | Augem – Perito Tasador de Joyas",
  description:
    "Proceso claro en 4 pasos: contacto, recepción/visita, análisis gemológico profesional y entrega de informe pericial impreso y digital con validez legal.",
  alternates: { canonical: "https://augem.es/proceso" },
  openGraph: {
    title: "Proceso de tasación | Augem",
    description:
      "Método transparente para la tasación de joyas: presupuesto cerrado, custodia segura y entrega de informe pericial.",
    url: "https://augem.es/proceso",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proceso de tasación | Augem",
    description:
      "Método transparente para la tasación de joyas con informe pericial válido.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-gray-900">
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Proceso de trabajo en tasación y peritaje de joyas
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">
            En <strong>Augem</strong> la transparencia es esencial. Desde el primer contacto hasta la
            entrega del informe pericial, cada paso está diseñado para ofrecer un
            resultado <strong>objetivo, seguro y con validez legal</strong>.
          </p>

          {/* Paso 1 */}
          <div className="mt-12 grid gap-6">
            <article className="rounded-2xl border p-6 md:p-8">
              <div className="text-xs inline-flex px-2 py-0.5 rounded-full bg-gray-900 text-white">
                Paso 1
              </div>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold">
                Contacto y presupuesto cerrado
              </h2>
              <p className="mt-2 text-gray-700">
                Empezamos con una llamada o mensaje donde me explicas tu caso
                (siniestro, herencia, tasación para seguro, compra/venta, etc.).
                Resuelvo dudas iniciales y preparo un <strong>presupuesto cerrado</strong> con el
                alcance de la tasación, sin sorpresas.
              </p>
            </article>

            {/* Paso 2 */}
            <article className="rounded-2xl border p-6 md:p-8">
              <div className="text-xs inline-flex px-2 py-0.5 rounded-full bg-gray-900 text-white">
                Paso 2
              </div>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold">
                Recepción en laboratorio o visita
              </h2>
              <p className="mt-2 text-gray-700">
                Puedes entregar las piezas en mi laboratorio de Málaga —equipado con{" "}
                <strong>caja fuerte homologada</strong>, <strong>cámaras</strong> y{" "}
                <strong>alarma conectada</strong>— o solicitar{" "}
                <strong>desplazamiento a domicilio o empresa</strong>. Registro las piezas y, si es
                necesario, documento la <strong>custodia segura</strong>.
              </p>
            </article>

            {/* Paso 3 */}
            <article className="rounded-2xl border p-6 md:p-8">
              <div className="text-xs inline-flex px-2 py-0.5 rounded-full bg-gray-900 text-white">
                Paso 3
              </div>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold">
                Análisis gemológico profesional
              </h2>
              <p className="mt-2 text-gray-700">
                Realizo las pruebas con instrumental de gemología: lupa 10×, microscopio,
                lámpara UV, espectroscopio, refractómetro y balanza de precisión, entre otros.
                Verifico quilataje, peso, autenticidad y posibles tratamientos o síntesis
                (incluyendo detección de diamantes <strong>CVD/HPHT</strong>).
              </p>
            </article>

            {/* Paso 4 */}
            <article className="rounded-2xl border p-6 md:p-8">
              <div className="text-xs inline-flex px-2 py-0.5 rounded-full bg-gray-900 text-white">
                Paso 4
              </div>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold">
                Informe pericial: impreso firmado + PDF
              </h2>
              <p className="mt-2 text-gray-700">
                Entrego un <strong>informe pericial impreso y firmado</strong> como estándar, junto con
                su <strong>versión digital (PDF)</strong>. Incluye fotografías, resultados técnicos y
                conclusiones claras, válidas para <strong>aseguradoras, despachos y procedimientos
                legales</strong>.
              </p>
            </article>
          </div>

          {/* Nota de tiempos y costes adicionales */}
          <div className="mt-12 rounded-2xl border p-6 md:p-8 bg-gray-50 text-center">
            <p className="text-gray-700">
              Plazo orientativo de entrega: <strong>24–72 horas</strong> según piezas y volumen.
              La <strong>custodia segura</strong> y los <strong>desplazamientos</strong> están disponibles y llevan{" "}
              <strong>coste adicional</strong>, informado de forma transparente en el presupuesto.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}