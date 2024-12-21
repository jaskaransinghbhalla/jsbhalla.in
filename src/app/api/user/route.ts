import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../../lib/auth";
export async function GET() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) {
    return {
      message: "Hello World!",
    };
  }
  return NextResponse.json(
    {
      message: "You are not logged in",
    },
    {
      status: 403,
    }
  );
}
