import connetToTheDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {

    connetToTheDatabase();

    const todos = await TodoModel.find().sort({ createdAt: "desc", isDone: "asc" })

    return NextResponse.json(todos, 
    {status: 200})
    
}

export async function POST (req: NextRequest) {

    await connetToTheDatabase();  

    const body = await req.json();


    const newTodo = new TodoModel({
        title: body.title,
        isDone: body.isDone
    });

    await newTodo.save();

    return NextResponse.json(newTodo , 
    {status: 200})
    
}