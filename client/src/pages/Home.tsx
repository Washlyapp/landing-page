import React from "react";
import {
  Sparkles,
  CalendarCheck,
  WashingMachine,
  Truck,
  Star,
  ShieldCheck,
  Leaf,
  Clock,
  Shirt,
  Wind,
  Droplet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import heroImg from "@/assets/images/hero.png";
import appMockupImg from "@/assets/images/app-mockup.png";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">

      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-black text-2xl tracking-tight">
            <Sparkles className="w-6 h-6 fill-primary" />
            <span>Washly</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-semibold text-muted-foreground">
            <a href="#how-it-works" className="hover:text-primary transition-colors">{t.nav.howItWorks}</a>
            <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#app" className="hover:text-primary transition-colors">{t.nav.downloadApp}</a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <Button className="rounded-full font-bold px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
              {t.nav.bookPickup}
            </Button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-blob-primary">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20 font-bold text-sm">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              {t.hero.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
              {t.hero.headline} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.hero.headlineBold}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30">
                {t.hero.bookPickup}
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-2 hover:bg-muted/50 font-bold">
                {t.hero.seeHow}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 text-sm font-bold text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-accent text-accent" /> {t.hero.rating}
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-secondary" /> {t.hero.freePickup}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> {t.hero.turnaround}
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" /> {t.hero.eco}
              </div>
            </div>
          </div>

          <div className="flex-1 relative z-10 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white">
              <img
                src={heroImg}
                alt="Person happily holding fresh laundry"
                className="w-full h-auto object-cover aspect-4/3"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.howItWorks.title}</h2>
            <p className="text-xl text-muted-foreground font-medium">{t.howItWorks.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CalendarCheck, color: "bg-primary/10 text-primary" },
              { icon: WashingMachine, color: "bg-secondary/10 text-secondary" },
              { icon: Truck, color: "bg-accent/20 text-emerald-600" },
            ].map((step, i) => (
              <div key={i} className="group relative bg-muted/30 rounded-[2rem] p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-border/50">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-xl shadow-sm border border-border">
                  {i + 1}
                </div>
                <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-6 rotate-3 group-hover:rotate-0 transition-transform ${step.color}`}>
                  <step.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t.howItWorks.steps[i].title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{t.howItWorks.steps[i].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 bg-blob-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.services.title}</h2>
              <p className="text-xl text-muted-foreground font-medium">{t.services.subtitle}</p>
            </div>
            <Button variant="outline" className="rounded-full font-bold border-2 shrink-0">
              {t.services.viewPricing}
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shirt, color: "bg-blue-50 text-blue-500" },
              { icon: ShieldCheck, color: "bg-rose-50 text-rose-500" },
              { icon: Wind, color: "bg-amber-50 text-amber-500" },
              { icon: Droplet, color: "bg-teal-50 text-teal-500" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow border border-border/50">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.services.items[i].title}</h3>
                <p className="text-muted-foreground font-medium">{t.services.items[i].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      {false && (
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.pricing.title}</h2>
            <p className="text-xl text-muted-foreground font-medium">{t.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Basic */}
            <div className="bg-muted/20 p-8 rounded-[2rem] border border-border">
              <h3 className="text-2xl font-bold mb-2">{t.pricing.basic.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">{t.pricing.basic.price}</span>
                <span className="text-muted-foreground font-bold">{t.pricing.perBag}</span>
              </div>
              <ul className="space-y-4 mb-8 font-medium text-muted-foreground">
                {t.pricing.basic.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> {f}</li>
                ))}
              </ul>
              <Button variant="outline" className="w-full rounded-full border-2 font-bold h-12">{t.pricing.basic.cta}</Button>
            </div>

            {/* Premium */}
            <div className="bg-foreground text-background p-10 rounded-[2.5rem] shadow-2xl relative scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                {t.pricing.mostPopular}
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.pricing.premium.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black">{t.pricing.premium.price}</span>
                <span className="text-muted-foreground font-bold">{t.pricing.perBag}</span>
              </div>
              <ul className="space-y-4 mb-8 font-medium">
                {t.pricing.premium.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3"><Check className="text-accent w-5 h-5" /> {f}</li>
                ))}
              </ul>
              <Button className="w-full rounded-full h-12 font-bold bg-primary hover:bg-primary/90 text-white border-0">
                {t.pricing.premium.cta}
              </Button>
            </div>

            {/* Dry Cleaning */}
            <div className="bg-muted/20 p-8 rounded-[2rem] border border-border">
              <h3 className="text-2xl font-bold mb-2">{t.pricing.dry.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">{t.pricing.dry.price}</span>
                <span className="text-muted-foreground font-bold">{t.pricing.perItem}</span>
              </div>
              <ul className="space-y-4 mb-8 font-medium text-muted-foreground">
                {t.pricing.dry.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> {f}</li>
                ))}
              </ul>
              <Button variant="outline" className="w-full rounded-full border-2 font-bold h-12">{t.pricing.dry.cta}</Button>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 6. TESTIMONIALS */}
      {/* <section className="py-24 bg-orange-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.testimonials.title}</h2>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm font-bold text-sm">
              <Star className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
              {t.testimonials.rating}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(["bg-[#E6F4FF]", "bg-[#FFF0ED]", "bg-[#E8FAF5]"] as const).map((color, i) => (
              <div key={i} className={`${color} p-8 rounded-[2rem] relative`}>
                <div className="text-6xl font-serif text-black/10 absolute top-4 left-6">"</div>
                <div className="flex gap-1 mb-4 relative z-10 pt-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />)}
                </div>
                <p className="text-lg font-bold mb-6 relative z-10 leading-snug">"{t.testimonials.items[i].quote}"</p>
                <div className="font-bold">
                  {t.testimonials.items[i].name} <span className="text-black/50 font-medium ml-2">{t.testimonials.items[i].city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 7. APP DOWNLOAD CTA */}
      <section id="app" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-primary to-rose-500 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-2xl">
            <div className="p-12 md:p-20 flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white/90 text-sm font-bold backdrop-blur-sm">
                Coming soon
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">{t.app.title}</h2>
              <p className="text-xl text-white/90 font-medium max-w-md">{t.app.subtitle}</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-white text-primary hover:bg-white cursor-default rounded-full h-14 px-8 font-black text-lg opacity-80">
                  {t.app.appStore}
                </Button>
                <Button className="bg-white/20 hover:bg-white/20 text-white border-0 cursor-default rounded-full h-14 px-8 font-black text-lg backdrop-blur-sm opacity-80">
                  {t.app.googlePlay}
                </Button>
              </div>
            </div>
            <div className="flex-1 relative self-end md:self-auto h-[400px] w-full mt-8 md:mt-0 flex justify-center md:justify-end md:pr-20">
              <img
                src={appMockupImg}
                alt="Washly App Interface"
                className="h-[500px] w-auto object-contain absolute bottom-0 drop-shadow-2xl translate-y-[20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.faq.title}</h2>
            <p className="text-xl text-muted-foreground font-medium">{t.faq.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.items.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-muted/30 border-0 rounded-2xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section> */}

      {/* 9. FOOTER */}
      <footer id="about" className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2 font-black text-3xl tracking-tight text-white">
                <Sparkles className="w-8 h-8 fill-primary text-primary" />
                <span>Washly</span>
              </div>
              <p className="text-white/60 font-medium max-w-sm text-lg">{t.footer.tagline}</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg mb-6 text-white/90">{t.footer.services}</h4>
              <ul className="space-y-3 font-medium text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.washFold}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.dryCleaning}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.ironing}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.pricing}</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg mb-6 text-white/90">{t.footer.company}</h4>
              <ul className="space-y-3 font-medium text-white/60">
                <li><a href="/contact" className="hover:text-primary transition-colors">{t.footer.links.contact}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 font-medium">{t.footer.copyright}</p>
            <div className="flex items-center gap-6 text-white/40 font-medium">
              <a href="/privacy-policy" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="/terms" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
