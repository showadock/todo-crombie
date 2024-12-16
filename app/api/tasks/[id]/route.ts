import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const taskId = parseInt(params.id);

  await prisma.task.delete({
    where: { id: taskId },
  });

  return new Response(JSON.stringify({ message: "Task deleted" }), {
    status: 200,
  });
}
