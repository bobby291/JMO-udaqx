import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(req:
    Request) {
        const body = await req.json()

        const password =  await
        bcrypt.hash(body.password, 10)

        const user = await prisma.user.create({
            data:{
                email: body.email,
                password,
                role: "CREATOR",
                country: body.country,
                creatorProfile:{
                    create:{
                        brandName: body.brandName,
                        CreatorType:body.creatorType,
                        category: body.category,

                        cacDocument: body.cacDocument,
                        trailEndsAt:new Date(Date.now()+30*24*60*60*1000)
                    }
                }
            }
        })

        return NextResponse.json(user)
    }