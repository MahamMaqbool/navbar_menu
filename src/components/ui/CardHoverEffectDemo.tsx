// 
"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { div } from "framer-motion/client";
import Link from "next/link";
export function CardHoverEffectDemo() {
  return (
    <div className="py-20 bg-gray-900">
         <div className="max-w-5xl mx-auto px-8">
         <div className="text-center">
          <h3 className="text-base text-teal-600 font-semibold tracking-wide sm:text-2xl">Featured Webinars</h3>
          <p className="mt-3 mb-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey </p>
        </div>
      <HoverEffect items={projects} />
      <div className="mt-8 mx-auto px-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-teal-700 text-white font-semibold hover:from-teal-600 hover:to-teal-800 transition duration-300 w-48"><Link href="#">View All Courses</Link></div>
    </div>
    </div>
   
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];