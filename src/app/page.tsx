"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Gem,
  Scale,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  FileText,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- Utilidades simples ---
const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`max-w-6xl mx-auto px-4 md:px-6 ${className}`}
  >
    {children}
  </section>
);

export default function AugemLanding() {
  const whatsapp = "https://wa.me/34676406196";
  const email = "info@augem.es";

  return (
    <div className="min-h-screen bg-white text-gray-900">

{/* NAVBAR */}
<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
  <Section className="flex items-center justify-between py-3">
    {/* Logo: sólo este enlace apunta a "/" */}
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <img src="/logo.png" alt="Augem logo" className="h-8 w-auto" />
      Augem
    </Link>

    {/* Menú: cada item va a su página */}
    <nav className="hidden md:flex items-center gap-6 text-sm">
      <Link href="/servicios" className="hover:underline">Servicios</Link>
      <Link href="/proceso" className="hover:underline">Proceso</Link>
      <Link href="/credenciales" className="hover:underline">Credenciales</Link>
      <Link href="/contacto" className="hover:underline">Contacto</Link>
    </nav>

    <div className="flex items-center gap-2">
      <Button asChild className="rounded-2xl">
        <a href="https://wa.me/34676406196" target="_blank" rel="noreferrer">Pedir tasación</a>
      </Button>
    </div>
  </Section>
</header>
      {/* HERO */}
<Section id="inicio" className="py-14 md:py-20">
  <motion.div initial="hidden" animate="show" variants={fadeIn} className="text-center">
    <img
      src="/logo.png"
      alt="Augem – Perito tasador de joyas en Málaga"
      className="h-64 w-auto mb-8 mx-auto"
      loading="eager"
    />

    <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full mb-4 justify-center
      bg-[oklch(0.23_0.05_270/_0.10)] text-[oklch(0.23_0.05_270)]">
      <ShieldCheck className="w-4 h-4" /> Informes periciales con validez legal
    </div>

    <h1 className="text-xl md:text-3xl font-bold leading-tight">
      Tasación de joyas, diamantes y gemas en Málaga
    </h1>

    <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
      Servicio profesional para <strong>particulares</strong>, <strong>aseguradoras</strong> y
      <strong> despachos de abogados</strong>. Valoración objetiva y <strong>metodología gemológica</strong>.
      Informes <strong>impresos y firmados</strong> con su <strong>PDF</strong> correspondiente.
    </p>

    <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
      Consulta los <a href="/servicios" className="underline">servicios de tasación</a> y conoce
      el <a href="/proceso" className="underline">proceso de trabajo</a>. Formación IGE y
      <a href="/credenciales" className="underline"> acreditación A.E.T.A. nº 230</a>.
    </p>

    <div className="mt-6 flex flex-wrap gap-3 justify-center">
      <Button asChild className="rounded-2xl">
        <a href="/contacto">Solicitar presupuesto</a>
      </Button>
      <Button asChild variant="outline" className="rounded-2xl">
        <a href="#servicios">Ver servicios</a>
      </Button>
    </div>

    <ul className="mt-6 grid gap-2 text-sm text-gray-600 justify-center">
      <li className="flex items-center gap-2 justify-center">
        <Sparkles className="w-4 h-4 text-[oklch(0.23_0.05_270)]" /> Informe impreso + PDF
      </li>
      <li className="flex items-center gap-2 justify-center">
        <Sparkles className="w-4 h-4 text-[oklch(0.23_0.05_270)]" /> Presupuesto cerrado y transparente
      </li>
      <li className="flex items-center gap-2 justify-center">
        <Sparkles className="w-4 h-4 text-[oklch(0.23_0.05_270)]" /> Custodia segura y opción de desplazamiento
      </li>
    </ul>
  </motion.div>
</Section>

<Section className="pt-2">
  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700 text-center">
    <div className="rounded-xl border p-3">Acreditación <strong>A.E.T.A. nº 230</strong></div>
    <div className="rounded-xl border p-3">Formación <strong>IGE</strong> (gemología y tasación)</div>
    <div className="rounded-xl border p-3">Informe <strong>impreso + PDF</strong> con validez legal</div>
  </div>
</Section>

{/* POR QUÉ AUGEM */}
<Section className="pt-2 md:pt-6">
  <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
    <h2 className="text-2xl md:text-3xl font-bold text-center">¿Por qué Augem?</h2>
    <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
      <div className="p-5 border rounded-2xl">
        <h3 className="font-semibold">Rigor gemológico</h3>
        <p className="text-gray-700 mt-1">Formación IGE y acreditación A.E.T.A. nº 230. Metodología y criterios de valoración profesionales.</p>
      </div>
      <div className="p-5 border rounded-2xl">
        <h3 className="font-semibold">Validez legal</h3>
        <p className="text-gray-700 mt-1">Informes periciales claros, defendibles y aceptados por aseguradoras y despachos.</p>
      </div>
      <div className="p-5 border rounded-2xl">
        <h3 className="font-semibold">Seguridad y confianza</h3>
        <p className="text-gray-700 mt-1">Custodia en caja fuerte, cámaras y alarma. Desplazamiento a domicilio/empresa si lo necesitas.</p>
      </div>
    </div>
  </motion.div>
</Section>

      {/* SERVICIOS */}
      <Section id="servicios" className="py-16 md:py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-bold">Qué puedo hacer por ti</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
  Tasación <strong>objetiva y con validez legal</strong> para <strong>particulares</strong>,
  <strong> aseguradoras</strong> y <strong>despachos de abogados</strong>. Trabajo con
  <strong> metodología gemológica</strong> y resultados documentados (fotografías, mediciones y conclusiones)
  para su uso en <strong>siniestros</strong>, <strong>herencias</strong> y <strong>compra/venta</strong>.
</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Tasación para seguros",
                desc: "Valor asegurado o reposición, con fotografías y desglose técnico.",
              },
              { title: "Herencias y reparto", desc: "Listados y valores de mercado para particiones justas." },
              { title: "Compra/venta", desc: "Opinión independiente antes de comprar o vender una pieza." },
              { title: "Identificación de metales", desc: "Ensayos no destructivos para confirmar quilataje." },
              {
                title: "Diagnóstico de diamantes",
                desc: "Detección de sintéticos (CVD/HPHT) y tratamientos comunes.",
              },
              {
                title: "Gemología aplicada",
                desc: "Determinación de origen natural en gemas no diamante y su graduación.",
              },
            ].map((s) => (
              <Card key={s.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* PROCESO */}
      <Section id="proceso" className="py-16 md:py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-bold">Proceso de trabajo</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
  Un método en <strong>4 pasos</strong> para que sepas en todo momento el estado de tu tasación:
  contacto y <strong>presupuesto cerrado</strong>, recepción en laboratorio o <strong>desplazamiento</strong>,
  <strong> análisis gemológico</strong> y <strong>entrega de informe impreso + PDF</strong> con validez legal.
</p>
          <div className="grid md:grid-cols-4 gap-6 mt-8 text-sm">
            {[
              {
                step: "1",
                title: "Contacto",
                desc: "Cuéntame qué necesitas y acordamos alcance y presupuesto cerrado.",
              },
              {
                step: "2",
                title: "Recepción/visita",
                desc: "Entrega en laboratorio o desplazamiento a domicilio/empresa.",
              },
              {
                step: "3",
                title: "Análisis",
                desc: "Pruebas y mediciones con instrumental gemológico profesional.",
              },
              {
                step: "4",
                title: "Informe",
                desc: "Entrega digital (PDF) y, si lo requieres, copia impresa firmada.",
              },
            ].map((p) => (
              <div key={p.step} className="relative p-5 border rounded-2xl">
                <div className="absolute -top-3 left-5 bg-black text-white text-xs px-2 py-0.5 rounded-full">Paso {p.step}</div>
                <h3 className="font-semibold mt-2">{p.title}</h3>
                <p className="text-gray-600 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CREDENCIALES */}
      <Section id="credenciales" className="py-16 md:py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-bold">Credenciales y experiencia</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
  Tradición joyera/relojera de <strong>tres generaciones</strong>, formación en el
  <strong> Instituto Gemológico Español (IGE)</strong> y acreditación como <strong>socio A.E.T.A. nº 230</strong>.
  Informes claros, objetivos y defendibles ante <strong>aseguradoras</strong> y <strong>despachos</strong>.
</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Formación</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-2">
                <p>Instituto Gemológico Español (IGE) – Gemología, diamante, perlas, piedras de color y tasación</p>
                <p>Asociación Española de Tasadores de Alhajas (AETA) – Tasación profesional</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Experiencia</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                4 años certificando oro 18k, autenticando diamantes y graduando gemas en empresas privadas. Informes y certificados con validez legal a nivel particular.
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Alcance</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Servicio principal en Málaga y provincia. Desplazamientos a nivel nacional para proyectos que lo justifiquen.
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </Section>

      {/* FAQ */}
<Section className="py-16 md:py-24">
  <h2 className="text-2xl md:text-3xl font-bold text-center">Preguntas frecuentes</h2>
  <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {[
      {
        q: "¿Qué validez tiene un informe de tasación?",
        a: "Los informes de Augem cuentan con validez legal y son aceptados por aseguradoras, despachos de abogados y juzgados. Se entregan firmados y en formato digital e impreso.",
      },
      {
        q: "¿Cuánto tarda en entregarse la tasación?",
        a: "El plazo habitual es de 24 a 72 horas, dependiendo del número de piezas y de la complejidad del análisis.",
      },
      {
        q: "¿Puedo solicitar una tasación a domicilio o en mi empresa?",
        a: "Sí, existe la opción de desplazamiento con presupuesto cerrado. El servicio incluye custodia segura de las piezas cuando sea necesario.",
      },
      {
        q: "¿Cómo se garantiza la seguridad de las joyas?",
        a: "El laboratorio dispone de caja fuerte, cámaras de seguridad y alarma conectada. Además, el contenido está asegurado en caso de custodia temporal.",
      },
    ].map((item) => (
      <div key={item.q} className="p-5 border rounded-2xl shadow-sm bg-gray-50">
        <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
        <p className="text-gray-700">{item.a}</p>
      </div>
    ))}
  </div>
</Section>

      {/* CTA */}
<Section className="py-12">
  <Card className="rounded-2xl border-dashed bg-[oklch(0.97_0.01_270)]">
    <CardContent className="py-10 text-center">
      <h3 className="text-xl md:text-2xl font-semibold">¿Necesitas una tasación o informe pericial?</h3>
      <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
        Presupuesto cerrado y <strong>entrega impresa + PDF</strong>. Respuesta rápida y confidencialidad garantizada.
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <Button asChild className="rounded-2xl hover:bg-[oklch(0.30_0.05_270)]">
          <a href="/contacto">Solicitar presupuesto</a>
        </Button>
        <Button asChild variant="outline" className="rounded-2xl">
          <a href="/servicios">Ver servicios</a>
        </Button>
      </div>
      <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-700">
        <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> L–V 9:00–19:00</span>
        <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> Málaga</span>
        <span className="inline-flex items-center gap-1"><FileText className="w-4 h-4" /> Informe en 24–72h*</span>
      </div>
      <p className="text-xs text-gray-500 mt-2">*Plazo orientativo según piezas y volumen.</p>
    </CardContent>
  </Card>
</Section>

      {/* FOOTER */}
<footer className="border-t mt-16">
  <Section className="py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
    <div className="flex flex-col items-center text-center">
      <img src="/logo.png" alt="Augem logo" className="h-20 w-auto mb-2" />
      <p className="mt-2 font-medium text-gray-800">
        Santiago Marín – Perito Tasador de Joyas
      </p>
      <p className="text-gray-700">
        NIF: 76428747T · Socio A.E.T.A. nº 230
      </p>
      <p className="text-gray-700">
        Servicio en Málaga y desplazamientos a nivel nacional
      </p>
    </div>

    <div className="space-y-1 text-center md:text-left">
      <p className="font-medium text-gray-800">Enlaces</p>
      <Link href="/servicios" className="block hover:underline">Servicios</Link>
      <Link href="/proceso" className="block hover:underline">Proceso</Link>
      <Link href="/credenciales" className="block hover:underline">Credenciales</Link>
      <Link href="/contacto" className="block hover:underline">Contacto</Link>
    </div>

    <div className="space-y-1 text-center md:text-left">
      <p className="font-medium text-gray-800">Contacto</p>

      <p className="flex items-center justify-center md:justify-start gap-2">
        <MessageCircle className="w-4 h-4 text-green-600" />
        <a
          href="https://wa.me/34676406196"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          WhatsApp directo
        </a>
      </p>

      <p className="flex items-center justify-center md:justify-start gap-2">
        <Mail className="w-4 h-4" />
        <a href="mailto:info@augem.es" className="hover:underline">
          info@augem.es
        </a>
      </p>

      <p className="flex items-center justify-center md:justify-start gap-2">
        <Phone className="w-4 h-4" />
        <a href="tel:+34676406196" className="hover:underline">
          +34 676 406 196
        </a>
      </p>

      <p className="flex items-center justify-center md:justify-start gap-2">
        <MapPin className="w-4 h-4" /> Málaga · España
      </p>
    </div>
  </Section>

  <div className="text-center text-xs text-gray-500 pb-8">
    © {new Date().getFullYear()} Augem. Todos los derechos reservados.
  </div>
</footer>

</div>
);
}