import { NextSeo } from "next-seo";
import Image from "next/image";
import logo from "../../public/images/avatar-logo-chalet.png";
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

        <Image src={logo} width="300" height="300" alt="Condomínio Parque Chalet" />
      </main>

      {/* <footer className={styles.footer} /> */}
    </div>
  );
}
