"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserList from "./UserList";
import UserRequestList from "./UserRequestList";
import Link from "next/link";
import { User } from "@/lib/types/user";
import { UserRequest } from "@/lib/types/userRequest";
import { useRouter } from "next/navigation";

interface AdminPanelProps {
  users: User[];
  userRequests: UserRequest[];
}

function AdminPanel({ users, userRequests }: AdminPanelProps) {
  const router = useRouter();

  async function handleApprove(id: string) {
    try {
      await fetch(`/api/userRequests/approve/${id}`, { method: "POST" });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">All Users</TabsTrigger>
          <TabsTrigger value="requests">User Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserList users={users} />
        </TabsContent>
        <TabsContent value="requests">
          <UserRequestList requests={userRequests} onApprove={handleApprove} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdminPanel;
