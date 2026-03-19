import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req:Request){

const body = await req.json()

const article = await prisma.article.create({
data:{
title:body.title,
content:body.content,
image:body.image,
authorId:body.authorId
}
})

return NextResponse.json(article)

}