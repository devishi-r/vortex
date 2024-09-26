import Link from "next/link";
import { ThemeToggle } from '@/components/components-theme-toggle';
import {Heart} from "lucide-react"

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 right-0 z-10 bg-white shadow-md dark:bg-gray-800">
      <Link className="flex items-center justify-center" href="#">
        <span className="ml-2 text-2xl font-bold">FoodShare </span>
        <Heart className="h-6 w-6 text-red-500" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <ThemeToggle />
        <Link className="flex items-center text-sm font-medium hover:underline underline-offset-4" href="#about">
          About
        </Link>
        <Link className="flex items-center text-sm font-medium hover:underline underline-offset-4" href="#educational-resources">
          Resources
        </Link>
        <Link className="flex items-center text-sm font-medium hover:underline underline-offset-4" href="#meet-our-team">
          Contact
        </Link>
        <Link className="flex items-center text-sm font-medium hover:underline underline-offset-4" href="../user-auth?tab=login">
          Login
        </Link>
      </nav>
    </header>
  );
}