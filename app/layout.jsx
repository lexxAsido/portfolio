import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Asido | Personal Portfolio",
  description:
    "Asido is a Software Developer, crafting seamless web and mobile experiences with modern technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070c12] text-gray-950 relative min-h-dvh overflow-x-hidden`}
      >
        {/* ── Ambient Background Orbs ── */}
        {/* Golden orb — top right */}
        <div
          className="fixed top-[-12rem] right-[-5rem] -z-10 h-[35rem] w-[35rem] rounded-full opacity-[0.4]"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.8) 0%, rgba(234,179,8,0.3) 40%, transparent 70%)",
          }}
        />
        {/* Cyan orb — bottom left */}
        <div
          className="fixed bottom-[-15rem] left-[-10rem] -z-10 h-[40rem] w-[40rem] rounded-full opacity-[1.05]"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.7) 0%, rgba(6,182,212,0.2) 40%, transparent 70%)",
          }}
        />
        {/* Secondary warm glow — mid page */}
        <div
          className="fixed top-[50%] left-[60%] -translate-x-1/2 -translate-y-1/2 -z-10 h-[50rem] w-[50rem] rounded-full opacity-[1.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.5) 0%, transparent 60%)",
          }}
        />

        {/* ── Grain Overlay ── */}
        <div
          className="fixed inset-0 -z-[5] pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* ── Subtle grid pattern ── */}
        <div
          className="fixed inset-0 -z-[6] pointer-events-none opacity-[1.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
