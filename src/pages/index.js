import { NextSeo } from "next-seo";
import Link from "next/link";
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

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/videos/background.webm" type="video/webm" />
        </video>
        {/* eslint-disable-next-line */}
        <img
          className={styles.logotipo}
          src="/images/avatar-logo-chalet.png"
          alt="
            Condomínio Parque Chalet"
        />
        <nav>
          <ul className={styles["menu-horizontal"]}>
            <Link href="/pdf/regimento-interno.pdf" passHref target="_blank" download>
              <li>
                Regimento
                <br />
                Interno
              </li>
            </Link>
            <Link href="/pdf/convencao.pdf" passHref target="_blank" download>
              <li>
                Convenção de
                <br />
                Condomínio
              </li>
            </Link>
            <Link href="/salao" passHref target="_blank">
              <li>
                Agenda
                <br />
                Salão de Festas
              </li>
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=5541996684954"
              target="_blank"
              rel="noreferrer">
              <li>
                Contato
                <br />
                Síndico
              </li>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5541998932379 "
              target="_blank"
              rel="noreferrer">
              <li>
                Contato
                <br />
                Portaria
              </li>
            </a>
          </ul>

          <ul className={styles["menu-vertical"]}>
            <a href="/pdf/regimento-interno.pdf" target="_blank">
              <li>Regimento Interno</li>
            </a>
            <a href="/pdf/convencao.pdf" target="_blank">
              <li>Convenção de Condomínio</li>
            </a>
            <Link href="/salao" passHref target="_blank">
              <li>Agenda Salão de Festas</li>
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=5541996684954"
              target="_blank"
              rel="noreferrer">
              <li>Contato Síndico</li>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5541998932379 "
              target="_blank"
              rel="noreferrer">
              <li>Contato Portaria</li>
            </a>
          </ul>
        </nav>
      </main>

      {/* <footer className={styles.footer} /> */}
    </div>
  );
}
