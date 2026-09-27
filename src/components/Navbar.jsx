
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TODO: Later, get this value from your authentication system
  // const { user, logout } = useAuth();

  // For now, use false to show Login button
  // Change to true to see the logged-in profile dropdown
  const isLoggedIn = false;

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Car<span className="text-blue-600">Rent</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/cars"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Explore Cars
          </Link>

          {/* Add Car */}
          <Link
            href="/add-car"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Add Car
          </Link>

          {/* My Bookings */}
          <Link
            href="/my-bookings"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            My Bookings
          </Link>

          {/* ============================= */}
          {/* Authentication Section */}
          {/* ============================= */}

          {isLoggedIn ? (
            /* Logged In */
            <div className="relative group">

              <button className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-100">

                {/* User Image */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <User size={18} />
                </div>

                <span className="font-medium text-gray-700">
                  User
                </span>

                <ChevronDown size={16} />
              </button>

              {/* Dropdown */}
              <div className="invisible absolute right-0 top-12 z-50 w-48 rounded-lg border bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

                {/* Add Car */}
                <Link
                  href="/add-car"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Add Car
                </Link>

                {/* My Bookings */}
                <Link
                  href="/my-bookings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Bookings
                </Link>

                {/* My Added Cars */}
                <Link
                  href="/my-added-cars"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Added Cars
                </Link>

                <hr className="my-2" />

                {/* Logout */}
                <button
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                  
                  // onClick={logout}
                >
                  Logout
                </button>

              </div>
            </div>

          ) : (
            /* ============================= */
            /* Not Logged In */
            /* ============================= */

            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* ============================= */}
      {/* Mobile Menu */}
      {/* ============================= */}

      {isMenuOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/cars"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Add Car
            </Link>

            <Link
              href="/my-bookings"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              My Bookings
            </Link>

            {/* ============================= */}
            {/* Mobile Authentication */}
            {/* ============================= */}

            {isLoggedIn ? (
              <div className="border-t pt-4">

                <div className="mb-3 flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <User size={18} />
                  </div>

                  <span className="font-medium">
                    User
                  </span>

                </div>

                <div className="flex flex-col gap-3 pl-3">

                  <Link
                    href="/add-car"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    Add Car
                  </Link>

                  <Link
                    href="/my-bookings"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    My Bookings
                  </Link>

                  <Link
                    href="/my-added-cars"
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    My Added Cars
                  </Link>

                  <button
                    className="text-left text-sm text-red-600"
                    
                    // onClick={logout}
                  >
                    Logout
                  </button>

                </div>

              </div>

            ) : (
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700"
              >
                Login
              </Link>
            )}

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;

