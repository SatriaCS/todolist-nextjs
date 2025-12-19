import { NextResponse } from "next/server";
import { TodoList} from "./data";

export async function GET() {
  return NextResponse.json(TodoList);
}

export async function POST(request){
    const body = await request.json();

    TodoList.push({
        id: Date.now(),
        name: body.name 
    })

    return NextResponse.json({status: 201})
}