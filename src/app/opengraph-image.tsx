import { ImageResponse } from "next/og";

export const alt = "Aetthel | Estudio de Desarrollo Web y Automatización en Barcelona";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e0e11",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "#d6f92c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0e0e11",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            Æ
          </div>
          <span style={{ color: "#ffffff", fontSize: "36px", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Aetthel
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              maxWidth: "1050px",
            }}
          >
            El salto digital al alcance de tu negocio.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#9ca3af",
              maxWidth: "950px",
              lineHeight: 1.4,
            }}
          >
            Landing pages de alta conversión · Aplicaciones web a medida · Automatizaciones de procesos
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "28px",
          }}
        >
          <div style={{ color: "#d6f92c", fontSize: "22px", fontWeight: 600 }}>
            Estudio Digital en Barcelona
          </div>
          <div style={{ color: "#6b7280", fontSize: "22px" }}>
            aetthel.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
