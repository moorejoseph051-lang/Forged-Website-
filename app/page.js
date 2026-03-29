export default function Home() {
  const products = [
    "Lifting Straps",
    "Wrist Wraps",
    "Resistance Bands",
    "Training Accessories",
  ];

  const features = [
    {
      title: "Built for Heavy Training",
      text: "Serious gym gear made for lifters who want durability, grip, and performance under pressure.",
    },
    {
      title: "Aggressive Brand Identity",
      text: "Dark visuals, sharp typography, and an edgy look that feels stronger than generic fitness brands.",
    },
    {
      title: "Made to Stand Out",
      text: "A premium layout designed to make your gear feel elite from the first scroll.",
    },
  ];

  // 🔗 REPLACE THIS WITH YOUR REAL PRODUCT LINK LATER
  const amazonLink = "https://www.amazon.com/";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <header className="flex items-center justify-between">
            <div className="text-2xl font-black uppercase tracking-[0.25em]">
              FORGED.
            </div>

            <nav className="hidden md:flex gap-6 text-sm uppercase tracking-[0.15em] text-zinc-300">
              <a href="#gear" className="hover:text-white transition">
                Gear
              </a>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </nav>

            <a
              href="#gear"
              className="rounded-2xl border border-red-500/40 bg-red-600/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] transition hover:bg-red-600/20"
            >
              Shop
            </a>
          </header>

          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-red-500/30 bg-red-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                Built. Not given.
              </div>

              <h1 className="max-w-3xl text-5xl md:text-7xl font-black uppercase leading-[0.95]">
                Forged in pressure.
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg leading-7 text-zinc-300">
                Premium gym gear for lifters who don’t train soft. Built through
                discipline, pressure, and consistency.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#gear"
                  className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-black uppercase tracking-[0.15em] transition hover:bg-red-500"
                >
                  View Gear
                </a>

                <a
                  href="#about"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.15em] transition hover:bg-white/10"
                >
                  Our Brand
                </a>
              </div>
            </div>

            {/* PRODUCT CARD */}
            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-4 shadow-2xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">
                  <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,0,0,0.08))] p-6 flex flex-col justify-between">
                    <div>
                      <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-zinc-300">
                        Featured Drop
                      </div>

                      <h2 className="text-3xl font-black uppercase">
                        Elite Lifting Straps
                      </h2>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                        Heavy-duty grip support for pulls, rows, and max-effort
                        days. Designed to look brutal and perform even better.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm uppercase tracking-[0.15em] text-zinc-400">
                          Starting at
                        </div>
                        <div className="text-3xl font-black">$24.99</div>
                      </div>

                      <a
                        href={amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.15em] text-black hover:opacity-90 transition"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section id="gear" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Core lineup
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-black uppercase">
            Gear made for performance, not excuses.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-lg transition hover:-translate-y-1 hover:border-red-500/40"
            >
              <div className="mb-4 h-32 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-black" />

              <h3 className="text-xl font-black uppercase">{product}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Premium training gear with a harder visual edge and a stronger
                brand presence.
              </p>

              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-white/10"
              >
                View Product
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-red-600/20 ring-1 ring-red-500/30" />

                <h3 className="text-xl font-black uppercase">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              About the brand
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-black uppercase">
              Strength is forged.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-300">
            <p>
              FORGED. is built around one idea: gym gear should look as serious
              as the people using it. No soft branding. No weak design. Just
              premium accessories with a harder edge.
            </p>

            <p>
              This site is designed to make your brand feel intense, modern, and
              memorable from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-16 md:pb-24"
      >
        <div className="rounded-[2rem] border border-red-500/20 bg-[linear-gradient(135deg,rgba(255,0,0,0.12),rgba(255,255,255,0.02))] p-8 md:p-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
            Brand statement
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-black uppercase">
            Forged under pressure.
          </h2>

          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-red-600 px-8 py-3 text-sm font-black uppercase tracking-[0.15em] transition hover:bg-red-500"
          >
            Shop the Drop
          </a>
        </div>
      </section>
    </div>
  );
}
