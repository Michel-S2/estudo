
import { Header } from "@/components/Header";
import styles from "./page.module.css";
import { Sobre } from "@/components/Sobre";
import { Section } from "@/components/Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <Header/>
      <Section/>
      <Sobre/>
    </div>
  )
}
