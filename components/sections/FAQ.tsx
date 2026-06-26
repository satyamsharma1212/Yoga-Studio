import JsonLd from "@/components/seo/JsonLd";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export default function FAQSection({
  faqs,
}: FAQSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section
        className="py-24 bg-gray-50"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-5xl mx-auto px-6">

          <h2
            id="faq-heading"
            className="text-4xl font-bold text-center text-gray-900"
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-center text-lg text-gray-600">
            Everything you need to know about our yoga classes.
          </p>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-green-700">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}