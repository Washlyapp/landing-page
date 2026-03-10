import React from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function PrivacyPolicy() {
  const { language, setLanguage, t } = useLanguage();
  const page = t.privacyPolicy;
  const common = t.common;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-primary font-black text-2xl tracking-tight">
            <Sparkles className="w-6 h-6 fill-primary" />
            <span>Washly</span>
          </a>
          <div className="flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <a href="/" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              {common.backToHome}
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{page.title}</h1>
        <p className="text-muted-foreground font-medium mb-12">{common.lastUpdated}</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-base leading-relaxed">
          {page.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
              <p className="text-muted-foreground">
                {section.body.split("admin@washly.ro")[0]}
                {section.body.includes("admin@washly.ro") && (
                  <a href="mailto:admin@washly.ro" className="text-primary hover:underline">
                    admin@washly.ro
                  </a>
                )}
                {section.body.split("admin@washly.ro")[1]?.split("Contact page")[0]}
                {section.body.includes("Contact page") && (
                  <a href="/contact" className="text-primary hover:underline">
                    {common.contact}
                  </a>
                )}
                {section.body.includes("Contact page") && "."}
              </p>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
          <p>{common.allRightsReserved}</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">{common.privacyPolicy}</a>
            <a href="/terms" className="hover:text-primary transition-colors">{common.termsOfService}</a>
            <a href="/contact" className="hover:text-primary transition-colors">{common.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
