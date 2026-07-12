import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tableau de Bord CCA — AFRILUX",
  description: "Suivi des commandes CCA — Proforma vers Règlement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
