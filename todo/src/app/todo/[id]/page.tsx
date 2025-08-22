import { prisma } from '@/lib/prisma';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as actions from '@/actions';

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const todo = await prisma.todo.findUnique({
    where: { id: Number(id) },
  });

  if (!todo) return <h1>todo not found</h1>;

  const deleteTodoAction = actions.deleteTodo.bind(null, todo.id);  // Corrected action name

  return (
    <div>
      <div>
        <div className="ml-96 flex">
          <h1 className="text-4xl">{todo.title}</h1>
          <Link href={`/todo/${todo.id}/edit`}>
            <Button className="ml-96">edit</Button>
          </Link>
          <form action={deleteTodoAction}>
            <Button className="ml-10" type="submit">
              delete
            </Button>
          </form>
        </div>

        <p className="text-2xl mx-80 mt-10">{todo.description}</p>
      </div>
    </div>
  );
};

export default page;
