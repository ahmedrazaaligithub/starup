import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const Navbar = () => {
  return (
    <header className="bg-background shadow-sm">
      <div className="my-container flex flex-wrap flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-bold items-center text-theme-dark md:mb-0"
        >
          <img
            src="/logo/text-logo.png"
            alt="logo"
            className="w-30 object-contain"
          />
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-6 font-medium">
          <Link
            href="/"
            className="hover:text-theme-light text-theme-dark transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-theme-light text-theme-dark transition"
          >
            Categories
          </Link>
          <Link
            href="/talent"
            className="hover:text-theme-light text-theme-dark transition"
          >
            Talent
          </Link>
          <Link
            href="/contact"
            className="hover:text-theme-light text-theme-dark transition"
          >
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <Button>Spotlights</Button>
      </div>
    </header>
  );
};

export default Navbar;
