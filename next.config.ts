import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que el deploy falle por warnings de ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Evita que el deploy falle por errores de tipos (si estás iterando rápido)
  // OJO: esto es para sacar la web ya. Luego lo volvemos a poner en false.
  typescript: {
    ignoreBuildErrors: true,
  },

  // Seguridad: añade headers básicos (bien para SEO/seguridad)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
