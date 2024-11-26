'use client'

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostContextProvider } from "./context/PostContext";


export default function Home() {
  return (
    <PostContextProvider >
      <div className="flex flex-col items-center">
        <h1 className="text-center p-5 text-3xl">Titulo da página</h1>
        <Header/>
        <Footer/>
      </div>
    </PostContextProvider>
  );
}
