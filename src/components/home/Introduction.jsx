"use client";
import Image from "next/legacy/image";
import EnhancedQuoteComponent from "./quote";
import { FaSortDown } from "react-icons/fa";
import { useEffect, useState, useMemo } from "react";
export default function Introduction() {
  const [drop, setDrop] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDrop(true);
    }, 3000);
  }, [drop]);
  const titles = useMemo(() => [
    "I am a student at IIT Delhi",
    "I'm a Software Engineer",
    "I love to code",
    // Add more titles as needed
  ], []);
  const [text, setText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    setText("_");
    const fullText = titles[currentTitleIndex];

    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000); // wait 2 seconds before next title
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentTitleIndex, titles]);
  return (
    (<div className="relative z-10 h-screen w-screen space-y-8 p-4">
      <div className=" grid grid-cols-1 lg:grid-cols-5 pt-8 space-y-8">
        <div className=" col-span-1 lg:order-1 "></div>

        <div className=" col-span-2 lg:mr-8 lg:order-2 text-white text-lg p-8">
          <div className="font-semibold text-3xl">Hey there!</div>
          <div className="text-5xl my-4">
            {"I'm "}
            <span className="text-blue-400">{"Jaskaran Singh Bhalla!"}</span>
          </div>
          <div className="text-3xl my-8">
            {(() => {
              return <span>{text}</span>;
            })()}
          </div>
          <div className="text-justify md:text-justify">
            <p className="my-2 py-2">
              {"I'm a software developer at"}
              <span className="font-semibold">Trential</span>
              {"and a proud graduate of"}
              <span className="font-semibold">IIT Delhi</span>
              {". Driven by a passion for software engineering, technology, and building impactful products."}
            </p>
            {/* 
            <p className="my-2 py-2">
              I&apos;m a simple man who finds joy in listening to Punjabi music,
              engaging in deep conversations, and exploring new topics through
              podcasts.
            </p>
            <p className="my-2 py-2">
              I&apos;m always looking for new opportunities to learn and grow,
              so feel free to reach out to me!
            </p> */}
          </div>
        </div>

        <div className="col-span-1 grid lg:order-3 justify-items-center">
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72">
            <Image
              className="rounded-full object-cover"
              src="/photo.jpeg"
              unoptimized
              alt="Jaskaran Singh Bhalla"
              layout="fill"
              sizes="(max-width: 640px) 8rem, (max-width: 1024px) 13rem, (max-width: 1280px) 15rem, 18rem"
            />
          </div>
        </div>

      </div>
      {/* Quote */}
      <div className="flex justify-center">
        <EnhancedQuoteComponent />
      </div>
    </div>)
  );
}
