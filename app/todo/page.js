import AddTodo from "../component/AddTodo";
import ListTodo from "../component/ListTodo";
import ButtonLogout from "../component/ButtonLogout";
export const dynamic = "force-dynamic";

async function GetTodo(){
  const res = await fetch('/api/todo');
  const data = await res.json();

  return data;
}

export default async function Home() {
  const todos = await GetTodo();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <main className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4">
            <ButtonLogout/>
            <h1 className="text-2xl font-bold text-center text-blue-600">
            Todo List
            </h1>

            <AddTodo />

            <ListTodo todos={todos} />

        </main>
    </div>
  );
}
