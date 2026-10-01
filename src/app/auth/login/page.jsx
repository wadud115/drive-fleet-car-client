'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const LogInPage = () => {


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

        const {data,error}= await authClient.signIn.email({
            email: user.email,
            password : user.password
        })

        console.log({data, error})


          if (error) {
    toast.error(error.message || "Login failed!");
    return;
  }


    if (data) {
    toast.success("Login successful! 🚗");

    setTimeout(() => {
      redirect("/");
    }, 1000);
  }

        

    }
    return (
          
<div className="max-w-7xl mx-auto my-6 sm:my-10 px-4 sm:px-6">
  <div className="my-4 sm:my-6 text-center">
    <h1 className="font-bold text-xl sm:text-2xl">
      Log in
    </h1>
  </div>

  <Card className="w-full max-w-md mx-auto border border-gray-300 p-4 sm:p-5">
    <Form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-4"
    >
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

      <div className="w-full">
        <Button
          className="bg-blue-500 hover:bg-blue-600 w-full"
          type="submit"
        >
          Login
        </Button>
      </div>

      <Link
        href="/auth/signup"
        className="text-center text-sm sm:text-base"
      >
        Do not have an account?{" "}
        <span className="font-semibold text-blue-500">
          Register
        </span>
      </Link>

      <div className="flex items-center gap-3 my-1 sm:my-2">
        <div className="h-px bg-gray-200 flex-1"></div>

        <div className="font-bold text-sm">Or</div>

        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <div className="w-full">
        <Button
          onClick={handleGoogleLogIn}
          variant="outline"
          className="w-full"
        >
          <FcGoogle />
          <span>Sign In With Google</span>
        </Button>
      </div>
    </Form>
  </Card>
</div>


    );
};

export default LogInPage;