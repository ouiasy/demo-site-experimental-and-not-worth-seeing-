import Hero from "@/app/about/components/hero";
import Features from "@/app/about/components/features";
import Contact from "@/app/about/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "about",
    description: "nothing special here..."
}

export default function Page() {
    return (
        <div>
            <Hero/>
            <Features/>
            <Contact/>
        </div>
    )
}