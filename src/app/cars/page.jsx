


import React from "react";
import { Button, Card } from "@heroui/react";
import ExploreCarsPage from "@/components/ExploreCars";

const carsPage = async () => {

    const res = await fetch('http://localhost:5000/cars')
    const cars = await res.json()
    console.log(cars)


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


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map(car =>  <ExploreCarsPage key={car._id} car={car}></ExploreCarsPage>)}
        </div>


       

       
      </div>
    </main>
  );
};

export default carsPage;

