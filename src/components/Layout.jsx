// src/components/Layout.jsx
import { StarBackground } from "./StarBackground";
import { ThemeToggle } from "./ThemeToggle";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
