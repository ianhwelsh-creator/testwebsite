export default function Styleguide() {
  return (
    <div className="container-luxury py-12">
      <h1 className="text-4xl font-serif mb-12">Style Guide</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-serif mb-8">Typography</h2>
        <h1 className="mb-4">Heading 1</h1>
        <h2 className="mb-4">Heading 2</h2>
        <h3 className="mb-4">Heading 3</h3>
        <p className="mb-4">Body text with regular weight and comfortable line height for reading long-form content.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-serif mb-8">Buttons</h2>
        <div className="flex gap-4">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
          <button className="btn-text">Text Button</button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-serif mb-8">Colors</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="aspect-square bg-luxury-black"></div>
          <div className="aspect-square bg-luxury-charcoal"></div>
          <div className="aspect-square bg-luxury-gray-dark"></div>
          <div className="aspect-square bg-luxury-gray-light"></div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-serif mb-8">Forms</h2>
        <input type="text" placeholder="Text Input" className="input mb-4" />
        <input type="email" placeholder="Email Input" className="input mb-4" />
        <textarea placeholder="Textarea" className="input mb-4" rows="4"></textarea>
      </section>
    </div>
  );
}
