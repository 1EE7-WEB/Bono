import Image from "next/image";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Link from "next/link";

const pasifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  //all of the animations come one after another as per the delay object
  const bgAnimate = {
    hidden: {
      clipPath: "polygon(21% 26%, 77% 26%, 77% 77%, 21% 77%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1,
      },
    },
  };
  const textAnimate1 = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };
  const textAnimate2 = {
    hidden: {
      x: 0,
    },
    show: (i: number) => ({
      x: i,
      transition: {
        ease: "easeOut",
        duration: 0.8,
      },
    }),
  };

  const navAnimate = {
    hidden: {
      y: "-110%",
    },
    show: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 2,
      },
    },
  };

  //spring animation so its nice, delay set to 2.8 so it comes after the nav
  const textParagraph = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 2.8,
      },
    },
  };

  return (
    <main className="h-screen overflow-hidden px-4">
      <motion.div
        className="absolute inset-0 z-0 h-screen w-screen"
        variants={bgAnimate}
        initial="hidden"
        animate="show"
      >
        <Image
          src="/images/burger.jpg"
          alt="background"
          fill
          sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw"
          priority={true}
          className="object-cover brightness-50"
        />
      </motion.div>

      <motion.nav
        className="relative z-10 flex items-center justify-between pt-4 text-white"
        variants={navAnimate}
        initial="hidden"
        animate="show"
      >
        <Link
          href={"/landing"}
          className={` text-4xl font-semibold lowercase  text-[#eaeaea] ${pasifico.className}`}
        >
          <span className="text-orange-500">1</span>ee7
        </Link>
      </motion.nav>

      <div className="relative top-1/3 -translate-y-1/3">
        <motion.div
          className="relative left-[25%]"
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className={`z-10 text-[210px] font-semibold lowercase leading-[0.9] tracking-tighter text-[#eaeaea] ${pasifico.className}`}
            variants={textAnimate2}
            custom={-150}
          >
            <span className="text-orange-500">B</span>ono
          </motion.h1>
        </motion.div>

        <motion.p
          className="absolute right-32 top-20 z-10 w-[500px] text-justify text-sm font-medium leading-5 text-[#eaeaea]"
          variants={textParagraph}
          initial="hidden"
          animate="show"
        >
          <span className="text-yellow-200">
            Bono is an application which tracks, organizes and provides you with
            meal prep.
          </span>{" "}
          Achieve your dream physique with Bono!
        </motion.p>

        <motion.div
          className="relative left-[25%]"
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="z-10 text-9xl font-semibold tracking-tighter text-yellow-200"
            variants={textAnimate2}
            custom={100}
          >
            EXPERIENCE
          </motion.h1>
        </motion.div>
      </div>
    </main>
  );
}
