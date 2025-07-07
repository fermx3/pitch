'use client';

const HamburguerIcon = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isOpen ? "bg-gray-700" : "bg-gray-800"
      }`}
      aria-label="Toggle menu"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
}

export default HamburguerIcon;
