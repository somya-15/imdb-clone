import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "This is a clone of IMDb.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
