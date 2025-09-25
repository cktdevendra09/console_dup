export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        📊 Sidebar Menu
      </aside>

      {/* Main Section */}
      <div className="flex-1">
        <header className="bg-gray-200 p-4">👤 Dashboard Header</header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
