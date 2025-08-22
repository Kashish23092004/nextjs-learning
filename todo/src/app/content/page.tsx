import { Button } from '@/components/ui/button';
import React from 'react';
import { Label } from "@/components/ui/label";
import { prisma } from '@/lib/prisma'; // Make sure this path is correct
import { redirect } from 'next/navigation';

const page = () => {
  async function handlesubmit(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    const todo = await prisma.todo.create({
      data: {
        title: title,
        description: description,
      }
    });

    console.log("todo created successfully", todo);
    redirect('/');
  }

  return (
    <div>
      <form action={handlesubmit}>
        <div>
          <Label className='ml-96 text-5xl mt-40'>Title :</Label>
          <input
            type="text"
            name='title'
            id='title'
            className='ml-96 text-2xl mt-5'
            placeholder="enter your title"
          />
        </div>
        <div>
          <Label className='ml-96 text-5xl mt-16'>Description :</Label>
          <textarea
            name='description'
            id='description'
            placeholder="write description"
            className='ml-96 text-2xl mt-5'
          />
        </div>
        <Button type="submit" className='ml-96'>New</Button>
      </form>
    </div>
  );
}

export default page;
