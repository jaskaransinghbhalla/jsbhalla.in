import Image from 'next/image';

export default function Introduction() {
  return (
    <div className="my-8 md:my-16 grid justify-items-center">
      <div className="grid-cols-1 grid lg:grid-cols-8">
        <div className="col-span-5 lg:mr-8 order-2 lg:order-1">
          <h1 className="font-semibold">
            Hello there, I&apos;m Jaskaran Singh Bhalla!
          </h1>
          <div className="text-justify md:text-justify">
            <p className="my-2 py-2">
              I am a pre-final year student at{" "}
              <a className="font-semibold">
                Indian Institute of Technology, New Delhi
              </a>{" "}
              pursuing my Bachelors&apos;s of Technology in Textile Engineering with
              Minor Degree in{" "}
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
              I&apos;m always looking for new opportunities to learn and grow, so
              feel free to reach out to me!
            </p>
          </div>
        </div>
        <div className="col-span-3 grid justify-items-center order-1 mb-8 lg:mb-0">
          <Image
            className="rounded-full border-stone-700/50 shadow-lg border"
            src="/photo.jpg"
            alt="Jaskaran Singh Bhalla"
            width={240}
            height={288}
          />
        </div>
      </div>
      <div className="mt-4">
        <blockquote className="lg:mx-24 px-4 lg:px-14 py-4 mt-6 border-stone-500 bg-stone-600 shadow-md ">
          <p className="text-center italic leading-relaxed text-white">
            &ldquo;In the realm of Computer Science and Business, I&apos;m a blend of
            Technology &amp; Entrepreneurship, weaving innovation into opportunity
            at every step&rdquo;
          </p>
        </blockquote>
      </div>
    </div>
  );
}