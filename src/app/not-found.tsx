import Link from "next/link";
import { toLangSlug, toLevelSlug, DEFAULT_LEVEL } from "@/lib/routes/langLevel";

export default function NotFound() {
  const homeHref = `/${toLangSlug("EN")}/${toLevelSlug(DEFAULT_LEVEL)}`;

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        fontFamily: "'Karla', sans-serif",
        padding: 32,
        textAlign: "center"
      }}
    >
      <h1 style={{ fontFamily: "'Newsreader', serif", fontSize: 32, fontWeight: 600, margin: 0 }}>
        Página no encontrada
      </h1>
      <p style={{ fontSize: 14, color: "#4a443a", margin: 0 }}>
        No hemos encontrado lo que buscabas.
      </p>
      <Link
        href={homeHref}
        style={{
          marginTop: 8,
          fontSize: 13.5,
          fontWeight: 600,
          color: "#fffdf7",
          background: "#12275e",
          borderRadius: 5,
          padding: "10px 16px",
          textDecoration: "none"
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
