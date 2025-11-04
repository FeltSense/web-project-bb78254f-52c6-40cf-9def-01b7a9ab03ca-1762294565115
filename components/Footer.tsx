'use client';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300"><li><a href="#" className="hover:text-white">About</a></li></ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300"><li><a href="#" className="hover:text-white">Pricing</a></li></ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-gray-300">info@example.com</p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Aflojale a la Toti by Leo Lombardo. All rights reserved.</p>
      </div>
    </footer>
  );
}