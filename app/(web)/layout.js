export default function WebsiteLayout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-blue-600 text-white p-4">
         Website Navbar
      </div>

      {/* Content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer */}
      <div className="bg-gray-800 text-white p-4 text-center">
         2025 My Website
      </div>
    </div>
  );
}

