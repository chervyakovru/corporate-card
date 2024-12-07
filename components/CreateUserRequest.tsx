"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateUserRequestModal from "./CreateUserRequestModal";

function CreateUserRequest() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className="mt-4">
        Create New User Request
      </Button>
      <CreateUserRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default CreateUserRequest;
