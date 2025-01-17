import Nav from "@/components/Nav";
import NftsGrid from "@/components/NftsGrid";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NftsGrid />
    </main>
  );
}
