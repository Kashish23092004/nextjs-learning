import { prisma } from '@/lib/prisma'
import Todoform from '@/components/todoform' // Update path if different

const EditPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const todo = await prisma.todo.findUnique({
    where: { id: Number(id) }
  });

  if (!todo) return <h1>Todo not found</h1>

  return <Todoform todo={todo} />
}

export default EditPage;
