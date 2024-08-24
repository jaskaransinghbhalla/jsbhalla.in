import CVPage from "./cv";

export default function Page() {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className=" w-full px-4 mt-5 flex">
        <h2 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-900 m-4">
          Resume
        </h2>
      </div>
      <div className="hidden lg:inline-flex">
        <CVPage device={""} />
      </div>
      <div className="lg:hidden">
        <CVPage device={"mobile"} />
      </div>
    </div>
  );
}
