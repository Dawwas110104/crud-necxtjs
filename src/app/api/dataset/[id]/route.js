import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request,  { params }) {
  const { id } = params;

  const task = await prisma.task.findFirst({
    where: { id: Number(id) },
  });

  return NextResponse.json(task, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params
  const { title, description, } = await request.json()

  const updatedTask = await prisma.task.update({
    where: { id: Number(id) },
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(updatedTask, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = params
  const deletedTask = await prisma.task.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(deletedTask, { status: 200 });
}