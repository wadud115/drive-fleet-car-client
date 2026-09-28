import { Button, Card, DateField, Label, Select,SelectItem, TextArea, TextField } from '@heroui/react';
import { Calendar, Radio } from 'lucide-react';
import React from 'react';

const BookCardPage = () => {
    return (
        <div>

            <Card className="p-5 sm:p-7 shadow-lg bg-blue-50">
                
                <div className="mb-3">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Book Car
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Fill in the details below to book your car.
                    </p>
                </div>

                <form
                   
                    className="flex flex-col gap-5"
                >
<div className="flex flex-col gap-2">
    <label htmlFor="driverNeeded" className="text-sm font-medium">
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

<div className="flex flex-col gap-2">
    <label htmlFor="date" className="text-sm font-medium">
        Booking Date
    </label>

    <input
        id="date"
        name="date"
        type="date"
        required
        className="w-full rounded-lg border px-3 py-2 outline-none"
    />
</div>


                    
                    <TextField name="specialNote">
                        <Label>Special Note</Label>

                        <TextArea
                            placeholder="Write any special request..."
                            rows={3}
                        />
                    </TextField>

                  
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold"
                    >
                        Book Now
                    </Button>
                </form>
            </Card>
            
        </div>
    );
};

export default BookCardPage;