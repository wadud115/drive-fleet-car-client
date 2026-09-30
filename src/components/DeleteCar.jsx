"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { IoTrashBin } from "react-icons/io5";

export function DeleteCar({car}) {

    const {_id} = car;


    const handleDelete = async()=>{
        const res = await fetch(`http://localhost:5000/cars/${_id}` ,{
            method: 'DELETE',

            headers : {
                "content-type": "application/json"
            }
        }) 

        const data = res.json()
        redirect('/my-added-cars')
    }
  return (
    <AlertDialog>
     <Button size="sm" variant="danger"><IoTrashBin></IoTrashBin>Delete car</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Car permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{car.name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}