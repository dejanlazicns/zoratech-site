import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { email, app_id } = await req.json();

  if (!email || !app_id) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const { error } = await supabase.from("waitlist").insert({
    email,
    app_id,
    source: "zoratech.tech",
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "Already on the list" }, { status: 409 });
    }
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
