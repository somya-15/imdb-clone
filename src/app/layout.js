import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "This is a clone of IMDb.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Hearder */}
        <Header />
        {/* Navbar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  );
}
