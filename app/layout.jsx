import { CartProvider } from "./CartContext";

export const metadata = {
  title: "Beldi Equestrian & Polo Club | Concept Redesign",
  description: "A concept redesign of the Beldi Equestrian & Polo Club website. Not the official site.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap"
        />
      </head>
      <body style={{ margin: 0 }}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
