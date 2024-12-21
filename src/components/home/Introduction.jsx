import Image from "next/image";
import EnhancedQuoteComponent from "./quote";

export default function Introduction() {
  return (
    <div className="h-screen w-screen grid justify-items-center bg-stone-900">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3 lg:mr-8 order-2 lg:order-1 text-white text-lg border">
          {/* Name */}
          <h1 className="font-semibold">
            Hello there, I&apos;m Jaskaran Singh Bhalla!
          </h1>
          {/* Brief Intro */}
          <div className="text-justify md:text-justify">
            <p className="my-2 py-2">
              I am a pre-final year student at{" "}
              <a className="font-semibold">
                Indian Institute of Technology, New Delhi
              </a>{" "}
              pursuing my Bachelors&apos;s of Technology in Textile Engineering
              with Minor Degree in{" "}
              <span className="font-semibold">
                Computer Science &amp; Entrepreneurship.
              </span>
            </p>

            <p className="my-2 py-2">
              I&apos;m a simple man who finds joy in listening to Punjabi music,
              engaging in deep conversations, and exploring new topics through
              podcasts.
            </p>
            <p className="my-2 py-2">
              I&apos;m always looking for new opportunities to learn and grow,
              so feel free to reach out to me!
            </p>
          </div>
        </div>
        <div className="col-span-1 grid justify-items-center order-1 mb-8 lg:mb-0">
          <Image
            className="rounded-full border-stone-700/50 shadow-lg border"
            src="/photo.jpg"
            unoptimized
            alt="Jaskaran Singh Bhalla"
            width={240}
            height={288}
          />
        </div>
      </div>
      {/* Quote */}
      <EnhancedQuoteComponent />
    </div>
  );
}
