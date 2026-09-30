
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User, CarFront } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Avatar } from "@heroui/react";

const Navbar = () => {


  const handleSignOut = async()=>{
    await authClient.signOut()
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  


  const {data: session} = authClient.useSession()
  const user = session?.user
  console.log(user)


  return (
    <nav className="border-b bg-gray-100 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        


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

     
          <Link
            href="/add-car"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Add Car
          </Link>

  
          <Link
            href="/my-bookings"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            My Bookings
          </Link>


          {user ? (
           
            <div className="relative group">

              <button className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-100">

          
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                   <Avatar>
        <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
      </Avatar>
                </div>

                <span className="font-medium text-gray-700">
                 {user.name}
                </span>

                <ChevronDown size={16} />
              </button>

              <div className="invisible absolute right-0 top-12 z-50 w-48 rounded-lg border bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

                    <Link
                  href="/add-car"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Add Car
                </Link>

             
                <Link
                  href="/my-bookings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Bookings
                </Link>

                <Link
                  href="/my-added-cars"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Added Cars
                </Link>

                <hr className="my-2" />

                <button  onClick={handleSignOut}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                  
                  
                >
                  Logout
                </button>

              </div>
            </div>

          ) : (
          
            <Link
              href="/auth/login"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
            >
              Login
            </Link>
          )}

        </div>

      
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>


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

            
            {user ? (
              <div className="border-t pt-4">

                <div className="mb-3 flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                             <Avatar>
        <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
      </Avatar>
                  </div>

                  <span className="font-medium">
                    {user.name}
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

                  <button  onClick={handleSignOut}
                    className="text-left text-sm text-red-600"
                    

                  >
                    Logout
                  </button>

                </div>

              </div>

            ) : (
              <Link
                href="/auth/login"
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

