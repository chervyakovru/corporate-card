"use client";

import { Button } from "@/components/ui/button";
import { createVcfString } from "@/lib/utils";

interface VcfButtonProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  companyName: string;
  url: string;
  role: string;
  children?: React.ReactNode;
}

export default function VcfButton({
  name,
  email,
  phone,
  address,
  companyName,
  url,
  role,
  children,
}: VcfButtonProps) {
  const handleDownloadVcf = () => {
    const vcfContent = createVcfString({
      name,
      role,
      phone,
      address,
      email,
      url,
      companyName,
    });

    const blob = new Blob([vcfContent], { type: "text/vcard" });
    const linkUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = linkUrl;
    a.download = `${name}.vcf`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleDownloadVcf}>
      {children}
    </Button>
  );
}
