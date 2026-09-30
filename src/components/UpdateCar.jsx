"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Select, Label, ListBox, Modal, Surface, TextArea, TextField} from "@heroui/react";
import { BiEdit, BiEditAlt } from "react-icons/bi";

export function UpdateCarPage({car}) {


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


  const onSubmit = async (e)=>{
    const formData = new FormData(e.currentTarget)
    const car  = Object.fromEntries(formData.entries())

    console.log(car)

    const res = await fetch(`http://localhost:5000/cars/${_id}` , {
      method: 'PATCH',
      headers:{
        'content-type' : "application/json"
      },
      body: JSON.stringify(car)
    })

    const data = await res.json();
    console.log(data)
  }

  return (
    <Modal>
      <Button size="sm"><BiEdit></BiEdit>Update car</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEditAlt className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Car</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                 <form  onSubmit={onSubmit}
                        
                          className="space-y-8 p-5 sm:p-10"
                        >
                
                          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                
                            {/* <div className="md:col-span-2">
                              <TextField
                              defaultValue={name}
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
                            </div> */}
                
                
                            
                            <TextField
                             defaultValue={price}
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
                
                
{/*                       
                            <TextField
                             defaultValue={seat}
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
                            </TextField> */}
                
                
                    
                            <div>
                              <Select
                               defaultValue={type}
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
                               defaultValue={availability}
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
                              defaultValue={imageUrl}
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
                               defaultValue={pickupLocation}
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
                               defaultValue={description}
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
                
                
                        <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Update</Button>
            </Modal.Footer>
                         
                
                        </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}