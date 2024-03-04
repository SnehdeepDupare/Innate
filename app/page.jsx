"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0 0"],
  });

  const scaleFemale = useTransform(scrollYProgress, [0, 1], [0.6, 1.3]);
  const scaleMale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const variants = {
    slideDown: { y: -100, opacity: 0 },
    slideUp: { y: 100, opacity: 0 },
  };

  return (
    <>
      <section className="h-full flex items-center justify-between max-w-7xl mx-auto flex-col-reverse md:flex-row">
        {/* Left Side */}
        <div className="relative ">
          <Image src="/red-circle.png" alt="" height={500} width={500} />

          <motion.div
            ref={ref}
            style={{
              scale: scaleMale,
            }}
          >
            <Image
              src="/male-img.png"
              alt=""
              height={300}
              width={300}
              className="absolute bottom-0 right-0 z-[3]"
            />
          </motion.div>

          <motion.div
            ref={ref}
            style={{
              scale: scaleFemale,
            }}
          >
            <Image
              src="/female-img2.png"
              alt=""
              height={300}
              width={300}
              className="absolute bottom-0 z-[2]"
            />
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          ref={ref}
          className="relative h-56 w-full max-w-[800px]"
          style={{
            scale: scrollYProgress,
          }}
        >
          <Image src="/logo.png" alt="logo" fill className="object-contain" />
        </motion.div>
      </section>

      <div className="absolute bottom-0 z-10 w-full">
        <img src="/wave.svg" alt="wave" className="object-cover" />
      </div>

      <section className="bg-[#ffc0c0] h-full flex items-center justify-center gap-16 p-10">
        <InfoCard
          title={"RECRUITMENT"}
          content=' "innate" aims to find right personnel and them apply for open positions in the organization, to offer a better opportunity for better applicants and vacancies. We are always striving to bridge the gap between the company and job searchers by bringing them together via the use of cutting-edge hiring tactics.For the applicant to fit with the companys principles, beliefs, and culture, we also consider the prospects attitude, behavior, and mindset as we move on with the recruiting process.'
          variant={variants.slideDown}
        />

        <InfoCard
          title={"EMOTIONAL INTELLIGENCE (EI)"}
          content="Hiring and firing is a part and parcel of today's business world,
          therefore 'Innate' tries to understand the value of each candidate
          and place them in the right job by analyzing their caliber and
          potential.Using our Re-Sourcing approaches, we also work to
          comprehend the challenges that today's job searchers confront in
          their daily lives and to identify solutions that would lead to a
          situation that would be beneficial to both employers and
          applicants."
          className={"self-end"}
          variant={variants.slideUp}
        />

        <InfoCard
          title={"RE-SOURCING"}
          content="In order to effectively employ emotions in communication and in
              resolving organizational issues, we strive to use emotional
              intelligence and research candidates' emotions and their capacity
              for self-control.We attempt to anonymously integrate ourselves
              into the companies in accordance with their needs and learn about
              the operational pain factors that are causing them to lose talent.
            "
          variant={variants.slideDown}
        />
      </section>
    </>
  );
}
