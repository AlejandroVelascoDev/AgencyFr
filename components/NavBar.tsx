

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between 
                    bg-white px-6 py-4 mt-16">
      {/* Botón izquierdo */}
      <button className="bg-white text-black font-semibold px-6 py-6 rounded-2xl 
                          transition-transform duration-200">
        HOME
      </button>

      {/* Botón derecho (con QR simulado) */}
      <div className="bg-white p-3 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
        <img
          src="/qr-code.png" // 👈 coloca aquí tu QR real
          alt="QR Code"
          className="w-16 h-16"
        />
      </div>
    </div>
  );
}