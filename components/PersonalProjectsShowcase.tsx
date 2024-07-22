"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import Link from "next/link"

export default function PersonalProjectsShowcase() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  return (
    <section className='my-8 w-full max-w-[900px]'>
      <h3 className='mb-4 text-3xl text-primary'>Personal Projects Showcase</h3>
      <div className="flex flex-col gap-4">
        <Link href={"https://shorkit.com/"} target="_blank">
          <Card className="flex flex-col items-center sm:flex-row">
            <CardHeader className="w-full sm:w-2/3">
              <Image
                src='/shorkit.png'
                height={667}
                width={1186}
                alt='Shorkit'
                className=" rounded-xl object-cover"
              />
            </CardHeader>
            <CardContent className="flex w-full flex-col justify-between gap-2 py-4">
              <div>
                <h4 className="text-2xl font-semibold">
                  Shorkit
                </h4>
                <p className="">
                  Shorkit is a newly launched project designed to provide a free URL shortening service to the public.
                  Built with Next.js for full-stack development and Supabase for database management and authentication,
                  Shorkit features OAuth integration for easy sign-in and a user-friendly dashboard for managing links.<br />
                  I am passionate about free utilities for developers and wanted to create a project that would be useful to others.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>Next.js Full Server-side</Badge>
                <Badge variant="outline" className="border-primary">Supabase</Badge>
                <Badge>Cloudflare</Badge>
                <Badge variant="outline" className="border-primary">Tailwind CSS</Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href={"https://www.pomodoro-timer.site/"} target="_blank">
          <Card className="flex flex-col items-center sm:flex-row">
            <CardHeader className="w-full  sm:w-2/3">
              <Image
                src='/Pomodoro-timer.png'
                height={667}
                width={1186}
                alt='Shorkit'
                className=" max-h-[240px] rounded-xl object-cover"
              />
            </CardHeader>
            <CardContent className="flex w-full  flex-col justify-between gap-2">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-semibold">
                  Pomodoro-Timer App
                </h4>
                <p className="">
                  Pomodoro Timer is a productivity app designed to help you focus on tasks by breaking them into intervals.
                  Built with React-Native and Expo-Router for the frontend, and Supabase for the backend.
                  The app is currently in the Alpha stage on the Play Store and is waiting the release being tested by a group of users. <br />
                  The brand is provitional and will be changed in the future.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>React Native</Badge>
                <Badge variant="outline" className="border-primary">Supabase</Badge>
                <Badge>React Query</Badge>
                <Badge variant="outline" className="border-primary">Expo Router</Badge>
                <Badge>EAS</Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>


    </section >
  )
}
