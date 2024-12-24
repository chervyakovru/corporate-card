import { User } from "@/lib/types/user";
import { getData, saveData } from "@/lib/utils";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const EMAIL_STUB = "name@domain.com";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await getData();
    const userRequest = data.userRequests.find((user) => user.id === params.id);
    if (!userRequest) {
      throw new Error(`User Request with id: ${params.id} not found`);
    }
    const id = uuidv4();
    const newUser: User = {
      ...userRequest,
      id,
      email: EMAIL_STUB,
      address: "",
      companyName: "",
      url: "",
      role: "",
      telegramUsername: "",
      photoUrl: "",
    };

    const newUserRequests = data.userRequests.filter(
      (userRequest) => userRequest.id !== params.id
    );
    const newUsers = [...data.users, newUser];

    await saveData({ ...data, users: newUsers, userRequests: newUserRequests });

    return Response.json({}, { status: 200 });
  } catch (error) {
    console.error("Error in POST user requests approve:", error);
    return NextResponse.json({}, { status: 500 });
  }
}
