

import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ExploreCarsPage = ({car}) => {

    console.log(car.name)

const{   name,
    price,
    seat,
    type,
    availability,
    imageUrl,
    pickupLocation,
    description
}  = car;






      

   
    return (
   

          
          <Card className="overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          
            <div className="relative h-56 overflow-hidden">
             <Image className=' object-cover' src={imageUrl.trim()}
             alt={name} 
    
            fill
        
             
             >


             </Image>

              <span className="absolute right-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
             {availability}
              </span>
            </div>

         
            <div className="p-5">

              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">
                    {name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                   Type : {type}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-blue-600">
                   Price :  ${price}
                  </p>

                  <p className="text-xs text-gray-500">
                 /day
                  </p>
                </div>
              </div>

           
              <div className="mb-5 flex items-center justify-between border-y py-4 text-sm text-gray-500">
                <span> Seat :{seat}</span>
                <span> Location : {pickupLocation}</span>
              </div>

              <Button className="w-full bg-blue-600 text-white">
                View Details
              </Button>

            </div>
          </Card>

         
      
    );
};

export default ExploreCarsPage;