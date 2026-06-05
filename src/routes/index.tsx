import { createFileRoute } from "@tanstack/react-router";
import {
  PawPrint,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Clock,
  Heart,
  Shield,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react";

import heroImg from "@/assets/woeffies/hero.png";
import krijnImg from "@/assets/woeffies/krijn.jpg";
import pack1 from "@/assets/woeffies/pack1.jpeg";
import pack2 from "@/assets/woeffies/pack2.jpeg";
import pack3 from "@/assets/woeffies/pack3.jpeg";
import logoAsset from "@/assets/woeffies-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hus Woeffies — Hondenuitlaatservice Rotterdam" },
      {
        name: "description",
        content:
          "Liefdevolle hondenuitlaatservice in Rotterdam. Kleine roedels, ruime bus, ervaren begeleiding door Krijn. Centrum, Crooswijk, Hillegersberg, Schiebroek.",
      },
      { property: "og:title", content: "Hus Woeffies — Hondenuitlaatservice Rotterdam" },
      {
        property: "og:description",
        content:
          "Twee uur buitenplezier per wandeling, maximaal 12 honden per ronde. Al meer dan 10 jaar ervaring met roedels.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const nav = [
  { href: "#over", label: "Over" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#tarieven", label: "Tarieven" },
  { href: "#contact", label: "Contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Werkwijze />
        <Gallery />
        <Tarieven />
        <Voorwaarden />
        <Recensies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center" aria-label="Woeffies Hondenuitlaatservice">
      <img
        src={logoAsset.url}
        alt="Woeffies Hondenuitlaatservice"
        className="h-[72px] w-auto md:h-[84px]"
      />
    </a>
  );
}

function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-black/5 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-glow"
        >
          Aanmelden <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-black/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <PawPrint className="h-3.5 w-3.5 text-primary-glow" /> Rotterdam · sinds jaren
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
            Buiten zijn waar je hond <span className="text-gradient">het gelukkigst</span> van wordt.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Hus Woeffies is een persoonlijke hondenuitlaatservice in Rotterdam. Kleine roedels,
            ruime bus, en twee uur lekker rennen met soortgenoten in het Hoge Bergse Bos of
            Schiebroeksepark.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-purple)] px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
            >
              Plan een kennismaking <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#werkwijze"
              className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-black/[0.03] px-6 py-3 font-medium transition hover:bg-black/[0.06]"
            >
              Hoe het werkt
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 text-sm">
            {[
              { k: "10+", v: "jaar ervaring" },
              { k: "12", v: "max. per ronde" },
              { k: "2 uur", v: "per wandeling" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                <dd className="text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[image:var(--gradient-purple)] opacity-30 blur-2xl" />
          <div className="glass animate-float relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={pack3}
              alt="Krijn met de roedel honden in het park"
              className="h-[520px] w-full rounded-[1.6rem] object-cover"
              loading="eager"
            />
          </div>
          <div className="glass absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl p-4 sm:flex">
            <img src={pack1} alt="" className="h-12 w-12 rounded-full object-cover" />
            <div className="text-sm">
              <p className="font-medium">Persoonlijke aandacht</p>
              <p className="text-muted-foreground">voor élke woef</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Centrum",
    "Crooswijk",
    "Scheepvaartkwartier",
    "Oude Noorden",
    "Schiebroek",
    "Hillegersberg",
  ];
  return (
    <div className="border-y border-black/5 bg-secondary py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        <MapPin className="h-4 w-4 text-primary-glow" />
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-x-10">
            {i}
            {idx < items.length - 1 && <span className="text-primary/60">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="over" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-purple)] opacity-20 blur-2xl" />
          <img
            src={krijnImg}
            alt="Krijn Bakelaar, oprichter Hus Woeffies"
            className="relative h-[560px] w-full rounded-[2rem] object-cover shadow-[var(--shadow-card)]"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary-glow">Over Krijn</p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Een leven lang <span className="text-gradient">tussen honden.</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Mijn naam is Krijn Bakelaar en ik heb al sinds mijn jeugd honden in mijn leven gehad.
              Inmiddels ruim tien jaar ervaring met roedels — ik weet om te gaan met bijzonder
              gedrag en lees honden van een afstand.
            </p>
            <p>
              Ik ben dol op het buitenleven, ongeacht het seizoen, en heb van mijn grootste hobby
              eindelijk m'n werk gemaakt. Ik woon in de Hoeksche Waard en haal de honden op in
              Rotterdam, waar ik door de jaren heen een hechte band heb opgebouwd met de roedel en
              hun mensen.
            </p>
            <p>
              Zelf heb ik twee Franse Buldog meisjes die regelmatig meegaan en de boel in de gaten
              houden.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { icon: Heart, label: "Liefdevol & geduldig" },
              { icon: Shield, label: "Ruime bus met ventilatie" },
              { icon: Sparkles, label: "Eigen bench per hond" },
              { icon: PawPrint, label: "Puppy-training vanaf 20 wk" },
            ].map((b) => (
              <div key={b.label} className="glass flex items-center gap-3 rounded-2xl p-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/20 text-primary-glow">
                  <b.icon className="h-4 w-4" />
                </span>
                <span className="text-sm">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Werkwijze() {
  const steps = [
    {
      n: "01",
      t: "Kennismaking",
      d: "Je belt of mailt voor een kennismaking. Via een korte vragenlijst leer ik je hond goed kennen.",
    },
    {
      n: "02",
      t: "Ophalen",
      d: "Op de afgesproken dagen haal ik je hond op. In de ruime, geventileerde bus met een eigen bench.",
    },
    {
      n: "03",
      t: "Twee uur buiten",
      d: "Een uur lekker rennen in het Hoge Bergse Bos of Schiebroeksepark — met max. 12 honden per ronde.",
    },
    {
      n: "04",
      t: "Thuis & update",
      d: "Schoongemaakt thuisgebracht. Via WhatsApp of schriftje hou ik je op de hoogte.",
    },
  ];

  return (
    <section id="werkwijze" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)] opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-glow">Werkwijze</p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Vier stappen naar een <span className="text-gradient">moe en blije hond.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
            >
              <span className="font-display text-5xl text-primary/50 transition group-hover:text-primary-glow">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="glass mt-10 grid gap-6 rounded-2xl p-6 md:grid-cols-3">
          <Info icon={Clock} title="Ochtendronde" body="09:00 – 12:00, ma t/m do" />
          <Info icon={Clock} title="Middagronde" body="12:00 – 15:00, ma t/m vr" />
          <Info icon={MapPin} title="Parken" body="Hoge Bergse Bos · Schiebroeksepark" />
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/20 text-primary-glow">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-4 md:grid-cols-3">
        {[pack1, pack2, pack3].map((src, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-3xl ${i === 1 ? "md:translate-y-8" : ""}`}
          >
            <img
              src={src}
              alt="Honden uit de roedel van Hus Woeffies"
              className="h-80 w-full object-cover transition duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Tarieven() {
  return (
    <section id="tarieven" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary-glow">Tarieven</p>
        <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
          Eerlijke <span className="text-gradient">strippenkaarten.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Geldig voor 10 wandelingen, drie maanden lang. Prijzen vanaf 1 mei 2026.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <PriceCard
          name="Strippenkaart"
          subtitle="1 hond"
          price="160"
          features={[
            "10 wandelingen van ca. 2 uur",
            "Ophalen & thuisbrengen",
            "Eigen bench in de bus",
            "Updates via WhatsApp",
          ]}
        />
        <PriceCard
          highlight
          name="Strippenkaart"
          subtitle="2 honden, 1 adres"
          price="240"
          features={[
            "10 wandelingen van ca. 2 uur",
            "Samen in dezelfde roedel",
            "Persoonlijke begeleiding",
            "Updates via WhatsApp",
          ]}
        />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        In Schiebroek loop ik alleen van maandag t/m donderdag in de ochtend.
      </p>
    </section>
  );
}

function PriceCard({
  name,
  subtitle,
  price,
  features,
  highlight,
}: {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-8 ${
        highlight
          ? "border border-primary/40 bg-[image:var(--gradient-purple)] text-primary-foreground shadow-[var(--shadow-glow)]"
          : "glass"
      }`}
    >
      {highlight && (
        <span className="absolute right-6 top-6 rounded-full bg-black/30 px-3 py-1 text-xs uppercase tracking-widest">
          Populair
        </span>
      )}
      <p className="text-sm uppercase tracking-[0.2em] opacity-80">{name}</p>
      <h3 className="mt-2 font-display text-2xl">{subtitle}</h3>
      <div className="mt-6 flex items-end gap-1">
        <span className="font-display text-6xl">€{price}</span>
        <span className="pb-2 text-sm opacity-80">/ 10 ritten</span>
      </div>
      <ul className="mt-8 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check className="h-4 w-4 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Voorwaarden() {
  const items = [
    "Uw hond dient jaarlijks de benodigde vaccinaties te ontvangen, waaronder de cocktailvaccinatie en de vaccinatie tegen kennelhoest.",
    "U beschikt over een geldige WA-verzekering voor uw hond.",
    "Uw hond is op het afgesproken tijdstip aanwezig voor de wandeling.",
    "Uw hond is sociaal naar mensen en andere honden. Bij een loopse teef verzoeken wij u dit tijdig aan ons door te geven.",
    "Een wandeling kan kosteloos worden geannuleerd tot één week voorafgaand aan de geplande wandeling. Bij een latere annulering wordt de wandeling in rekening gebracht.",
    "Hondenuitlaatservice Woeffies is niet aansprakelijk voor schade of letsel die door uw hond aan derden of andere honden wordt veroorzaakt.",
    "In geval van nood machtigt u Hondenuitlaatservice Woeffies om, indien noodzakelijk, veterinaire hulp in te schakelen. Eventuele kosten hiervan zijn voor rekening van de eigenaar.",
    "Een strippenkaart is drie maanden geldig vanaf de aankoopdatum.",
  ];
  return (
    <section id="afspraken" className="border-y border-black/5 bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary-glow">Afspraken</p>
          <h2 className="mt-4 font-display text-4xl font-semibold">
            Praktische <span className="text-gradient">afspraken.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Zo blijft het voor iedere hond — en ieder baasje — fijn en veilig.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((v) => (
            <li
              key={v}
              className="glass flex items-start gap-3 rounded-2xl p-4 text-sm text-muted-foreground"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Recensies() {
  const items = [
    {
      q: "Als onze Kappa kon lachen, dan deed ze dat iedere keer als Krijn haar op komt halen. Het is fijn om te weten dat zij een heerlijke middag heeft als wij aan het werk zijn.",
      a: "Moniek Zuidema",
    },
    {
      q: "Vanaf het begin gaat Charley al met Krijn mee — wil niets liever meer, en ik ook niet!",
      a: "Corry",
    },
    {
      q: "Mijn Labrador weet precies wanneer Krijn komt en kwispelt bijna z'n staart eraf van spanning om weer mee te mogen.",
      a: "Jeroen",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <p className="text-sm uppercase tracking-[0.2em] text-primary-glow">Recensies</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
        Wat baasjes <span className="text-gradient">vertellen.</span>
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((r) => (
          <figure key={r.a} className="glass relative rounded-3xl p-8">
            <PawPrint className="absolute right-6 top-6 h-6 w-6 text-primary/50" />
            <blockquote className="text-lg leading-relaxed">"{r.q}"</blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              — {r.a}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="glass overflow-hidden rounded-[2rem] p-10 md:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-glow">Contact</p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
                Klaar om mee te <span className="text-gradient">rennen?</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Bel of mail voor een vrijblijvende kennismaking. Meewandelen kan altijd na
                aanmelding.
              </p>

              <div className="mt-8 space-y-3">
                <ContactLink
                  icon={Phone}
                  label="06 — 204 92 855"
                  href="tel:+31620492855"
                />
                <ContactLink
                  icon={Mail}
                  label="info@huswoeffies.nl"
                  href="mailto:info@huswoeffies.nl"
                />
                <ContactLink
                  icon={Instagram}
                  label="hondenuitlaatservicewoeffies"
                  href="https://instagram.com/hondenuitlaatservicewoeffies"
                />
              </div>
            </div>

            <a
              href="tel:+31620492855"
              className="group relative block overflow-hidden rounded-3xl"
            >
              <img
                src={pack2}
                alt="Roedel honden tijdens een wandeling"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/80 px-5 py-4 backdrop-blur-xl">
                <span className="font-medium">Plan een kennismaking</span>
                <ArrowRight className="h-5 w-5 text-primary-glow transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-black/[0.03] px-5 py-4 transition hover:border-primary/40 hover:bg-black/[0.05]"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-purple)] text-primary-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <span className="font-medium">{label}</span>
      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">
        <Logo />
        <div className="flex items-center gap-6">
          <a href="#afspraken" className="transition hover:text-foreground">Afspraken</a>
          <span className="hidden text-black/10 sm:inline">|</span>
          <p>KVK 69612323 · BTW NL001618259B98</p>
          <span className="hidden text-black/10 sm:inline">|</span>
          <p>© {new Date().getFullYear()} Hus Woeffies — Rotterdam</p>
        </div>
      </div>
    </footer>
  );
}
