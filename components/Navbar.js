export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white border-b border-gray-800">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        <span className="text-blue-600">DEL</span>-LABS
      </h1>

      {/* Navigation */}
      <div className="flex gap-8 text-black-300">
        <a href="#home" className="hover:text-white">Home</a>
        <a href="#systems" className="hover:text-white">Solutions</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>

      {/* CTA */}
      <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
        Get a System
      </button>

    </nav>
  );
}