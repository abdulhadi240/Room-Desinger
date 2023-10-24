"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {



  return (
    <>
      <section className="pb-20 overflow-hidden pt-35 md:pt-40 xl:pt-46 xl:pb-25">
        <div className="px-4 mx-auto max-w-c-1390 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                🔥 Design Your Dream Home, One Click away
              </h4>
              <h1 className="pr-16 mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Your Gateway to Stunning                 
              <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">Home Designs!
                </span>
              </h1>
              <p>
              Homestyler is an innovative online platform that empowers you to unleash the power of AI and design the home of your dreams. With its user-friendly interface and an array of different designs, it's the perfect companion for anyone seeking to bring their home design ideas to life.              </p>

              <div className="mt-10">
                <Link href={'/Select'}><div>
                  <div className="flex flex-wrap gap-5">
                    
                    <button
                      aria-label="signup to newsletter"
                      className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
                </Link>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>

            <div className="hidden animate_right md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden shadow-solid-l"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block shadow-solid-l"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
