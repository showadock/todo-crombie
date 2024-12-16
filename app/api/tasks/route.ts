import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export async function GET() {
  const tasks = await prisma.task.findMany({
    include: {
      user: true,
    },
  });

  return new Response(JSON.stringify(tasks), { status: 200 });
}

export async function POST(req: Request) {
  const { title, dueDate, userId } = await req.json();

  const newTask = await prisma.task.create({
    data: {
      title,
      dueDate: new Date(dueDate),
      userId: parseInt(userId),
    },
  });

  return new Response(JSON.stringify(newTask), { status: 201 });
}
