import { NextResponse } from "next/server";
import { TESTIMONIALS, SPLASH_POSITIONS } from "../../services/Testimonials";

export async function GET(req: Request) {
    return NextResponse.json({ 
        resp: TESTIMONIALS,
        splashPositions: SPLASH_POSITIONS
    });
}