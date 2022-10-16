import { NextSeo } from "next-seo";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Condomínio Parque Chalet"
        description="Condomínio Parque Chalet"
        openGraph={{
          type: "website",
          url: "https://parquechalet.com.br",
          title: "Condomínio Parque Chalet",
          description: "Condomínio Parque Chalet",
          images: [
            {
              url: "https://parquechalet.com.br/images/og-banner.jpg",
              width: 800,
              height: 420,
              alt: "Condomínio Parque Chalet",
            },
          ],
          site_name: "Condomínio Parque Chalet",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "icons/favicon.ico",
          },
        ]}
      />

      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}

      <main className={styles.main}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/videos/background.webm" type="video/webm" />
        </video>
        {/* eslint-disable-next-line */}
        <nav>
          <ul className={styles["menu-horizontal"]}>
            <a href="/doc/regimento-interno.pdf" target="_blank">
              <li>
                Regimento
                <br />
                Interno
              </li>
            </a>
            <a href="/doc/convencao.pdf" target="_blank">
              <li>
                Convenção de
                <br />
                Condomínio
              </li>
            </a>
            <Link href="/salao" passHref>
              <li>
                Agenda
                <br />
                Salão de Festas
              </li>
            </Link>
            <Link href="/simulacao" passHref>
              <li>
                Simulação de
                <br />
                Mensalidade
              </li>
            </Link>
            <a href="https://api.whatsapp.com/send?phone=5541998932379 " rel="noreferrer">
              <li>
                Contato
                <br />
                Portaria
              </li>
            </a>
          </ul>

          <ul className={styles["menu-vertical"]}>
            <a href="/pdf/regimento-interno.pdf">
              <li>Regimento Interno</li>
            </a>
            <a href="/pdf/convencao.pdf">
              <li>Convenção de Condomínio</li>
            </a>
            <Link href="/salao" passHref>
              <li>Agenda Salão de Festas</li>
            </Link>
            <Link href="/simulacao" passHref>
              <li>Simulação de Mensalidade</li>
            </Link>
            <a href="https://api.whatsapp.com/send?phone=5541998932379 " rel="noreferrer">
              <li>Contato Portaria</li>
            </a>
          </ul>
        </nav>
      </main>
    </div>
  );
}
