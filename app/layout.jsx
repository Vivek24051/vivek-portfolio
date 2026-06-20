import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "-font-jetbrainsMono",
});

export const metadata = {
  title: "Vivek Limbachiya | Full-Stack Developer",
  description:
    "Full-Stack Developer with 3+ years of experience building scalable web applications, REST APIs, and production-grade backend systems using React.js, Next.js, Node.js, TypeScript, and AWS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
