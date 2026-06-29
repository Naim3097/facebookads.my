import SEO from '../components/SEO.tsx';
import Reveal from '../components/Reveal.tsx';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How FacebookAds.my collects, uses, and protects your personal data under Malaysia's Personal Data Protection Act 2010 (PDPA)."
        canonical="/privacy"
      />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 mt-2 text-sm">Last updated: 29 June 2026</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 space-y-6 text-sm text-gray-600 leading-relaxed">
            <p>
              FacebookAds.my respects your privacy and handles personal data in line with
              Malaysia's <strong className="text-gray-900">Personal Data Protection Act 2010 (PDPA)</strong>.
              This page explains what we collect when you request a free audit and how we use it.
            </p>

            <div>
              <h2 className="text-base font-bold text-gray-900">What we collect</h2>
              <p className="mt-2">
                When you submit the free-audit form we collect your <strong>name, phone/WhatsApp
                number, email address, the link you share</strong> (website or social profile),
                the service you requested, and any message you add.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900">How we use it</h2>
              <ul className="mt-2 space-y-1.5 list-disc pl-5">
                <li>To prepare and deliver your requested free audit and creatives.</li>
                <li>To contact you about your request by email, phone, or WhatsApp.</li>
                <li>To improve our services and, where relevant, share offers you may find useful.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900">What we don't do</h2>
              <p className="mt-2">
                We do <strong>not sell or rent</strong> your personal data to third parties. Form
                submissions are delivered to us through a form-processing service purely to reach
                our inbox.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900">Your rights</h2>
              <p className="mt-2">
                You may request access to, correction of, or deletion of your personal data, or
                withdraw consent to be contacted, at any time. Email us at{' '}
                <a href="mailto:hello@facebookads.my" className="text-primary hover:underline">hello@facebookads.my</a>{' '}
                and we will act on your request.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900">Analytics & advertising</h2>
              <p className="mt-2">
                We may use cookies and pixels (such as Google Analytics and the Meta Pixel) to
                understand how visitors use this site and to measure ad performance. You can disable
                cookies in your browser settings.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
