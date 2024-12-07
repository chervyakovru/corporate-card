import React from "react";
import Link from "next/link";
import CreateUserRequest from "@/components/CreateUserRequest";
import UserProfile from "@/components/UserProfile";

async function getUser(id: string) {
  const res = await fetch(`${process.env.URL}/api/users/${id}`);
  if (res.status === 404) {
    throw new Error("User not found");
    // TODO show 404
  }
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  return (
    <div className="container mx-auto p-4">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <UserProfile user={user} />
      <CreateUserRequest />
    </div>
  );
}

export default UserPage;
