import { NextSeo } from "next-seo";
import Image from "next/image";
import { useEffect } from "react";
import logo from "../../../../public/images/avatar-logo-chalet.jpg";
import styles from "../../../styles/Home.module.scss";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://apps.apple.com/br/app/ucondo/id1062839687";
  }, []);

  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Sistema uCondo - Condomínio Parque Chalet"
        description="Sistema uCondo - Condomínio Parque Chalet"
        openGraph={{
          type: "website",
          url: "https://parquechalet.com.br",
          title: "Sistema uCondo - Condomínio Parque Chalet",
          description: "Sistema uCondo - Condomínio Parque Chalet",
          images: [
            {
              url: "https://parquechalet.com.br/images/og-banner.jpg",
              width: 800,
              height: 420,
              alt: "Sistema uCondo - Condomínio Parque Chalet",
            },
          ],
          site_name: "Sistema uCondo - Condomínio Parque Chalet",
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
        <h1 className={styles.redirect}>Redirecionando para AppStore...</h1>
      </main>

      {/* <footer className={styles.footer} /> */}
    </div>
  );
}
