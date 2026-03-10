import { type Language } from "@/lib/i18n";

export function LanguageToggle({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (l: Language) => void;
}) {
  return (
    <div className="flex items-center gap-1 text-sm font-bold border border-border rounded-full px-3 py-1.5">
      <button
        onClick={() => setLanguage("en")}
        className={`transition-colors ${language === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => setLanguage("ro")}
        className={`transition-colors ${language === "ro" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        RO
      </button>
    </div>
  );
}
