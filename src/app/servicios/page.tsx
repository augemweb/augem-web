import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Servicios de tasación de joyas en Málaga | Augem",
  description:
    "Tasación para aseguradoras, herencias y compra/venta. Certificación de diamantes, gemología aplicada e identificación de metales con validez legal en Málaga.",
  alternates: { canonical: "https://augem.es/servicios" },
  openGraph: {
    title: "Servicios de tasación | Augem",
    description:
      "Tasaciones y peritajes de joyas con validez legal. Informes claros para particulares, aseguradoras y despachos.",
    url: "https://augem.es/servicios",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de tasación | Augem",
    description:
      "Tasaciones y peritajes de joyas con validez legal en Málaga.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  const servicios = [
    {
      title: "Tasación para aseguradoras",
      desc: "Cálculo del valor asegurado o de reposición en caso de siniestro, con fotografías y desglose técnico de cada pieza.",
    },
    {
      title: "Informes de herencias y repartos",
      desc: "Listados completos con valores de mercado actualizados, para garantizar particiones justas entre herederos.",
    },
    {
      title: "Asesoramiento en compra y venta",
      desc: "Opinión independiente antes de adquirir o vender una joya, evitando fraudes y sobrevaloraciones.",
    },
    {
      title: "Análisis de metales preciosos",
      desc: "Ensayos no destructivos para confirmar quilataje en oro 18k, platino y plata.",
    },
    {
      title: "Certificación de diamantes",
      desc: "Autenticación y graduación 4C (color, claridad, talla y peso). Detección de sintéticos (CVD/HPHT) y tratamientos.",
    },
    {
      title: "Gemología aplicada a piedras de color",
      desc: "Determinación de origen natural, identificación de inclusiones y graduación de calidad.",
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-gray-900">
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Servicios de tasación y certificación de joyas en Málaga
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">
            En <strong>Augem</strong> realizo tasaciones profesionales de joyas, diamantes y gemas para
            <strong> particulares</strong>, <strong>compañías aseguradoras</strong> y <strong>bufetes de abogados</strong>,
            con el objetivo de ofrecer siempre un valor <strong>objetivo, transparente</strong> y con <strong>validez legal</strong>.
          </p>

          {/* Grid de servicios */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {servicios.map((s) => (
              <Card key={s.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">{s.desc}</CardContent>
              </Card>
            ))}
          </div>

          {/* Seguridad y servicios adicionales */}
          <div className="mt-14 rounded-2xl border p-6 md:p-8 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-semibold text-center">
              Seguridad, custodia y desplazamientos
            </h2>
            <div className="mt-4 space-y-3 text-gray-700 max-w-3xl mx-auto text-center">
              <p>
                Para garantizar la máxima tranquilidad, mi laboratorio dispone de
                <strong> caja fuerte homologada</strong>, <strong>cámaras de seguridad</strong>,{" "}
                <strong>sistema de alarma</strong> y <strong>seguro de contenido</strong>.
              </p>
              <p>
                Cuando el análisis lo requiere, ofrezco el servicio de
                <strong> custodia segura de joyas</strong>. También realizo
                <strong> desplazamientos a domicilio o empresa</strong> con las medidas de seguridad necesarias.
              </p>
              <p className="text-gray-600">
                Ambos servicios llevan un <strong>coste adicional</strong>, siempre comunicado de forma clara y
                <strong> detallado en el presupuesto</strong>.
              </p>
            </div>
          </div>

          {/* Entrega de informes */}
          <div className="mt-10 rounded-2xl border p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-center">
              Entrega de informes
            </h2>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">
              Mis informes se entregan de forma <strong>estándar en formato impreso firmado</strong>,
              acompañados de su <strong>versión digital (PDF)</strong> para tu comodidad.
              De este modo dispones de un <strong>documento físico con respaldo legal</strong> y una copia
              digital fácil de compartir.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}