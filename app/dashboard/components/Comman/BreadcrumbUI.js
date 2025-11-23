import Link from "next/link";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const BreadcrumbUI = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-gray-600 justify-end">
      {/* Home */}
      <Link href="/dashboard" className="flex items-center gap-1 hover:text-gray-800">
        <HomeIcon className="w-4 h-4" />
        Dashboard
      </Link>


      {/* Items */}
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />

          {index === items.length - 1 ? (
            <span className="font-medium text-gray-900">{item}</span>
          ) : (
            <Link href="/" className="hover:text-gray-800">{item}</Link>
          )}
        </div>
      ))}
    </nav>
  );
};
