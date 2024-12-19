import { Chat } from "@/components/Chat";
import { ChatContextProvider } from "@/context/ChatContext";
import { UserContextProvider } from "@/context/UserContext";

export default function Home() {
  return (
    <div className="container mx-auto max-w-lg py-3">
      <UserContextProvider> {/*Context do user*/}
        <ChatContextProvider> {/*Context do chat*/}
          <h1 className="text-3xl text-center my-3">Chat Simples</h1>
          <Chat/> {/*Component pra mostrar na tela*/}
        </ChatContextProvider>
      </UserContextProvider>
    </div>
  );
}
