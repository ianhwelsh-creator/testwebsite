export default function FAQ() {
  const faqs = [
    { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and Apple Pay.' },
    { q: 'How long does shipping take?', a: 'Standard delivery takes 5-7 business days, express delivery takes 2-3 business days.' },
    { q: 'Can I return an item?', a: 'Yes, we accept returns within 30 days of delivery for unworn items with tags attached.' },
    { q: 'Do you ship internationally?', a: 'We currently ship to the United States, Canada, and the United Kingdom.' },
  ];

  return (
    <div className="container-luxury py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif mb-12">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-medium mb-3">{faq.q}</h2>
              <p className="text-luxury-charcoal leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
