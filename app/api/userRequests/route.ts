import { UserRequest } from "@/lib/types/userRequest";
import { getData, saveData } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getData();
    return Response.json(data.userRequests);
  } catch (error) {
    console.error("Error in GET user requests:", error);
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body: Omit<UserRequest, "id"> = await request.json();
    const id = uuidv4();
    const userRequest = { id, name: body.name, phoneNumber: body.phoneNumber };

    const data = await getData();
    const newUserRequests = [...data.userRequests, userRequest];

    await saveData({ ...data, userRequests: newUserRequests });

    return Response.json({}, { status: 201 });
  } catch (error) {
    console.error("Error in GET user requests:", error);
    return NextResponse.json({}, { status: 500 });
  }
}
