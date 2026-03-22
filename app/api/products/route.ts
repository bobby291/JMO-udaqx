import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic" // stops Next.js from executing this during build

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        creator: true, // include creator relation
      },
      orderBy: {
        createdAt: "desc", // optional: latest first
      },
    })

    return NextResponse.json(products, { status: 200 })
  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error)

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    )
  }
}