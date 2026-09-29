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

const AddCarPage = () => {


  const { data: session } = authClient.useSession();

const user = session?.user;

console.log(user)


  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const carData = Object.fromEntries(formData.entries());
    carData.userId = user.id;
    console.log(carData);


    const res = await fetch("http://localhost:5000/cars" , {
        method: "POST",
        headers : {
            'content-type' : 'application/json'
        },

        body: JSON.stringify(carData)
    })

    const data = await res.json()

    console.log(data)

  };

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
              <TextField
                name="name"
                isRequired
              >
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
            variant="outline"
            className=" w-full bg-blue-500 text-white flex items-center"
            
          >
            Add Car
          </Button>

        </form>

      </Card>

    </div>
  );
};

export default AddCarPage;