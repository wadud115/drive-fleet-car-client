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
          
<div className="max-w-7xl mx-auto my-6 sm:my-10 px-4 sm:px-6 lg:px-8">

 
  <div className="my-4 sm:my-6 text-center">
    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
      Register
    </h1>
  </div>

 
  <Card className="w-full max-w-md mx-auto p-4 sm:p-5 md:p-6 border border-gray-300 shadow-md rounded-xl">

    <Form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-4"
    >

     
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Name</Label>

        <Input
          placeholder="Enter your Name"
          className="w-full"
        />

        <FieldError />
      </TextField>


     
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>

        <Input
          placeholder="john@example.com"
          className="w-full"
        />

        <FieldError />
      </TextField>


      <TextField
        
        name="imageUrl"
        type="url"
      >
        <Label>Photo URL</Label>

        <Input
          placeholder="Enter your Photo URL"
          className="w-full"
        />

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

        <Input
          placeholder="Enter your password"
          className="w-full"
        />

        <Description className="text-xs sm:text-sm">
          Must be at least 8 characters with 1 uppercase,
          1 lowercase and 1 number
        </Description>

        <FieldError />
      </TextField>


      {/* Register Button */}
      <div className="w-full">
        <Button
          className="bg-blue-500 hover:bg-blue-600 w-full"
          type="submit"
        >
          Register
        </Button>
      </div>


      {/* Login Link */}
      <Link
        href="/auth/login"
        className="text-center text-sm sm:text-base"
      >
        Already have an account?{" "}
        <span className="font-semibold text-blue-500">
          Log in
        </span>
      </Link>


      {/* OR */}
      <div className="flex items-center gap-3 my-1 sm:my-2">

        <div className="h-px bg-gray-200 flex-1"></div>

        <div className="font-bold text-sm">
          Or
        </div>

        <div className="h-px bg-gray-200 flex-1"></div>

      </div>


      {/* Google Button */}
      <div className="w-full">
        <Button
          onClick={handleGoogleLogIn}
          variant="outline"
          className="w-full"
        >
          <FcGoogle />
          <span>Sign Up With Google</span>
        </Button>
      </div>

    </Form>

  </Card>
</div>


    );
};

export default RegisterPage;