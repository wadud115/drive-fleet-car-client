import { DeleteCar } from "@/components/DeleteCar";
import { UpdateCarPage } from "@/components/UpdateCar";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { IoTrashBin } from "react-icons/io5";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/cars/${id}`, {
    cache: "no-store",
  });

  const car = await res.json();

  const {
    name,
    price,
    seat,
    type,
    availability,
    imageUrl,
    pickupLocation,
    description,
    _id,
  } = car;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
      
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

          <div className="flex justify-end gap-3 p-5">
            <UpdateCarPage car={car}></UpdateCarPage>
            <DeleteCar car={car}></DeleteCar>
          </div>



          <div className="grid grid-cols-1 lg:grid-cols-2">
            
       
            <div className="relative h-72 sm:h-96 lg:h-full lg:min-h-[450px]">
              <Image
                src={imageUrl.trim()}
                alt={name}
                fill
                className="object-cover"
              />
            </div>

           
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              
              
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-600">
                  {type}
                </p>

                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {name}
                </h1>

                <p className="mt-2 text-gray-500">
                  Car ID: {_id}
                </p>
              </div>

          
              <div className="mb-6 rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-gray-500">Rental Price</p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-3xl font-bold text-blue-600">
                    ${price}
                  </span>

                  <span className="mb-1 text-gray-500">
                    / day
                  </span>
                </div>
              </div>

            
              <div className="grid grid-cols-2 gap-4 border-y border-gray-200 py-6">
                
                <div>
                  <p className="text-sm text-gray-500">Car Type</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {type}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Seats</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {seat}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p
                    className={`mt-1 font-semibold ${
                      availability === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {availability}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Pickup Location</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {pickupLocation}
                  </p>
                </div>
              </div>

          
              <div className="py-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  About This Car
                </h2>

                <p className="leading-7 text-gray-600">
                  {description}
                </p>
              </div>

        
              <button
                className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;