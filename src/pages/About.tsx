import SEO from '../components/SEO.tsx';
import Reveal from '../components/Reveal.tsx';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aiman Rizq',
  jobTitle: 'META Ads Strategist',
  url: 'https://facebookads.my/about',
  description: 'Certified META advertising specialist helping Malaysian SMBs grow through Facebook and Instagram ads.',
};

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Meet Aiman Rizq — a META ads strategist helping Malaysian small businesses grow through profitable Facebook and Instagram advertising."
        canonical="/about"
        schema={personSchema}
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">About</h1>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              AR
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Aiman Rizq</h2>
              <p className="text-primary font-medium text-sm">META Ads Strategist</p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I've spent the last 5+ years helping Malaysian SMBs turn META advertising into a
                  reliable growth channel. From kedai makan in Penang to e-commerce brands in KL,
                  I've managed campaigns across every major industry in the Malaysian market.
                </p>
                <p>
                  I started FacebookAds.my because I kept seeing the same mistakes — businesses
                  burning money on boosted posts, targeting too broadly, and having no idea how to
                  measure results. This site is my way of sharing what actually works.
                </p>
                <p>
                  Everything here is based on real campaign experience in the Malaysian market.
                  No generic advice copied from US-based blogs. The benchmarks, strategies, and
                  creative tips are all tailored for our local audience.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {[
            { value: '5+', label: 'Years in META ads' },
            { value: '200+', label: 'Campaigns managed' },
            { value: 'RM2M+', label: 'Ad spend managed' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="p-[1px] rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 hover:from-primary hover:to-secondary transition-all duration-500">
              <div className="bg-white/80 backdrop-blur-md rounded-[11px] p-5 text-center">
                <div className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-12 bg-white/60 backdrop-blur-md border border-primary/20 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900">My Approach</h2>
            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">01</span>
                <span><strong>Data first.</strong> Every recommendation is backed by real campaign data from the Malaysian market.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">02</span>
                <span><strong>No fluff.</strong> Skip the theory — I share step-by-step processes you can implement today.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">03</span>
                <span><strong>Local context.</strong> Malaysian consumer behavior is unique. Generic global advice doesn't cut it here.</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
