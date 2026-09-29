import { auth } from "@/lib/auth";
import { MapPin } from "@gravity-ui/icons";
import { headers } from "next/headers";
import Image from "next/image";
import { BiCalendar, BiCar } from "react-icons/bi";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `http://localhost:5000/booking/${user.id}`
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

  <div className="space-y-5">
    {bookings.map((booking) => (
      <div
        key={booking._id}
        className="flex flex-col sm:flex-row gap-5 border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition bg-white"
      >
        
        <div className="w-full sm:w-52 h-48 sm:h-40 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={booking.imageUrl}
            alt={booking.carName}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              {booking.carName}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <p className="flex gap-1 items-center">
                <BiCalendar></BiCalendar> <span className="font-medium">Booking Date:</span>{" "}
                {booking.date}
              </p>
                      
             
            </div>

            <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 gap-2 text-sm text-gray-600 ">
                 <p className="flex gap-1 items-center">
                <MapPin></MapPin> <span className="font-medium">Pickup:</span>{" "}
                {booking.pickupLocation}
              </p>
            </div>

          </div>

         
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ">
            <p className="text-lg font-bold text-blue-600">
              Price: ${booking.price}
            </p>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default MyBookingsPage;