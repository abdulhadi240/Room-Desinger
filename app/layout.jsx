
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";


export default function RootLayout({children}) {
  return (
    <html lang="eng">
      <body >
            <Lines />
            <Header />
            {children}
            <ScrollToTop />
      </body>
    </html>
  );
}
