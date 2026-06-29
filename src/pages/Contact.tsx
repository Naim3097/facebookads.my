import SEO from '../components/SEO.tsx';
import LeadForm from '../components/LeadForm.tsx';
import Reveal from '../components/Reveal.tsx';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with FacebookAds.my. Have a question about running META ads for your Malaysian business? We'd love to hear from you."
        canonical="/contact"
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Contact</h1>
          <p className="text-gray-500 mt-2">
            Have a question about Facebook or Instagram ads? Want to suggest a topic? Drop us a message.
          </p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-5 gap-10">
          <Reveal delay={100} className="md:col-span-3">
            <LeadForm source="FacebookAds.my — Contact page" />
          </Reveal>
          <div className="md:col-span-2 space-y-6">
            <Reveal delay={150}>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 text-sm">Email</h3>
                <a href="mailto:hello@facebookads.my" className="text-primary text-sm hover:underline">
                  hello@facebookads.my
                </a>
              </div>
            </Reveal>
            <Reveal delay={230}>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 text-sm">Response Time</h3>
                <p className="text-sm text-gray-500">Usually within 1–2 business days</p>
              </div>
            </Reveal>
            <Reveal delay={310}>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 text-sm">Based in</h3>
                <p className="text-sm text-gray-500">Kuala Lumpur, Malaysia</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
