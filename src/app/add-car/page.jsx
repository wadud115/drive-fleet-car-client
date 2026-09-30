"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  Card,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const AddCarPage = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!user || loading) return;

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const carData = Object.fromEntries(formData.entries());

      carData.userId = user.id;

      const { data: tokenData } = await authClient.token();

      if (!tokenData?.token) {
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:5000/cars", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        toast.success("Car added successfully! ");

        e.currentTarget.reset();

        router.push("/cars");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto flex min-h-[400px] max-w-7xl items-center justify-center p-5">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Please Login
          </h2>

          <p className="mt-2 text-gray-500">
            You need to login before adding a car.
          </p>

          <Button
            className="mt-5 bg-blue-600 text-white"
            onPress={() => router.push("/auth/login")}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-5">
      <h2 className="mb-5 text-2xl font-bold">
        Add Car
      </h2>

      <Card className="w-full p-3">
        <form
          onSubmit={onSubmit}
          className="space-y-8 p-5 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            <div className="md:col-span-2">
              <TextField name="name" isRequired>
                <Label>Car Name</Label>

                <Input
                  placeholder="Toyota Corolla"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            <TextField
              name="price"
              type="number"
              isRequired
            >
              <Label>Daily Rent Price (USD)</Label>

              <Input
                type="number"
                placeholder="80"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            <TextField
              name="seat"
              type="number"
              isRequired
            >
              <Label>Seat Capacity</Label>

              <Input
                type="number"
                placeholder="5"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            <div>
              <Select
                name="type"
                isRequired
                className="w-full"
                placeholder="Select car type"
              >
                <Label>Car Type</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>

                    <ListBox.Item
                      id="SUV"
                      textValue="SUV"
                    >
                      SUV
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Sedan"
                      textValue="Sedan"
                    >
                      Sedan
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Hatchback"
                      textValue="Hatchback"
                    >
                      Hatchback
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Luxury"
                      textValue="Luxury"
                    >
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Coupe"
                      textValue="Coupe"
                    >
                      Coupe
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Van"
                      textValue="Van"
                    >
                      Van
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div>
              <Select
                name="availability"
                isRequired
                className="w-full"
                placeholder="Select availability"
              >
                <Label>Availability Status</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>

                    <ListBox.Item
                      id="Available"
                      textValue="Available"
                    >
                      Available
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Unavailable"
                      textValue="Unavailable"
                    >
                      Unavailable
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div className="md:col-span-2">
              <TextField
                name="imageUrl"
                type="url"
                isRequired
              >
                <Label>Image URL</Label>

                <Input
                  type="url"
                  placeholder="https://example.com/car.jpg"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField
                name="pickupLocation"
                isRequired
              >
                <Label>Pickup Location</Label>

                <Input
                  placeholder="Dhaka, Bangladesh"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField
                name="description"
                isRequired
              >
                <Label>Description</Label>

                <TextArea
                  placeholder="Describe the car..."
                  className="rounded-3xl"
                />

                <FieldError />
              </TextField>
            </div>

          </div>

          <Button
            type="submit"
            disabled={loading}
            className="flex w-full items-center bg-blue-500 text-white hover:bg-blue-600"
          >
            {loading ? "Adding Car..." : "Add Car"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddCarPage;