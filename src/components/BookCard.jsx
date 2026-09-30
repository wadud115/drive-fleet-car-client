


"use client";

import { authClient } from "@/lib/auth-client";

import {Button, Card, DateField, Label, Modal, TextArea, TextField} from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";



export function BookCardPage({car}) {

      const {data : session} = authClient.useSession();

//   console.log(session)

const user = session?.user;
console.log(user)

const [date , setDate] = useState(null)

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


  const handleBook = async () => {
  if (!user) {
    alert("Please login first");
    return;
  }

  if (!date) {
    alert("Please select a booking date");
    return;
  }

  const bookingData = {
    userId: user.id,
    userName: user.name,

    carName: name,
    carId: _id,

    price,
    seat,
    type,
    availability,
    imageUrl,
    pickupLocation,
    description,

    date: date.toString(),
  };

  try {
   const res = await fetch("http://localhost:5000/booking", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(bookingData),
});

if (!res.ok) {
  const errorText = await res.text();

  console.log("Server Error:", errorText);

  alert("Booking failed");

  return;
}

await fetch(`http://localhost:5000/cars/${car._id}/booking-count`, {
  method: "PATCH",
});

    const data = await res.json();

    console.log("Booking successful:", data);
    alert("Car booked successfully!");

  

  } catch (error) {
    console.error("Booking error:", error);
    alert("Something went wrong!");
  }
};
 



  return (
    <Modal>
      <Button >Book Car</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
             <p className="font-semibold text-blue-500"> Booking Form</p>
             <Modal.Heading className="text-2xl font-bold">{name}</Modal.Heading>
            </Modal.Header>
           
          
            <Modal.Body>
             
 <Card className="flex flex-col gap-5">

               
               <div className="flex flex-col gap-2">
                 <label
                   htmlFor="driverNeeded"
                   className="text-sm font-medium"
                 >
                   Driver Needed?
                 </label>

                 <select
                   id="driverNeeded"
                   name="driverNeeded"
                   required
                   className="w-full rounded-lg border px-3 py-2 outline-none"
                 >
                   <option value="">Select an option</option>
                   <option value="yes">Yes</option>
                   <option value="no">No</option>
                 </select>
               </div>

            
                <DateField onChange={setDate} className="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>

             
             <TextField name="specialNote">
                 <Label>Special Note</Label>

                 <TextArea
                   placeholder="Write any special request..."
                   rows={3}
                 />
              </TextField>

               <Button

               onClick={handleBook}
               
                
                className="w-full bg-blue-500 text-white font-semibold"
              >
                Confirm Booking
               </Button>

            

             </Card>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}











