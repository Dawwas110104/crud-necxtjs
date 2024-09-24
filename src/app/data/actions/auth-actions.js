"use server";
import { z } from "zod";
// import { loginUserService } from '@/app/data/action/services/auth-service';
import { loginUserService } from "../services/auth-service";
// import { loginUserService } from "@/data/services/auth-service";

const schemaRegister = z.object({
    password: z.string().min(6).max(100, {
      message: "Password must be between 6 and 100 characters",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
});

export async function loginUserAction(prevState, formData) {
    console.log("Hello From Register User Action");
  
    const validatedFields = schemaRegister.safeParse({
      password: formData.get("password"),
      email: formData.get("email"),
    });
  
    if (!validatedFields.success) {
      return {
        ...prevState,
        zodErrors: validatedFields.error.flatten().fieldErrors,
        message: "Missing Fields. Failed to Register.",
      };
    }
  
    console.log("validatedFields", validatedFields.data)
    const responseData = await loginUserService(validatedFields.data);

    if (!responseData) {
        return {
          ...prevState,
          zodErrors: null,
          message: "Ops! Something went wrong. Please try again.",
        };
      }
    
    if (responseData.error) {
    return {
        ...prevState,
        zodErrors: null,
        message: "Failed to Register.",
    };
    }

    console.log("#############");
    console.log("User Registered Successfully", responseData.jwt);
    console.log("#############");
    
    // return {
    //   ...prevState,
    //   data: "ok",
    //   form: {
    //     email: formData.get("email"),
    //     password: formData.get("password"),
    //   }
    // };
  }
