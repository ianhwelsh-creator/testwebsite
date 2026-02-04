export default function Help() {
  return (
    <div className="container-luxury py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif mb-12 text-center">Need Help?</h1>

        <div className="bg-luxury-cream p-12 text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-luxury-gray-light">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Ian Welsh"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-serif mb-2">Ian Welsh</h2>
            <p className="text-lg text-luxury-gray-dark mb-6">Associate at Carlyle</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-luxury-charcoal leading-relaxed mb-8">
              I'm here to assist you with any questions about our products, orders, or services.
              Whether you need styling advice, size recommendations, or help with your purchase,
              I'm happy to help.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-5 h-5 text-luxury-gray-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:ian.welsh@carlyle.com" className="text-lg hover:opacity-70">
                  ian.welsh@carlyle.com
                </a>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <svg className="w-5 h-5 text-luxury-gray-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+12125551234" className="text-lg hover:opacity-70">
                  +1 (212) 555-1234
                </a>
              </div>
            </div>

            <div className="border-t border-luxury-gray-light pt-8">
              <h3 className="text-xl font-serif mb-4">Business Hours</h3>
              <p className="text-luxury-charcoal mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p className="text-luxury-charcoal mb-2">Saturday: 10:00 AM - 4:00 PM EST</p>
              <p className="text-luxury-charcoal">Sunday: Closed</p>
            </div>

            <div className="mt-8">
              <p className="text-sm text-luxury-gray-dark">
                Response time: Within 24 hours during business days
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-luxury-cream flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">FAQs</h3>
            <p className="text-sm text-luxury-gray-dark mb-4">Find quick answers to common questions</p>
            <a href="/faq" className="text-sm uppercase tracking-wider hover:opacity-70">View FAQs →</a>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-luxury-cream flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Order Support</h3>
            <p className="text-sm text-luxury-gray-dark mb-4">Track orders and manage returns</p>
            <a href="/shipping" className="text-sm uppercase tracking-wider hover:opacity-70">Shipping Info →</a>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-luxury-cream flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Contact Form</h3>
            <p className="text-sm text-luxury-gray-dark mb-4">Send us a detailed message</p>
            <a href="/contact" className="text-sm uppercase tracking-wider hover:opacity-70">Contact Us →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
