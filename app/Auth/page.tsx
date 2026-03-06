"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef1f5] bg-[linear-gradient(#dfe3e8_1px,transparent_1px),linear-gradient(90deg,#dfe3e8_1px,transparent_1px)] bg-[size:40px_40px]">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-900">
          Join JMO Ecosystem
        </h1>

        <p className="text-gray-500 mt-2 mb-6">
          Hey there! Welcome back 👋
        </p>

        {/* Social Buttons */}

        <div className="space-y-3">

          <button className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-50">
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              width={20}
              height={20}
            />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-50">
            <Image
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="facebook"
              width={20}
              height={20}
            />
            Continue with Facebook
          </button>

          <button className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-50">
            <Image
              src="https://www.svgrepo.com/show/303128/apple-logo.svg"
              alt="apple"
              width={20}
              height={20}
            />
            Continue with Apple
          </button>

        </div>

        {/* Divider */}

        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Form */}

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Password */}

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

          <div className="flex justify-end">
            <Link
              href="#"
              className="text-sm text-purple-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

        </div>

        {/* Continue Button */}

        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg mt-6 font-medium">
          Continue
        </button>

        {/* Footer */}

        <div className="border-t mt-8 pt-6 text-center text-gray-500">

          <p>
            Don't have an account?
            <Link
              href="/signup"
              className="text-purple-500 ml-2 font-medium"
            >
              Sign up
            </Link>
          </p>

        </div>

      </div>

    </div>
  )
}