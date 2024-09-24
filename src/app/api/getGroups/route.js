import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
    try {
        // Mengambil semua data dari tabel Type
        const data = await prisma.group.findMany();
    
        // Mengembalikan response JSON dengan data Type
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching types:", error);
        return NextResponse.json({ error: 'Failed to fetch Type data' }, { status: 500 });
    }
}