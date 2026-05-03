'use client';
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
   const pathname = usePathname();
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
      <p className="font-extrabold text-xl">pixgen</p>
    </div>
    <ul className="flex items-center gap-4">
      <li><Link href="/"  className={`no-underline ${pathname === "/" ? "font-bold text-blue-500" : ""}`} >Home</Link></li>
      <li><Link href="/photos" className={`no-underline ${pathname === "/photos" ? "font-bold text-blue-500" : ""}`} >All Photos</Link></li>
      <li><Link href="/profile" className={`no-underline ${pathname === "/profile" ? "font-bold text-blue-500" : ""}`} >Profile</Link></li>
    </ul>
    <div className="flex gap-9">
          <div className="flex items-center  text-sm">
            <li className="list-none">
              <Link href={"/signup"} className="no-underline"><Button   variant={pathname === "/signup" ? "primary" : "secondary"} >SignUp</Button></Link>
            </li>
            <li className="list-none">
              <Link href={"/signin"} className="no-underline"><Button   variant={pathname === "/signin" ? "primary" : "secondary"} >SignIn</Button></Link>
            </li>
          </div>
        </div>
  </header>
</nav>
   

        </div>
    );
};

export default Navbar;
