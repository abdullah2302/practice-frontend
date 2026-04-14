export default function HeroSection() {
  return (
    <section className="relative bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-8">Discover amazing content and connect with us.</p>
        <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">Get Started</a>
      </div>
    </section>
  );
}