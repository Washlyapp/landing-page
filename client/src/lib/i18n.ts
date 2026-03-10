export type Language = "en" | "ro";

export const translations = {
  en: {
    nav: {
      howItWorks: "How It Works",
      services: "Services",
      downloadApp: "Download App",
      bookPickup: "Book a Pickup",
    },
    hero: {
      badge: "Fresh clothes, zero effort.",
      headline: "Laundry Day is",
      headlineBold: "Cancelled.",
      subheadline:
        "We pick up, clean, and deliver your laundry — next day. Get back to doing what you love.",
      bookPickup: "Book a Pickup",
      seeHow: "See How It Works",
      rating: "4.9 Rating",
      freePickup: "Free Pickup",
      turnaround: "24hr Turnaround",
      eco: "Eco-Friendly",
    },
    howItWorks: {
      title: "As easy as 1, 2, 3",
      subtitle: "Your laundry done in three simple steps.",
      steps: [
        {
          title: "Schedule a Pickup",
          desc: "Choose your time in the app or website. We'll bring the bags.",
        },
        {
          title: "We Clean Everything",
          desc: "Professional cleaning at our state-of-the-art eco-facility.",
        },
        {
          title: "Delivered to Your Door",
          desc: "Fresh, folded, and on time. Ready to be put away.",
        },
      ],
    },
    services: {
      title: "Everything You Need, Cleaned",
      subtitle:
        "From everyday wear to delicate silks, we handle it all with care.",
      viewPricing: "View Full Pricing",
      items: [
        {
          title: "Wash & Fold",
          desc: "Everyday laundry, priced by the bag and returned perfectly folded.",
        },
        {
          title: "Dry Cleaning",
          desc: "Expert care for suits, dresses, and delicate fabrics.",
        },
        {
          title: "Ironing & Press",
          desc: "Crisp, wrinkle-free finish for your professional attire.",
        },
        {
          title: "Bedding & Linens",
          desc: "Fresh sheets, plush duvets, and fluffy towels.",
        },
      ],
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "No hidden fees, ever. Pay for what you need.",
      perBag: "/bag",
      perItem: "/item",
      mostPopular: "Most Popular",
      basic: {
        name: "Basic Bag",
        price: "$29",
        features: ["Wash & Fold", "Standard Detergent", "48hr Turnaround"],
        cta: "Select Basic",
      },
      premium: {
        name: "Premium Bag",
        price: "$45",
        features: [
          "Everything in Basic",
          "Eco-friendly / Hypoallergenic",
          "Next-day Turnaround",
        ],
        cta: "Select Premium",
      },
      dry: {
        name: "Dry Cleaning",
        price: "$8+",
        features: ["Itemized Pricing", "Expert Spot Treatment", "Hung & Pressed"],
        cta: "View Price List",
      },
    },
    testimonials: {
      title: "Our Customers Love Us",
      rating: "4.9 ★ Google Rating based on 2,000+ reviews",
      items: [
        {
          quote:
            "Honestly life changing. I used to spend my entire Sunday doing laundry. Now I just leave a bag at my door and it comes back perfect.",
          name: "Sarah M.",
          city: "Brooklyn, NY",
        },
        {
          quote:
            "The folding is immaculate. My t-shirts look like they are displayed in a retail store. Customer service is super responsive too.",
          name: "David T.",
          city: "Austin, TX",
        },
        {
          quote:
            "I was skeptical about trusting someone with my dry cleaning, but Washly handled my suits perfectly. They even fixed a missing button!",
          name: "Elena R.",
          city: "Chicago, IL",
        },
      ],
    },
    app: {
      title: "Washly is in your pocket.",
      subtitle:
        "Schedule pickups, track your driver, and set your cleaning preferences with our highly-rated mobile app.",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    faq: {
      title: "Got Questions?",
      subtitle: "We've got answers.",
      items: [
        {
          q: "How quickly do you pick up?",
          a: "We offer next-day and sometimes same-day pickup depending on your area. Just check the app for available time slots.",
        },
        {
          q: "What areas do you serve?",
          a: "We currently serve major metropolitan areas including NYC, Chicago, Austin, and LA. Enter your zip code in the app to check availability.",
        },
        {
          q: "How is my laundry priced?",
          a: "Wash & Fold is priced simply by the bag. Dry cleaning and special items are priced per item. See our pricing page for details.",
        },
        {
          q: "What if something goes missing?",
          a: "We use barcode tracking for every bag and itemized tracking for dry cleaning. In the rare event something is lost, our Washly Guarantee covers replacement costs.",
        },
        {
          q: "Do you use eco-friendly products?",
          a: "Yes! By default, we use premium, hypoallergenic, and eco-friendly detergents. You can also specify special requests in the app.",
        },
        {
          q: "Can I set recurring orders?",
          a: "Absolutely. Set it and forget it. You can schedule weekly or bi-weekly pickups and never think about laundry again.",
        },
      ],
    },
    footer: {
      tagline:
        "Fresh clothes, zero effort. Redefining how you do laundry, one bag at a time.",
      services: "Services",
      company: "Company",
      links: {
        washFold: "Wash & Fold",
        dryCleaning: "Dry Cleaning",
        ironing: "Ironing & Press",
        pricing: "Pricing",
        contact: "Contact",
      },
      copyright: "© 2025 Washly. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    common: {
      backToHome: "← Back to Home",
      lastUpdated: "Last updated: March 2025",
      allRightsReserved: "© 2025 Washly. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      contact: "Contact",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have a question or want to learn more? We'd love to hear from you.",
      name: "Full Name",
      namePlaceholder: "Jane Smith",
      email: "Email Address",
      emailPlaceholder: "jane@example.com",
      subject: "Subject",
      subjectPlaceholder: "How can we help?",
      message: "Message",
      messagePlaceholder: "Tell us more...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message received!",
      successDesc: "Thanks for reaching out. We'll get back to you within 1 business day.",
      sendAnother: "Send another message",
    },
    privacyPolicy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Information We Collect",
          body: "When you use Washly, we collect information you provide directly, such as your name, email address, phone number, and delivery address. We also collect information automatically, such as your device type, browser, IP address, and usage patterns within our app and website.",
        },
        {
          heading: "2. How We Use Your Information",
          body: "We use the information we collect to provide, maintain, and improve our services — including scheduling pickups, processing payments, tracking orders, and communicating with you about your laundry. We may also use your information to send promotional communications, which you can opt out of at any time.",
        },
        {
          heading: "3. Information Sharing",
          body: "We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our services (e.g., payment processors, delivery partners). These providers are contractually obligated to protect your information and use it only for the purpose of providing services to us.",
        },
        {
          heading: "4. Data Retention",
          body: "We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account and associated data at any time by contacting our support team.",
        },
        {
          heading: "5. Cookies",
          body: "We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Disabling certain cookies may affect functionality.",
        },
        {
          heading: "6. Your Rights",
          body: "Depending on your location, you may have rights to access, correct, or delete your personal data, or to object to or restrict its processing. To exercise these rights, please contact us at admin@washly.ro.",
        },
        {
          heading: "7. Security",
          body: "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          heading: "8. Changes to This Policy",
          body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date above.',
        },
        {
          heading: "9. Contact Us",
          body: "If you have questions about this Privacy Policy, please reach out to us at admin@washly.ro or visit our Contact page.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          body: "By accessing or using Washly's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        },
        {
          heading: "2. Description of Service",
          body: "Washly provides on-demand laundry pickup, cleaning, and delivery services. We offer wash & fold, dry cleaning, ironing, and linen services as described on our website and app. Service availability may vary by location.",
        },
        {
          heading: "3. Account Registration",
          body: "To use certain features of our service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information during registration.",
        },
        {
          heading: "4. Orders and Payments",
          body: "By placing an order, you authorize Washly to charge your selected payment method. Prices are displayed at the time of ordering and are subject to change. Cancellations must be made at least 2 hours before a scheduled pickup to avoid a cancellation fee.",
        },
        {
          heading: "5. Washly Guarantee",
          body: "We take great care with every item. In the rare event that an item is lost or damaged while in our care, our Washly Guarantee provides compensation up to the fair market value of the item, subject to our claims process. Claims must be submitted within 48 hours of delivery.",
        },
        {
          heading: "6. Prohibited Items",
          body: "Certain items are not accepted for cleaning, including but not limited to: items containing hazardous materials, heavily soiled items beyond normal cleaning, items of extreme sentimental value, and items that require specialized care not offered by Washly.",
        },
        {
          heading: "7. Limitation of Liability",
          body: "To the maximum extent permitted by law, Washly's liability for any claim arising from our services is limited to the amount you paid for the specific order giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.",
        },
        {
          heading: "8. Modifications to Service",
          body: "We reserve the right to modify or discontinue any part of our service at any time. We will provide reasonable notice of significant changes where possible.",
        },
        {
          heading: "9. Governing Law",
          body: "These Terms are governed by applicable local law. Any disputes arising from these Terms or your use of our services shall be resolved through good-faith negotiation or, if necessary, through binding arbitration.",
        },
        {
          heading: "10. Contact",
          body: "For questions about these Terms, please contact us at admin@washly.ro or visit our Contact page.",
        },
      ],
    },
  },
  ro: {
    nav: {
      howItWorks: "Cum funcționează",
      services: "Servicii",
      downloadApp: "Descarcă aplicația",
      bookPickup: "Programează ridicarea",
    },
    hero: {
      badge: "Haine curate, zero efort.",
      headline: "Ziua spălatului e",
      headlineBold: "Anulată.",
      subheadline:
        "Ridicăm, curățăm și livrăm rufele tale — a doua zi. Întoarce-te la ce iubești.",
      bookPickup: "Programează ridicarea",
      seeHow: "Vezi cum funcționează",
      rating: "Rating 4.9",
      freePickup: "Ridicare gratuită",
      turnaround: "Livrare în 24 ore",
      eco: "Eco-Friendly",
    },
    howItWorks: {
      title: "Simplu ca 1, 2, 3",
      subtitle: "Rufele tale curate în trei pași simpli.",
      steps: [
        {
          title: "Programează o ridicare",
          desc: "Alege ora în aplicație sau pe site. Noi aducem sacii.",
        },
        {
          title: "Curățăm tot",
          desc: "Curățare profesională în facilitatea noastră eco de ultimă generație.",
        },
        {
          title: "Livrat la ușa ta",
          desc: "Proaspete, pliate și la timp. Gata de pus în dulap.",
        },
      ],
    },
    services: {
      title: "Tot ce ai nevoie, curățat",
      subtitle:
        "De la hainele de zi cu zi până la mătăsuri delicate, le tratăm cu grijă.",
      viewPricing: "Vezi prețuri complete",
      items: [
        {
          title: "Spălat și pliat",
          desc: "Rufe zilnice, prețuite pe sac și returnate perfect pliate.",
        },
        {
          title: "Curățătorie chimică",
          desc: "Îngrijire expertă pentru costume, rochii și materiale delicate.",
        },
        {
          title: "Călcat și presat",
          desc: "Finisaj impecabil, fără cute pentru ținuta ta profesională.",
        },
        {
          title: "Lenjerie de pat",
          desc: "Cearceafuri proaspete, plapume pufoase și prosoape moi.",
        },
      ],
    },
    pricing: {
      title: "Prețuri simple și transparente",
      subtitle:
        "Fără costuri ascunse, niciodată. Plătești doar ce ai nevoie.",
      perBag: "/sac",
      perItem: "/articol",
      mostPopular: "Cel mai popular",
      basic: {
        name: "Sac Basic",
        price: "$29",
        features: ["Spălat și pliat", "Detergent standard", "Livrare în 48 ore"],
        cta: "Alege Basic",
      },
      premium: {
        name: "Sac Premium",
        price: "$45",
        features: [
          "Tot din Basic",
          "Eco-friendly / Hipoalergenic",
          "Livrare a doua zi",
        ],
        cta: "Alege Premium",
      },
      dry: {
        name: "Curățătorie chimică",
        price: "$8+",
        features: [
          "Prețuri per articol",
          "Tratament expert al petelor",
          "Agățat și presat",
        ],
        cta: "Vezi lista de prețuri",
      },
    },
    testimonials: {
      title: "Clienții noștri ne iubesc",
      rating: "Rating Google 4.9 ★ bazat pe 2.000+ recenzii",
      items: [
        {
          quote:
            "Sincer, schimbă viața. Îmi petreceam tot duminica cu spălatul. Acum las un sac la ușă și îl primesc înapoi perfect.",
          name: "Sarah M.",
          city: "Brooklyn, NY",
        },
        {
          quote:
            "Plierea este impecabilă. Tricourile mele arată ca expuse într-un magazin. Serviciul clienți este super receptiv.",
          name: "David T.",
          city: "Austin, TX",
        },
        {
          quote:
            "Eram sceptic să las pe cineva cu curățătoria chimică, dar Washly mi-a îngrijit costumele perfect. Au cusut chiar și un nasture lipsă!",
          name: "Elena R.",
          city: "Chicago, IL",
        },
      ],
    },
    app: {
      title: "Washly e în buzunarul tău.",
      subtitle:
        "Programează ridicări, urmărește șoferul și setează preferințele de curățare cu aplicația noastră mobilă.",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    faq: {
      title: "Ai întrebări?",
      subtitle: "Noi avem răspunsuri.",
      items: [
        {
          q: "Cât de repede ridicați?",
          a: "Oferim ridicare a doua zi și uneori în aceeași zi, în funcție de zona ta. Verifică aplicația pentru intervalele disponibile.",
        },
        {
          q: "Ce zone deserviți?",
          a: "Deserviți în prezent marile zone metropolitane. Introdu codul poștal în aplicație pentru a verifica disponibilitatea.",
        },
        {
          q: "Cum sunt calculate prețurile?",
          a: "Spălat și pliat este prețuit simplu pe sac. Curățătoria chimică și articolele speciale sunt prețuite per articol.",
        },
        {
          q: "Ce se întâmplă dacă lipsește ceva?",
          a: "Folosim urmărire cu cod de bare pentru fiecare sac. În cazul rar în care ceva se pierde, Garanția Washly acoperă costurile de înlocuire.",
        },
        {
          q: "Folosiți produse eco-friendly?",
          a: "Da! Implicit, folosim detergenți premium, hipoalergenici și eco-friendly. Poți specifica cereri speciale și în aplicație.",
        },
        {
          q: "Pot seta comenzi recurente?",
          a: "Absolut. Setează și uită. Poți programa ridicări săptămânale sau bi-săptămânale și să nu te mai gândești la rufe.",
        },
      ],
    },
    footer: {
      tagline:
        "Haine curate, zero efort. Redefinim modul în care faci rufe, un sac pe rând.",
      services: "Servicii",
      company: "Companie",
      links: {
        washFold: "Spălat și pliat",
        dryCleaning: "Curățătorie chimică",
        ironing: "Călcat și presat",
        pricing: "Prețuri",
        contact: "Contact",
      },
      copyright: "© 2025 Washly. Toate drepturile rezervate.",
      privacy: "Politica de confidențialitate",
      terms: "Termeni și condiții",
    },
    common: {
      backToHome: "← Înapoi acasă",
      lastUpdated: "Ultima actualizare: Martie 2025",
      allRightsReserved: "© 2025 Washly. Toate drepturile rezervate.",
      privacyPolicy: "Politica de confidențialitate",
      termsOfService: "Termeni și condiții",
      contact: "Contact",
    },
    contact: {
      title: "Contactează-ne",
      subtitle: "Ai o întrebare sau vrei să afli mai multe? Ne-ar plăcea să auzim de la tine.",
      name: "Nume complet",
      namePlaceholder: "Ion Popescu",
      email: "Adresă de email",
      emailPlaceholder: "ion@exemplu.com",
      subject: "Subiect",
      subjectPlaceholder: "Cu ce te putem ajuta?",
      message: "Mesaj",
      messagePlaceholder: "Spune-ne mai multe...",
      send: "Trimite mesajul",
      sending: "Se trimite...",
      successTitle: "Mesaj primit!",
      successDesc: "Îți mulțumim că ne-ai contactat. Îți vom răspunde în cel mult o zi lucrătoare.",
      sendAnother: "Trimite alt mesaj",
    },
    privacyPolicy: {
      title: "Politica de confidențialitate",
      sections: [
        {
          heading: "1. Informații pe care le colectăm",
          body: "Când folosești Washly, colectăm informațiile pe care le furnizezi direct, cum ar fi numele, adresa de email, numărul de telefon și adresa de livrare. Colectăm și informații automat, cum ar fi tipul de dispozitiv, browserul, adresa IP și tiparele de utilizare în aplicație și pe site.",
        },
        {
          heading: "2. Cum folosim informațiile tale",
          body: "Folosim informațiile colectate pentru a furniza, menține și îmbunătăți serviciile noastre — inclusiv programarea ridicărilor, procesarea plăților, urmărirea comenzilor și comunicarea cu tine despre rufe. Putem folosi informațiile tale și pentru a trimite comunicări promoționale, la care te poți dezabona oricând.",
        },
        {
          heading: "3. Partajarea informațiilor",
          body: "Nu vindem informațiile tale personale. Putem partaja informațiile cu furnizori de servicii terți care ne ajută să operăm serviciile (de ex. procesatori de plăți, parteneri de livrare). Acești furnizori sunt obligați contractual să îți protejeze informațiile și să le folosească exclusiv pentru furnizarea serviciilor.",
        },
        {
          heading: "4. Retenția datelor",
          body: "Păstrăm datele tale personale atât timp cât este necesar pentru a furniza serviciile noastre și a respecta obligațiile legale. Poți solicita ștergerea contului și a datelor asociate oricând, contactând echipa noastră de suport.",
        },
        {
          heading: "5. Cookie-uri",
          body: "Folosim cookie-uri și tehnologii similare de urmărire pentru a îmbunătăți experiența ta pe site. Poți controla setările cookie-urilor prin preferințele browserului. Dezactivarea anumitor cookie-uri poate afecta funcționalitatea.",
        },
        {
          heading: "6. Drepturile tale",
          body: "În funcție de locația ta, poți avea dreptul de a accesa, corecta sau șterge datele tale personale, sau de a te opune sau restricționa prelucrarea acestora. Pentru a exercita aceste drepturi, contactează-ne la admin@washly.ro.",
        },
        {
          heading: "7. Securitate",
          body: "Implementăm măsuri de securitate conform standardelor industriei pentru a proteja informațiile tale personale. Cu toate acestea, nicio metodă de transmitere prin internet nu este 100% sigură și nu putem garanta securitate absolută.",
        },
        {
          heading: "8. Modificări ale acestei politici",
          body: "Putem actualiza această Politică de confidențialitate periodic. Te vom notifica despre modificările semnificative prin publicarea noii politici pe această pagină și actualizarea datei «Ultima actualizare» de mai sus.",
        },
        {
          heading: "9. Contactează-ne",
          body: "Dacă ai întrebări despre această Politică de confidențialitate, contactează-ne la admin@washly.ro sau vizitează pagina noastră de Contact.",
        },
      ],
    },
    terms: {
      title: "Termeni și condiții",
      sections: [
        {
          heading: "1. Acceptarea termenilor",
          body: "Prin accesarea sau utilizarea serviciilor Washly, ești de acord să respecți acești Termeni și condiții. Dacă nu ești de acord cu acești termeni, te rugăm să nu folosești serviciile noastre.",
        },
        {
          heading: "2. Descrierea serviciului",
          body: "Washly oferă servicii la cerere de ridicare, curățare și livrare a rufelor. Oferim servicii de spălat și pliat, curățătorie chimică, călcat și lenjerie, așa cum sunt descrise pe site și în aplicație. Disponibilitatea serviciilor poate varia în funcție de locație.",
        },
        {
          heading: "3. Crearea contului",
          body: "Pentru a utiliza anumite funcții ale serviciului, trebuie să îți creezi un cont. Ești responsabil pentru menținerea confidențialității acreditărilor contului și pentru toate activitățile care au loc în contul tău. Trebuie să furnizezi informații corecte și complete la înregistrare.",
        },
        {
          heading: "4. Comenzi și plăți",
          body: "Prin plasarea unei comenzi, autorizezi Washly să debiteze metoda de plată selectată. Prețurile sunt afișate la momentul comenzii și pot fi modificate. Anulările trebuie efectuate cu cel puțin 2 ore înainte de ridicarea programată pentru a evita taxa de anulare.",
        },
        {
          heading: "5. Garanția Washly",
          body: "Tratăm fiecare articol cu maximă atenție. În cazul rar în care un articol este pierdut sau deteriorat în timp ce se află în grija noastră, Garanția Washly oferă compensație până la valoarea de piață justă a articolului, conform procesului nostru de reclamații. Reclamațiile trebuie depuse în termen de 48 de ore de la livrare.",
        },
        {
          heading: "6. Articole interzise",
          body: "Anumite articole nu sunt acceptate pentru curățare, inclusiv, dar fără a se limita la: articole care conțin materiale periculoase, articole intens murdare dincolo de curățarea normală, articole cu valoare sentimentală extremă și articole care necesită îngrijire specializată neofertată de Washly.",
        },
        {
          heading: "7. Limitarea răspunderii",
          body: "În măsura maximă permisă de lege, răspunderea Washly pentru orice pretenție care decurge din serviciile noastre este limitată la suma plătită pentru comanda specifică care a generat pretenția. Nu suntem răspunzători pentru daune indirecte, incidentale sau consecvente.",
        },
        {
          heading: "8. Modificări ale serviciului",
          body: "Ne rezervăm dreptul de a modifica sau întrerupe orice parte a serviciului nostru în orice moment. Vom oferi notificare rezonabilă pentru modificările semnificative acolo unde este posibil.",
        },
        {
          heading: "9. Legea aplicabilă",
          body: "Acești Termeni sunt guvernați de legislația locală aplicabilă. Orice dispute care decurg din acești Termeni sau din utilizarea serviciilor noastre vor fi soluționate prin negociere de bună-credință sau, dacă este necesar, prin arbitraj obligatoriu.",
        },
        {
          heading: "10. Contact",
          body: "Pentru întrebări despre acești Termeni, contactează-ne la admin@washly.ro sau vizitează pagina noastră de Contact.",
        },
      ],
    },
  },
};
