import { NextResponse } from "next/server";

export async function POST(req: Request) {
  debugger;
  const data = await req.json();
  console.log("New Contact Message:", data);
  return NextResponse.json({ message: "Message received" }, { status: 200 });
}
