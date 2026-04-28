import { NextResponse } from "next/server";
import { FEATURES } from "../../services/WhySection";

export async function GET(req: Request) {
    return NextResponse.json({ resp: FEATURES });
}