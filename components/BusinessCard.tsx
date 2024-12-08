"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { QrCode, FileText, MessageCircle, Send } from "lucide-react";
import QRCode from "./QrCode";
import RequestCardModal from "./RequestCardModal";
import ThemeToggle from "./ThemeToggle";
import { createVcfString } from "@/lib/utils";
import VcfButton from "./VcfButton";

function getWhatsAppLink(phone: string) {
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
}
function getTelegramLink(username: string) {
  return `https://t.me/${username}`;
}

interface BusinessCardProps {
  name: string;
  photoUrl: string;
  email: string;
  phoneNumber: string;
  address: string;
  companyName: string;
  url: string;
  role: string;
  telegramUsername: string;
}

export default function BusinessCard({
  name,
  photoUrl,
  email,
  phoneNumber,
  companyName,
  url,
  address,
  role,
  telegramUsername,
}: BusinessCardProps) {
  const [showQR, setShowQR] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="relative">
        <div className="absolute right-4 top-4 z-10">
          <ThemeToggle />
        </div>
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
          <Image
            alt={name}
            src={photoUrl}
            className="object-cover"
            fill
            sizes="192"
          />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-muted-foreground">{role}</p>
        <p className="font-semibold">{companyName}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
        <p className="text-sm text-muted-foreground">{phoneNumber}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setShowQR(!showQR)}>
          <QrCode className="mr-2 h-4 w-4" />
          {showQR ? "Hide" : "Show"} QR Code
        </Button>
        <VcfButton
          name={name}
          email={email}
          phone={phoneNumber}
          address={address}
          url={url}
          companyName={companyName}
          role={role}
        >
          <FileText className="mr-2 h-4 w-4" />
          Download VCF
        </VcfButton>
        <Button variant="outline" size="sm" asChild>
          <a
            href={getWhatsAppLink(phoneNumber)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={getTelegramLink(telegramUsername)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send className="mr-2 h-4 w-4" />
            Telegram
          </a>
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsModalOpen(true)}
        >
          Request New Card
        </Button>
      </CardFooter>
      {showQR && (
        <QRCode
          value={createVcfString({
            name,
            role,
            phone: phoneNumber,
            address,
            email,
            url,
            companyName,
          })}
        />
      )}
      <RequestCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
}
