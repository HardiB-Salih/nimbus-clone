"use client";

import { useEffect, useState } from "react";
import SettingModal from "@/components/modal/setting-modal";
import CoverImageModal from "@/components/modal/cover-image-modal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingModal />
      <CoverImageModal />
    </>
  );
}
