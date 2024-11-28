
import { Header } from "@/components/Header";
import styles from "./page.module.css";
import { Sobre } from "@/components/Sobre";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div>
      <Header/>
      <Section/>
      <Sobre/>
    </div>
  )
}
