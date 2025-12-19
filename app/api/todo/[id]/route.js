import { NextResponse } from "next/server";
import { TodoList } from "../data";

export async function PUT(request,{params}){
    const { id } = await params;
    const body = await request.json();

    const todo = TodoList.find(item => item.id == id)
    if (!todo){
        return NextResponse.json({
            message: 'todo tidak ditemukan',
            status: 404
        })
    }

    todo.name = body.name ?? todo.name;

    return NextResponse.json({
        message: 'todo berhasil diubah',
        status: 200
    })
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    const index = TodoList.findIndex(item => item.id == id);

    if (index === -1) {
        return NextResponse.json(
            { message: "todo tidak ditemukan" },
            { status: 404 }
        );
    }

    TodoList.splice(index, 1);

    return NextResponse.json(
        { message: "todo berhasil dihapus" },
        { status: 200 }
    );
}