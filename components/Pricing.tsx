'use client';
export default function Pricing() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Standard</h3>
          <p className="text-3xl font-bold mb-6">$99/mo</p>
          <button className="w-full py-2 border border-gray-300 rounded hover:bg-gray-50">Choose Plan</button>
        </div>
        <div className="border-2 border-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Premium</h3>
          <p className="text-3xl font-bold mb-6">$299/mo</p>
          <button className="w-full py-2 bg-gray-900 text-white rounded hover:bg-gray-800">Choose Plan</button>
        </div>
      </div>
    </section>
  );
}