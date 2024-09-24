"use client";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function loginUserService(userData) {
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-cache",
    });

    return NextResponse.json();
  } catch (error) {
    console.log("Login Service Error:", error);
    throw error;
  }
}
