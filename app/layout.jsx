export const metadata = {
  title: "Beldi Equestrian & Polo Club | Concept Redesign",
  description: "A concept redesign of the Beldi Equestrian & Polo Club website. Not the official site.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
