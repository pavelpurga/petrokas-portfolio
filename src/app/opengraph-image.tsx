import { ImageResponse } from "next/og";

export const alt = "Petrokas — сайты и веб-приложения с характером";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
          background: "#0d1916",
          color: "#f4f4ec",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ position: "absolute", width: 620, height: 620, border: "1px solid #49665b", borderRadius: "48%", right: -100, top: -240 }} />
        <div style={{ position: "absolute", width: 490, height: 490, border: "1px solid #365149", borderRadius: "45%", right: -20, top: -165 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#b5d46a", fontSize: 25, fontWeight: 700 }}>
            <div style={{ width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #b5d46a", borderRadius: 50 }}>P</div>
            PETROKAS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ maxWidth: 900, fontSize: 70, lineHeight: .98, letterSpacing: "-4px", fontWeight: 600 }}>
              Сайты и веб-приложения с характером.
            </div>
            <div style={{ marginTop: 30, color: "#b8c5bb", fontSize: 25 }}>Разработка · перенос данных · запуск · поддержка</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
