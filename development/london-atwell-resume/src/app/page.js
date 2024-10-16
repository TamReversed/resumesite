"use client"
import Hero from "@/app/components/Hero"
import Profile from "@/app/components/Profile"
import { useEffect } from "react";
import Worked from "@/app/components/Worked"
import Experience from "@/app/components/Experience"
import Education from "@/app/components/Education"
import Certification from "@/app/components/Certification"
import Skills from "@/app/components/Skills"
import Awards from "@/app/components/Awards"
import Contact from "@/app/components/Contact"
import Socials from "@/app/components/Socials"
import Testimonials from "@/app/components/Testimonials"
import Speaking from "@/app/components/Speaking"
import AOS from "aos"
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(()=>{
    (
      async()=>{
        const LocomotiveScroll = (await import("locomotive-scroll")).default
        const locomotiveScroll = new LocomotiveScroll()

        setTimeout(()=>{
          document.body.style.cursor = "default"
          window.scrollTo(0,0)
        },2000)
      }
    )()
  },[])

  useEffect(()=>{
    AOS.init({
      offset: 100,
    });
  },[])
  return (
   <div className="flex flex-col items-stretch gap-y-4">
    <Hero />
    <Profile />
    <Worked  />
    <Experience />
    <Education />
    <Certification />
    <Skills />
    <Speaking />
    <Awards />
    <Testimonials />
    <Socials />
    <Contact />
   </div>
  );
}
