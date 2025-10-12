import FooterUI from "./components/layout/FooterUI";
import NavbarUI from "./components/layout/NavbarUI";

export default function WebsiteLayout({ children }) {
  return (
    <div className="bg-gray-50">
      <NavbarUI></NavbarUI>
      <main className="min-h-screen">{children}</main>
      <FooterUI />
    </div>
  );
}

