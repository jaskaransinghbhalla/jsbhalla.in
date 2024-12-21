import SignInButton from "@/components/buttons/signin-button";
import MovieGrid from "../../components/watchlog/grid";
import { getServerSession } from "next-auth";

export default async function Watchlog() {
  const session = await getServerSession();

  if (session) {
    return (
      <div className="flex flex-col items-center mb-8">
        <div className=" w-full px-4 mt-5 flex">
          <h2 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-900 pb-2 m-4">
            Watchlogs
          </h2>
        </div>
        <div className="flex flex-wrap px-4 lg:mb-4">
          <MovieGrid />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col m-8">
        <div className="text-xl"> Please Authenticate</div>
        <SignInButton />
      </div>
    );
  }
}
