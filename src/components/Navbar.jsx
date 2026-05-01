import { Link, Button } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
      <p className="font-extrabold text-xl">pixgen</p>
    </div>
    <ul className="flex items-center gap-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/photos">All Photos</Link></li>
      <li><Link href="/profile">Profile</Link></li>
    </ul>
  </header>
</nav>

        </div>
    );
};

export default Navbar;
