import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-6xl"> TO-Do </h1>
        <Link href="/content">
          <Button className="ml-96" variant="outline">Add</Button>
        </Link>
      </div>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <div className="flex mt-7 bg-slate-300">
              <h1 className="pl-96 text-2xl pr-20">{todo.title}</h1>
              <Link href={`/todo/${todo.id}`}>
                <Button className="ml-auto" type="button" variant="link">
                  View
                </Button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
}
