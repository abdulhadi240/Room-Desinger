import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import Integration from "@/components/Integration";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Compare from 'components/Compare'
import Name from 'components/Name'
export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};


export default function Home() {
  return (
    <main>
      
      <Hero />
      <Compare/>
      <Feature />
      <Name/>
      <FeaturesTab />
      <Integration />
      <div className='mt-56'>
      <FAQ />
      </div>
      <Contact />
    </main>
  );
}
