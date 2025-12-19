"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { headers } from "next/headers";
export const dynamic = "force-dynamic";

export default function ListTodo({todos}){
    const route = useRouter();

    async function DeleteTodo(id) {
        await fetch(`http://${host}/api/todo/${id}`,{
                        method: "DELETE",
                    });
        route.refresh();
    }

    async function UpdateTodo(id){
        const name = prompt("Masukkan nama:");
        await fetch(`http://${host}/api/todo/${id}`,{
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name})
            });
        route.refresh();
    }

    return(
        <ul className="max-w-md space-y-2">
            {todos.map((todo) => (
                <li
                key={todo.id}
                className="flex items-center justify-between p-3 border rounded-lg"
                >
                <span className="text-gray-800">{todo.name}</span>

                <div className="flex gap-2">
                    <button
                    onClick={() => UpdateTodo(todo.id)}
                    className="px-3 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600"
                    >
                    Edit
                    </button>

                    <button
                    onClick={() => DeleteTodo(todo.id)}
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    >
                    Delete
                    </button>
                </div>
                </li>
            ))}
        </ul>

    )
}