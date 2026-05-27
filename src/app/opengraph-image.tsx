import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dionis Cutz — Barbería Premium en North Miami Beach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse at center, #1c1917 0%, #0c0a09 70%)",
          color: "#f5f5f4",
          fontFamily: "Georgia, serif",
          padding: "70px 80px",
          position: "relative",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            letterSpacing: "0.35em",
            fontSize: 18,
            color: "#CABA57",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          <span style={{ width: 40, height: 1, background: "#CABA57" }} />
          BARBERÍA PREMIUM · EST. 2016
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Main wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 0.95,
          }}
        >
          <div
            style={{
              fontSize: 180,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              display: "flex",
            }}
          >
            DIONIS
          </div>
          <div
            style={{
              fontSize: 180,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              backgroundImage:
                "linear-gradient(135deg, #CABA57 0%, #E2D173 50%, #CABA57 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            CUTZ.
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #44403c",
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <div
              style={{
                fontSize: 22,
                color: "#f5f5f4",
                fontWeight: 600,
                display: "flex",
              }}
            >
              North Miami Beach · NE 163rd St
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#a8a29e",
                fontWeight: 300,
                display: "flex",
              }}
            >
              dioniscutzbarbershop.com · (786) 859-6242
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <div style={{ display: "flex", gap: "4px", color: "#CABA57" }}>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.644 8.354c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <span
              style={{
                fontSize: 20,
                color: "#f5f5f4",
                fontWeight: 600,
                display: "flex",
              }}
            >
              5.0 en Google
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
