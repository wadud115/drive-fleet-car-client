import React from "react";
import { Button, Card } from "@heroui/react";
import ExploreCarsPage from "@/components/ExploreCars";
import CarSearch from "@/components/CarSearch";


const carsPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const type = params?.type || "";

  const query = new URLSearchParams();

  if (search) {
    query.set("search", search);
  }

  if (type) {
    query.set("type", type);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/cars?${query.toString()}`,
    {
      cache: "no-store",
    }
  );

  const cars = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Explore Cars
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Find the perfect car for your next journey.
          </p>
        </div>

        <CarSearch />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <ExploreCarsPage
              key={car._id}
              car={car}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default carsPage;