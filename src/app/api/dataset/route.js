import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  const datasets = await prisma.dataset.findMany();

  return NextResponse.json(datasets, { status: 200 });
}

export async function POST(request) {
  const { pro, unit_model, component, type, group, serial_number, arrival_date, customer, site, finish_retest } = await request.json();

  console.log( "pro => ", pro)
    
  const newDataset = await prisma.dataset.create({
    data: {
      pro,
      unit_model,
      component,
      type,
      group,
      serial_number,
      arrival_date: new Date(arrival_date),
      customer,
      site,
      finish_retest: new Date(finish_retest),
    },
  });

  return NextResponse.json(newDataset, { status: 200 });
}