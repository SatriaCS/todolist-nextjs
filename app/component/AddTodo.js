"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
export const dynamic = "force-dynamic";

export default function AddTodo(){
    const [name,setName] = useState();
    const [loading,setLoading] = useState(false);
    const route = useRouter();

    async function HandleAdd(e){
        e.preventDefault();
        setLoading(true)
        
        if (name == '') {
            setLoading(false)
            return alert('name todo kosong');
        }

        await fetch('/api/todo',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name})
            });

        setName('')
        setLoading(false)
        
        route.refresh()    
    }

    return(
       <form
            onSubmit={HandleAdd}
            className="flex gap-2 max-w-md"
        >
            <input
                type="text"
                placeholder="Tambah todo..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setName(e.target.value)}
                required
            />

            <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Menyimpan...' : 'Add'}
            </button>
        </form>


    )
}