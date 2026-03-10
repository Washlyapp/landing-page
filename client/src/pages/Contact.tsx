import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Contact() {
  const { language, setLanguage, t } = useLanguage();
  const c = t.contact;
  const common = t.common;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

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
      <main className="container mx-auto px-4 md:px-6 py-16 max-w-2xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{c.title}</h1>
          <p className="text-xl text-muted-foreground font-medium">{c.subtitle}</p>
        </div>

        {submitted ? (
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center space-y-3">
            <div className="text-4xl">✓</div>
            <h2 className="text-2xl font-bold">{c.successTitle}</h2>
            <p className="text-muted-foreground font-medium">{c.successDesc}</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-primary font-semibold hover:underline"
            >
              {c.sendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold" htmlFor="name">{c.name}</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={c.namePlaceholder}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold" htmlFor="email">{c.email}</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={c.emailPlaceholder}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold" htmlFor="subject">{c.subject}</label>
              <input
                id="subject"
                type="text"
                required
                placeholder={c.subjectPlaceholder}
                className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold" htmlFor="message">{c.message}</label>
              <textarea
                id="message"
                required
                rows={6}
                placeholder={c.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full rounded-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 disabled:opacity-60"
            >
              {loading ? c.sending : c.send}
            </Button>
          </form>
        )}
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
