import { Chat } from "@/components/Chat";
import { ChatContextProvider } from "@/context/ChatContext";
import { UserContextProvider } from "@/context/UserContext";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto max-w-lg py-3">
      <UserContextProvider>
        <ChatContextProvider>
          <h1 className="text-3xl text-center my-3">Chat Simples</h1>
          <Chat/>
        </ChatContextProvider>
      </UserContextProvider>
    </div>
  );
}
