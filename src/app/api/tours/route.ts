import { getTours } from "@/db/tour/tour";
import { NextResponse } from "next/server";

export async function GET() {
    const tours = await getTours();

    if (tours == null) {
        return new NextResponse("Tours not found", { status: 404 });
    }
    return NextResponse.json(tours);
}