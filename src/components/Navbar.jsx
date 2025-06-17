import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-500 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Nome */}
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
              🔥
            </div>
            <span className="text-white text-lg font-bold drop-shadow">Igreja do Avivamento</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:underline">Início</a>
            <a href="#" className="text-white hover:underline">Ministérios</a>
            <a href="#" className="text-white hover:underline">Agenda</a>
            <a href="#" className="text-white hover:underline">Contato</a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 pb-4">
          <a href="#" className="block text-white py-2">Início</a>
          <a href="#" className="block text-white py-2">Ministérios</a>
          <a href="#" className="block text-white py-2">Agenda</a>
          <a href="#" className="block text-white py-2">Contato</a>
        </div>
      )}
    </nav>
  );
}
