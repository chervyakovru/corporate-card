import React from "react";
import AdminPanel from "../../components/AdminPanel";

async function getUsers() {
  const res = await fetch(`${process.env.URL}/api/users`);
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

async function getUserRequests() {
  const res = await fetch(`${process.env.URL}/api/userRequests`);
  if (!res.ok) {
    throw new Error("Failed to fetch userRequests");
  }
  return res.json();
}

export default async function AdminPage() {
  const users = await getUsers();
  const userRequests = await getUserRequests();

  return (
    <main className="min-h-screen bg-background p-8">
      <AdminPanel users={users} userRequests={userRequests} />
    </main>
  );
}
