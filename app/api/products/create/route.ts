import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const body = await req.json()

    const product = await prisma.product.create({
        data:{
            title: body.title,
            description: body.description,
            price: body.price,
            image: body.image,
            creatorId: body.creatorId
        }
    })

    return NextResponse.json(product)
}