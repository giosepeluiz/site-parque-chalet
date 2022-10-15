import { NextSeo } from "next-seo";
import Image from "next/image";
import { useEffect } from "react";
import logo from "../../../public/images/avatar-logo-chalet.jpg";
import styles from "../../styles/Home.module.scss";

export default function Home() {
  useEffect(() => {
        
    window.location.href = "https://docs.google.com/spreadsheets/d/1Oya7jzjO7IcJRnAF85pf3yS-3TKg8BxE/edit?usp=sharing&ouid=107761874180587304044&rtpof=true&sd=true";

  }, []);

  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="AGE Maio/2022 - Exemplo Balancete - Condomínio Parque Chalet"
        description="AGE Maio/2022 - Exemplo Balancete - Condomínio Parque Chalet"
        openGraph={{
          type: "website",
          url: "https://parquechalet.com.br",
          title: "AGE Maio/2022 - Exemplo Balancete - Condomínio Parque Chalet",
          description: "AGE Maio/2022 - Exemplo Balancete - Condomínio Parque Chalet",
          images: [
            {
              url: "https://parquechalet.com.br/images/og-banner.jpg",
              width: 800,
              height: 420,
              alt: "AGE Maio/2022 - Exemplo Balancete - Condomínio Parque Chalet",
            },
          ],
          site_name: "AGE Maio/2022 - Exemplo Balancete - Condomínio Parque Chalet",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "icons/favicon.ico",
          },
        ]}
      />

      <main className={styles.main}>
        <Image src={logo} width="300" height="300" alt="Condomínio Parque Chalet" />
        <h1 className={styles.redirect}>Redirecionando para o AGE Maio/2022 - Exemplo Balancete...</h1>
      </main>

      {/* <footer className={styles.footer} /> */}
    </div>
  );
}
