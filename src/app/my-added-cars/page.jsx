import { DeleteCar } from "@/components/DeleteCar";
import { UpdateCarPage } from "@/components/UpdateCar";
import { auth } from "@/lib/auth";
import { MapPin } from "@gravity-ui/icons";

import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyAddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Please login to see your added cars.
        </h2>
      </div>
    );
  }


  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  console.log(token)

  const res = await fetch(
    `http://localhost:5000/my-cars/${user.id}`, {
      headers :{
        authorization : `Bearer ${token}`
      }
    }
    
  );

  const cars = await res.json();

  console.log(cars);

  return (
    <div className="max-w-7xl mx-auto p-5">
  <h1 className="text-3xl font-bold mb-8">
    My Added Cars
  </h1>

  {cars.length === 0 ? (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <span className="text-3xl">🚗</span>
      </div>

      <h2 className="text-xl font-bold text-gray-800">
        No Cars Added
      </h2>

      <p className="mt-2 max-w-md text-sm text-gray-500">
        You haven't added any cars yet. Add your first car and make it
        available for users to rent.
      </p>

      <Link
        href="/add-car"
        className="mt-5 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Add Your Car
      </Link>
    </div>
  ) : (
    <div className="space-y-5">
      {cars.map((car) => (
        <div
          key={car._id}
          className="flex flex-col gap-5 rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:p-5 md:w-3xl"
        >
          <div className="h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-52">
            <Image
              src={car.imageUrl}
              alt={car.name}
              width={300}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h2 className="mb-3 text-xl font-bold md:text-2xl">
                {car.name}
              </h2>

              <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
                <p>
                  <span className="font-medium">Type:</span>{" "}
                  {car.type}
                </p>

                <p>
                  <span className="font-medium">Seats:</span>{" "}
                  {car.seat}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
                <p className="flex items-center gap-1">
                  <MapPin />
                  <span className="font-medium">Pickup:</span>{" "}
                  {car.pickupLocation}
                </p>

                <p>
                  <span className="font-medium">Status:</span>{" "}
                  {car.availability}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-bold text-blue-600">
                Price: ${car.price}/day
              </p>
            </div>

            <div className="mt-5 flex justify-end gap-5">
              <UpdateCarPage car={car} />
              <DeleteCar car={car} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  );
};

export default MyAddedCarsPage;