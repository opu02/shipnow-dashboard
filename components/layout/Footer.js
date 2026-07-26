export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 flex-shrink-0">
      {/* Left - Copyright */}
      <p className="text-xs text-gray-500">
        Copyright © 2025 Peterdraw
      </p>

      {/* Center - Links */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          Term and conditions
        </a>
        <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          Contact
        </a>
      </div>

      {/* Right - Social Icons (SVG) */}
      <div className="flex items-center gap-3">
        {/* Facebook */}
        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </a>
        {/* Twitter/X */}
        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        {/* Youtube */}
        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}