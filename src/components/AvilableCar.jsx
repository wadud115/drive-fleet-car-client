import React from 'react';

import Link from "next/link";
import ExploreCarsPage from '@/components/ExploreCars';

const AvailableCarPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`, {
    cache: "no-store",
  });

  const cars = await res.json();

  return (
    <main>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Available Cars
            </h2>

            <p className="text-gray-500 mt-2">
              Choose your perfect car for your journey
            </p>
          </div>


     
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {cars
              .filter((car) => car.availability === "Available")
              .slice(0, 6)
              .map((car) => (
                <ExploreCarsPage key={car._id} car={car}></ExploreCarsPage>
              ))}

          </div>

        </div>
      </section>

    </main>
  );
};

export default AvailableCarPage;