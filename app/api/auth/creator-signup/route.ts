import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic" //  VERY IMPORTANT

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      email,
      password,
      country,
      brandName,
      creatorType,
      category,
      cacDocument,
    } = body

    //  Validation
    if (!email || !password || !brandName || !creatorType || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      )
    }

    //  Hash password safely
    const hashedPassword = await bcrypt.hash(password, 10)

    //  Create user + creator profile
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "CREATOR",
        country: country || null,
        creatorProfile: {
          create: {
            brandName,
            creatorType,
            category,
            cacDocument: cacDocument || null,
            trialEndsAt: new Date(
              Date.now() + 30 * 24 * 60 * 60 * 1000
            ),
          },
        },
      },
    })

    return NextResponse.json(user, { status: 201 })

  } catch (error) {
    console.error("CREATOR SIGNUP ERROR:", error)

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}