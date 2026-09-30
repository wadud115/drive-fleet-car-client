'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {


    
        const handleGoogleLogIn = async()=>{
    
        await authClient.signIn.social({
            provider: 'google'
    
        }) 
    }

    const onSubmit = async(e)=>{
        e.preventDefault();


        const formData = new FormData(e.currentTarget)
        const user =  Object.fromEntries(formData.entries())
        console.log(user)


 const { data, error } = await authClient.signUp.email({
    name : user.name, 
    email : user.email, 
    password : user.password, 
    image : user.imageUrl, 
    
});

     console.log({data, error})

       if (error) {
    toast.error(error.message || "Register failed!");
    return;
  }

      if (data) {
    toast.success("register successful! 🚗");

    setTimeout(() => {
      redirect("/auth/login");
    }, 1000);
  }
    }
    return (
          <div className='max-w-7xl mx-auto my-10'>
        
                    <div className='my-3 text-center'>
                        <h1 className='font-bold text-2xl'>Register</h1>
                       
                    </div>
        
        
                    <Card className='p-5 '>   
                        
                            <Form onSubmit={onSubmit}  className="flex w-96 flex-col gap-4">
        
         <TextField
                isRequired
                name="name"
                type="text"
                
              >
                <Label>Name</Label>
                <Input placeholder="Enter your Name" />
                <FieldError />
              </TextField>
        
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>



       <TextField
                isRequired
                name="imageUrl"
                type="url"
                
              >
                <Label>Photo Url</Label>
                <Input placeholder="Enter your Photo Url" />
                <FieldError />
              </TextField>


               
        
        
        
              
          
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }

                   if (!/[a-z]/.test(value)) {
                    return "Password must contain at least one lowercase letter";
                  }


                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>Must be at least 8 characters with 1 uppercase and 1 lowercase and  number</Description>
                <FieldError />
              </TextField>
              <div className="flex gap-2">
                <Button className={'bg-blue-500  w-full'} type="submit">
                  
                  Register
                </Button>

               
               
              </div>
               <Link href={'/auth/login'} className='text-center'>Already have an account? <span className='font-semibold text-blue-500'>Log in</span></Link>
            </Form>
        
            <div>
                <div className='flex justify-center gap-3 items-center my-3 '>
            
                  
            
                    <div className='font-bold'>Or</div>
                    
                    
            
                     </div>
            
                     <div>
                        <Button onClick={ handleGoogleLogIn} variant='outline' className={" w-full"}> <FcGoogle /> Sign Up With Google</Button>
            
                     </div>
                     </div>
            
            </Card>
             
                </div>
    );
};

export default RegisterPage;