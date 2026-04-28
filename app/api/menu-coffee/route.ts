
import { NextResponse } from "next/server";
import { COFFEES } from "../../services/MenuSection";

export async function GET(req: Request) {
    return NextResponse.json({resp: COFFEES});
}