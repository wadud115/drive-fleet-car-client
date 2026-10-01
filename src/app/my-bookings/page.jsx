import { auth } from "@/lib/auth";
import { MapPin } from "@gravity-ui/icons";

import { headers } from "next/headers";

import Image from "next/image";
import Link from "next/link";
import { BiCalendar, BiCar } from "react-icons/bi";

const MyBookingsPage = async () => {

  const {token} = await auth.api.getToken({
    headers : await headers()
  })

  console.log(token)
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}` , {
      headers:{
        authorization : `Bearer ${token}`
      }
    }
  );

  const bookings = await res.json();

  console.log(bookings);

  return (
  <div className="max-w-6xl mx-auto px-4 py-8">
  <h1 className="text-2xl md:text-3xl font-bold mb-2">
    My Bookings
  </h1>

  <p className="text-gray-500 mb-6">
    Manage and view your booked cars.
  </p>

  {bookings.length === 0 ? (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <span className="text-3xl">🚗</span>
      </div>

      <h2 className="text-xl font-bold text-gray-800">
        No Bookings Found
      </h2>

      <p className="mt-2 max-w-md text-sm text-gray-500">
        You havent booked any car yet. Explore our available cars and make
        your first booking.
      </p>

      <Link
        href="/cars"
        className="mt-5 rounded-lg bg-blue-500 rounded-2xl p-2 text-white font-semibold"
      >
        Explore Cars
      </Link>
    </div>
  ) : (
    <div className="space-y-5">
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="flex flex-col gap-5 rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:p-5"
        >
          <div className="h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-52">
            <Image
              src={booking.imageUrl}
              alt={booking.carName}
              width={300}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h2 className="mb-3 text-xl font-bold md:text-2xl">
                {booking.carName}
              </h2>

              <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
                <p className="flex items-center gap-1">
                  <BiCalendar />
                  <span className="font-medium">Booking Date:</span>
                  {booking.date}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
                <p className="flex items-center gap-1">
                  <MapPin />
                  <span className="font-medium">Pickup:</span>
                  {booking.pickupLocation}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-bold text-blue-600">
                Price: ${booking.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  );
};

export default MyBookingsPage;