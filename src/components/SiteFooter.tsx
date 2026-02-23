import { Phone, Mail, MapPin } from "lucide-react";

const whatsapp = "https://wa.me/34676406196";
const email = "info@augem.es";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Augem logo" className="h-20 w-auto mb-2" />
          <p className="mt-2 font-medium text-gray-800">Santiago Marín · Perito tasador de joyas</p>
          <p className="mt-1">NIF: 76428747T · Socio A.E.T.A. nº 230</p>
        </div>

        <div className="space-y-1 text-center md:text-left">
  <p className="font-medium text-gray-800">Enlaces</p>
  <a href="/servicios" className="block hover:underline">Servicios</a>
  <a href="/credenciales" className="block hover:underline">Credenciales</a>
  <a href="/contacto" className="block hover:underline">Contacto</a>
</div>

        <div className="space-y-1 text-center md:text-left">
          <p className="font-medium text-gray-800">Contacto</p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="w-4 h-4"/>
            <a className="hover:underline" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="w-4 h-4"/>
            <a className="hover:underline" href={`mailto:${email}`}>{email}</a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="w-4 h-4"/> Málaga · España
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-8">
        © {new Date().getFullYear()} Augem. Todos los derechos reservados.
        <div className="mt-3 flex gap-4 justify-center">
          <a href="/aviso-legal" className="hover:underline">Aviso legal</a>
          <a href="/privacidad" className="hover:underline">Privacidad</a>
          <a href="/cookies" className="hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  );
}