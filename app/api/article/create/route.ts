import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic" // VERY IMPORTANT

export async function POST(req: Request) {
  try {
    const body = await req.json()

    //  Basic validation
    if (!body.title || !body.content || !body.authorId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const article = await prisma.article.create({
      data: {
        title: body.title,
        content: body.content,
        image: body.image || null,
        authorId: body.authorId,
      },
    })

    return NextResponse.json(article, { status: 201 })

  } catch (error) {
    console.error("CREATE ARTICLE ERROR:", error)

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}