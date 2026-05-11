import SEO from '../components/SEO.tsx';
import Reveal from '../components/Reveal.tsx';

const RESOURCES = [
  {
    title: 'Facebook Ads Campaign Checklist',
    desc: 'A step-by-step checklist to launch your first (or next) Facebook ad campaign. Covers everything from pixel setup to audience targeting.',
    format: 'PDF Checklist',
  },
  {
    title: 'Malaysian Industry Benchmarks 2026',
    desc: 'Average CPC, CPM, CTR, and ROAS benchmarks across key Malaysian industries including F&B, e-commerce, education, and real estate.',
    format: 'PDF Report',
  },
  {
    title: 'Ad Creative Templates',
    desc: '10 high-converting Facebook and Instagram ad layouts you can customize in Canva. Includes carousel, single image, and Story formats.',
    format: 'Canva Templates',
  },
  {
    title: 'Audience Targeting Playbook',
    desc: 'Pre-built audience targeting configurations for 8 common Malaysian business types. Copy these settings into your Ads Manager.',
    format: 'PDF Guide',
  },
  {
    title: 'Instagram Reels Ads Swipe File',
    desc: '15 proven Reels ad hooks and scripts that work for Malaysian brands. Includes timing notes and CTA suggestions.',
    format: 'PDF + Examples',
  },
  {
    title: 'Retargeting Funnel Blueprint',
    desc: 'A complete retargeting funnel setup guide with audience segments, ad copy templates, and budget allocation for each stage.',
    format: 'PDF Blueprint',
  },
];

export default function Resources() {
  return (
    <>
      <SEO
        title="Free Resources"
        description="Download free Facebook Ads checklists, templates, benchmarks, and guides for Malaysian businesses. No signup required."
        canonical="/resources"
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Free Resources</h1>
          <p className="text-gray-500 mt-2 max-w-lg">
            Download checklists, templates, and reports to level up your META advertising. All free, no signup needed.
          </p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 100}>
              <div className="p-[1px] rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 hover:from-primary hover:to-secondary transition-all duration-500 hover:shadow-lg h-full">
              <div className="bg-white/80 backdrop-blur-md rounded-[11px] p-6 hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="font-semibold text-gray-900 mt-4 text-lg tracking-tight">{resource.title}</h2>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed flex-1">{resource.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {resource.format}
                </span>
                <span className="text-xs text-gray-400">Coming soon</span>
              </div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 bg-white/60 backdrop-blur-md border border-primary/20 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">Want to be notified when new resources drop?</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Follow us or check back regularly — we add new free resources every month.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
