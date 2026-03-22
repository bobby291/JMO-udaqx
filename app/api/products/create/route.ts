import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic" //  VERY IMPORTANT

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { title, description, price, image, creatorId } = body

    //  Validation
    if (!title || !price || !creatorId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    //  Create product
    const product = await prisma.product.create({
      data: {
        title,
        description: description || null,
        price,
        image: image || null,
        creatorId,
      },
    })

    return NextResponse.json(product, { status: 201 })

  } catch (error) {
    console.error("PRODUCT CREATE ERROR:", error)

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}