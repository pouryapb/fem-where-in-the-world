"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function BackNavigator() {
  const router = useRouter();

  return (
    <button className="btn w-32" onClick={() => router.back()}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Back</span>
    </button>
  );
}
