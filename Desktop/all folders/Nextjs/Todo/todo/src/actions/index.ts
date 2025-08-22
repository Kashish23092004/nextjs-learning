"use server";

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export const saveTodo = async (id: number, description: string) => {
  await prisma.todo.update({
    where: { id },
    data: { description },
  });
  redirect(`/todo/${id}`);
};

export const deleteTodo = async (id: number) => {  // Corrected function name
  await prisma.todo.delete({
    where: { id },
  });
  redirect(`/`);
};
