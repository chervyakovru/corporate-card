import React from "react";
import BusinessCard from "@/components/BusinessCard";
import { User } from "@/lib/types/user";

async function getUser(id: string): Promise<User> {
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
    <main className="flex min-h-screen items-center justify-center p-4">
      <BusinessCard {...user} />
    </main>
  );
}

export default UserPage;
