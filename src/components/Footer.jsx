
import Link from "next/link";

import { Mail, Phone, MapPin, CarFront } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
           <Link
  href="/"
  className="flex items-center gap-2 text-2xl font-extrabold"
>
  <CarFront className="h-8 w-8 text-blue-600" />

  <span>
    <span className="text-blue-900">Drive</span>
    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
      Fleet
    </span>
  </span>
</Link>
    

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Rent your favorite car easily and enjoy a comfortable,
              safe and affordable journey with us.
            </p>

         
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-600"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-pink-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-sky-500"
              >
                <FaTwitter size={18} />
              </a>

            </div>
          </div>

  
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Useful Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-blue-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/cars"
                  className="transition hover:text-blue-500"
                >
                  Our Cars
                </Link>
              </li>

              <li>
                <Link
                  href="/add-car"
                  className="transition hover:text-blue-500"
                >
                  Add car
                </Link>
              </li>

              

            </ul>
          </div>

        
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>Car Rental</li>
              <li>Airport Transfer</li>
              <li>Long Term Rental</li>
              <li>Corporate Rental</li>

            </ul>
          </div>

     
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

             
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <span>
                  Sylhet, Bangladesh
                </span>
              </div>

          
              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="shrink-0 text-blue-500"
                />

                <span>
                  +880 1700-000000
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="shrink-0 text-blue-500"
                />

                <span>
                  info@carrent.com
                </span>
              </div>

            </div>
          </div>

        </div>


        <div className="mt-10 border-t border-gray-800 pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

            <p>
              © 2026 CarRent. All rights reserved.
            </p>

            <div className="flex gap-5">

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

