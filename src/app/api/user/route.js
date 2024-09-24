import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  console.log("masuk di api signin");
  return NextResponse.json({ data: request }, { status: 200 })
  
  
  // try {
  //   const { email, password } = await request.json();

  //   const user = await prisma.user.findUnique({
  //     where: { email },
  //   });

  //   if (!user) {
  //     return NextResponse.json({ message: 'User not found' }, { status: 404 });
  //   }

  //   return NextResponse.json({ status: 'success' }, { status: 200 });
  // } catch (error) {
  //   console.log('Error in API route:', error);
  //   return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  // }
}
