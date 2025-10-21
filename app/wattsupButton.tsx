/* 'use client';

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
    //502531849
  const phoneNumber = "972502531849"; // <--- Replace with seller's phone (no + or leading 0)
  const message = encodeURIComponent("שלום, אני מעוניין לשמוע פרטים נוספים לגבי הטיפול להפסקת עישון"); // pre-filled message

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      size="lg"
      onClick = {() => handleClick()}
      className="bg-[#25D366] hover:bg-[#20b955] text-white px-8 py-4 text-lg"
    >
      <MessageCircle className="ml-2 h-5 w-5" />
      יצירת קשר בוואטסאפ
    </Button>
  );
}*/