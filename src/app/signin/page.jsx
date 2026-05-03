"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

const SignIn = () => {
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      userData[key] = value.toString();
    });
    // alert(`Form submitted with: ${JSON.stringify(userData, null, 2)}`);

     const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            
            callbackURL: "/"
        });
            console.log({data, error});
  };
    return (
        <div className="max-w-4/12 mx-auto mt-7 ">
             <Form className="flex w-96 flex-col gap-4 py-11 px-5 bg-white shadow-2xl rounded-xl" onSubmit={onSubmit}>
            <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
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
        <Input placeholder="Enter your email" />
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
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Sign In
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
        </div>
    );
};

export default SignIn;