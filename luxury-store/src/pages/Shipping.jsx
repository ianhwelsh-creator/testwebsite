export default function Shipping() {
  return (
    <div className="container-luxury py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif mb-8">Shipping & Returns</h1>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif mb-4">Shipping</h2>
            <p className="text-luxury-charcoal leading-relaxed mb-4">We offer two shipping options:</p>
            <ul className="list-disc list-inside space-y-2 text-luxury-charcoal">
              <li>Standard Delivery (5-7 business days) - $25</li>
              <li>Express Delivery (2-3 business days) - $45</li>
              <li>Free shipping on orders over $500</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-4">Returns</h2>
            <p className="text-luxury-charcoal leading-relaxed">
              We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with all tags attached.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
