import { DeleteCar } from "@/components/DeleteCar";
import { UpdateCarPage } from "@/components/UpdateCar";
import { auth } from "@/lib/auth";
import { MapPin } from "@gravity-ui/icons";
import { headers } from "next/headers";
import Image from "next/image";

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

  const res = await fetch(
    `http://localhost:5000/my-cars/${user.id}`,
    {
      cache: "no-store",
    }
  );

  const cars = await res.json();

  console.log(cars);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">
        My Added Cars
      </h1>

     <div className="space-y-5">
  {cars.map((car) => (
    <div
      key={car._id}
      className="flex md:w-3xl  flex-col sm:flex-row gap-5 border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition bg-white"
    >
      <div className="w-full  sm:w-52 h-48 sm:h-40 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={car.imageUrl}
          alt={car.name}
          width={300}
          height={200}
          className="w-full h-full object-cover object-fill"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            {car.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
            <p>
              <span className="font-medium">Type:</span>{" "}
              {car.type}
            </p>

            <p>
             <span className="font-medium">Seats:</span>{" "}
              {car.seat}
            </p>
          </div>

          <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 gap-2 text-sm text-gray-600">
            <p className="flex gap-1 items-center">
             <MapPin></MapPin><span className="font-medium">Pickup:</span>{" "}
              {car.pickupLocation}
            </p>

            <p>
               <span className="font-medium">Status:</span>{" "}
              {car.availability}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
          <p className="text-lg font-bold text-blue-600">
            Price: ${car.price}/day
          </p>
        </div>

            <div className="flex justify-end gap-5 mt-5 ">
            <UpdateCarPage car={car}></UpdateCarPage>
            <DeleteCar car={car}></DeleteCar>
          </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default MyAddedCarsPage;