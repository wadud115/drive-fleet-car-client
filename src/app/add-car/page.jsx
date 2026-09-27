"use client";

import {
  Input,
  TextArea,
  Button,
} from "@heroui/react";
const AddCarPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

       
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Add a Car
          </h1>

          <p className="mt-2 text-gray-600">
            Add your car details to make it available for rental.
          </p>
        </div>

    
        <div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">

        <form className="space-y-6">


  <div>
    <label className="mb-2 block text-sm font-medium text-gray-700">
      Car Name
    </label>

    <Input
      name="carName"
      placeholder="Enter car name"
      isRequired
      className={'w-full'}
    />
  </div>


  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Daily Rent Price
      </label>

      <Input
        name="rentPrice"
        type="number"
        placeholder="Enter daily rent"
        startContent={
          <span className="text-gray-500">$</span>
        }
        isRequired
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Seat Capacity
      </label>

      <Input
        name="seatCapacity"
        type="number"
        placeholder="e.g. 5"
        isRequired
      />
    </div>

  </div>

  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

   
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Car Type
      </label>

      <select
        name="carType"
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        required
        defaultValue=""
      >
        <option value="" disabled>
          Select car type
        </option>

        <option value="suv">SUV</option>
        <option value="sedan">Sedan</option>
        <option value="hatchback">Hatchback</option>
        <option value="luxury">Luxury</option>
        <option value="coupe">Coupe</option>
        <option value="van">Van</option>
      </select>
    </div>


    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Availability Status
      </label>

      <select
        name="availability"
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        required
        defaultValue=""
      >
        <option value="" disabled>
          Select availability
        </option>

        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>

  </div>

<div className="flex justify-between ">

   
  <div className="w-1/2">
    <label className="mb-2 block text-sm font-medium text-gray-700">
      Image URL
    </label>

    <Input
      name="imageUrl"
      type="url"
      placeholder="Enter Your image URL"
      isRequired
    />

    
  </div>

  <div  className="w-1/2">
    <label className="mb-2 block text-sm font-medium text-gray-700">
      Pickup Location
    </label>

    <Input
      name="pickupLocation"
      placeholder="Enter pickup location"
      isRequired
    />
  </div>
</div>


  <div>
    <label className="mb-2 block text-sm font-medium text-gray-700">
      Description
    </label>

    <TextArea
      name="description"
      placeholder="Write something about the car..."
      minRows={5}
      isRequired
       className={'w-full'}
    />
  </div>

  {/* Submit */}
  <Button
    type="submit"
    color="primary"
    size="lg"
    className="w-full font-semibold"
  >
    Add Car
  </Button>

</form>
        </div>
      </div>
    </div>
  );
};

export default AddCarPage;