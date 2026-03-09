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
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import heroImg from "@/assets/images/hero.png";
import appMockupImg from "@/assets/images/app-mockup.png";

export default function Home() {
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
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </div>

          <Button className="rounded-full font-bold px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
            Book a Pickup
          </Button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-blob-primary">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20 font-bold text-sm">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              Fresh clothes, zero effort.
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
              Laundry Day is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Cancelled.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed">
              We pick up, clean, and deliver your laundry — next day. Get back to doing what you love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30">
                Book a Pickup
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-2 hover:bg-muted/50 font-bold">
                See How It Works
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 text-sm font-bold text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-accent text-accent" /> 4.9 Rating
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-secondary" /> Free Pickup
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> 24hr Turnaround
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" /> Eco-Friendly
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
            {/* Decorative blob behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">As easy as 1, 2, 3</h2>
            <p className="text-xl text-muted-foreground font-medium">Your laundry done in three simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CalendarCheck,
                title: "Schedule a Pickup",
                desc: "Choose your time in the app or website. We'll bring the bags.",
                color: "bg-primary/10 text-primary"
              },
              {
                icon: WashingMachine,
                title: "We Clean Everything",
                desc: "Professional cleaning at our state-of-the-art eco-facility.",
                color: "bg-secondary/10 text-secondary"
              },
              {
                icon: Truck,
                title: "Delivered to Your Door",
                desc: "Fresh, folded, and on time. Ready to be put away.",
                color: "bg-accent/20 text-emerald-600" // accent is mint green, adjusting text for contrast
              }
            ].map((step, i) => (
              <div key={i} className="group relative bg-muted/30 rounded-[2rem] p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-border/50">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-xl shadow-sm border border-border">
                  {i + 1}
                </div>
                <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-6 rotate-3 group-hover:rotate-0 transition-transform ${step.color}`}>
                  <step.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
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
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Everything You Need, Cleaned</h2>
              <p className="text-xl text-muted-foreground font-medium">From everyday wear to delicate silks, we handle it all with care.</p>
            </div>
            <Button variant="outline" className="rounded-full font-bold border-2 shrink-0">
              View Full Pricing
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shirt,
                title: "Wash & Fold",
                desc: "Everyday laundry, priced by the bag and returned perfectly folded.",
                color: "bg-blue-50 text-blue-500"
              },
              {
                icon: ShieldCheck,
                title: "Dry Cleaning",
                desc: "Expert care for suits, dresses, and delicate fabrics.",
                color: "bg-rose-50 text-rose-500"
              },
              {
                icon: Wind,
                title: "Ironing & Press",
                desc: "Crisp, wrinkle-free finish for your professional attire.",
                color: "bg-amber-50 text-amber-500"
              },
              {
                icon: Droplet,
                title: "Bedding & Linens",
                desc: "Fresh sheets, plush duvets, and fluffy towels.",
                color: "bg-teal-50 text-teal-500"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow border border-border/50">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground font-medium">No hidden fees, ever. Pay for what you need.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Basic */}
            <div className="bg-muted/20 p-8 rounded-[2rem] border border-border">
              <h3 className="text-2xl font-bold mb-2">Basic Bag</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">$29</span>
                <span className="text-muted-foreground font-bold">/bag</span>
              </div>
              <ul className="space-y-4 mb-8 font-medium text-muted-foreground">
                <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5"/> Wash & Fold</li>
                <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5"/> Standard Detergent</li>
                <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5"/> 48hr Turnaround</li>
              </ul>
              <Button variant="outline" className="w-full rounded-full border-2 font-bold h-12">Select Basic</Button>
            </div>

            {/* Premium (Highlighted) */}
            <div className="bg-foreground text-background p-10 rounded-[2.5rem] shadow-2xl relative scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Bag</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black">$45</span>
                <span className="text-muted-foreground font-bold">/bag</span>
              </div>
              <ul className="space-y-4 mb-8 font-medium">
                <li className="flex items-center gap-3"><Check className="text-accent w-5 h-5"/> Everything in Basic</li>
                <li className="flex items-center gap-3"><Check className="text-accent w-5 h-5"/> Eco-friendly / Hypoallergenic</li>
                <li className="flex items-center gap-3"><Check className="text-accent w-5 h-5"/> Next-day Turnaround</li>
              </ul>
              <Button className="w-full rounded-full h-12 font-bold bg-primary hover:bg-primary/90 text-white border-0">
                Select Premium
              </Button>
            </div>

            {/* Dry Cleaning */}
            <div className="bg-muted/20 p-8 rounded-[2rem] border border-border">
              <h3 className="text-2xl font-bold mb-2">Dry Cleaning</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">$8+</span>
                <span className="text-muted-foreground font-bold">/item</span>
              </div>
              <ul className="space-y-4 mb-8 font-medium text-muted-foreground">
                <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5"/> Itemized Pricing</li>
                <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5"/> Expert Spot Treatment</li>
                <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5"/> Hung & Pressed</li>
              </ul>
              <Button variant="outline" className="w-full rounded-full border-2 font-bold h-12">View Price List</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-orange-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Our Customers Love Us</h2>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm font-bold text-sm">
              <Star className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
              4.9 ★ Google Rating based on 2,000+ reviews
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Honestly life changing. I used to spend my entire Sunday doing laundry. Now I just leave a bag at my door and it comes back perfect.",
                name: "Sarah M.",
                city: "Brooklyn, NY",
                color: "bg-[#E6F4FF]" // Light blue
              },
              {
                quote: "The folding is immaculate. My t-shirts look like they are displayed in a retail store. Customer service is super responsive too.",
                name: "David T.",
                city: "Austin, TX",
                color: "bg-[#FFF0ED]" // Light coral
              },
              {
                quote: "I was skeptical about trusting someone with my dry cleaning, but Washly handled my suits perfectly. They even fixed a missing button!",
                name: "Elena R.",
                city: "Chicago, IL",
                color: "bg-[#E8FAF5]" // Light mint
              }
            ].map((test, i) => (
              <div key={i} className={`${test.color} p-8 rounded-[2rem] relative`}>
                <div className="text-6xl font-serif text-black/10 absolute top-4 left-6">"</div>
                <div className="flex gap-1 mb-4 relative z-10 pt-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />)}
                </div>
                <p className="text-lg font-bold mb-6 relative z-10 leading-snug">"{test.quote}"</p>
                <div className="font-bold">
                  {test.name} <span className="text-black/50 font-medium ml-2">{test.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APP DOWNLOAD CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-primary to-rose-500 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-2xl">
            <div className="p-12 md:p-20 flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Washly is in your pocket.</h2>
              <p className="text-xl text-white/90 font-medium max-w-md">
                Schedule pickups, track your driver, and set your cleaning preferences with our highly-rated mobile app.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full h-14 px-8 font-black text-lg">
                  App Store
                </Button>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-full h-14 px-8 font-black text-lg backdrop-blur-sm">
                  Google Play
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Got Questions?</h2>
            <p className="text-xl text-muted-foreground font-medium">We've got answers.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How quickly do you pick up?", a: "We offer next-day and sometimes same-day pickup depending on your area. Just check the app for available time slots." },
              { q: "What areas do you serve?", a: "We currently serve major metropolitan areas including NYC, Chicago, Austin, and LA. Enter your zip code in the app to check availability." },
              { q: "How is my laundry priced?", a: "Wash & Fold is priced simply by the bag. Dry cleaning and special items are priced per item. See our pricing page for details." },
              { q: "What if something goes missing?", a: "We use barcode tracking for every bag and itemized tracking for dry cleaning. In the rare event something is lost, our Washly Guarantee covers replacement costs." },
              { q: "Do you use eco-friendly products?", a: "Yes! By default, we use premium, hypoallergenic, and eco-friendly detergents. You can also specify special requests in the app." },
              { q: "Can I set recurring orders?", a: "Absolutely. Set it and forget it. You can schedule weekly or bi-weekly pickups and never think about laundry again." }
            ].map((faq, i) => (
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
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2 font-black text-3xl tracking-tight text-white">
                <Sparkles className="w-8 h-8 fill-primary text-primary" />
                <span>Washly</span>
              </div>
              <p className="text-white/60 font-medium max-w-sm text-lg">
                Fresh clothes, zero effort. Redefining how you do laundry, one bag at a time.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg mb-6 text-white/90">Services</h4>
              <ul className="space-y-3 font-medium text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">Wash & Fold</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dry Cleaning</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ironing & Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg mb-6 text-white/90">Company</h4>
              <ul className="space-y-3 font-medium text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 font-medium">
              © 2025 Washly. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-white/40 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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